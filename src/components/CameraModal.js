import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  View,
  Image,
  FlatList,
  ScrollView,
  Text,
} from "react-native";
import { Button, IconButton } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { openCamera } from "../utils/cameraOrImage";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "../../redux/Slices/postsSlice";
import Modal from "react-native-modal";
import { addDoc, collection, doc } from "firebase/firestore";
import { database, storage } from "../../firebase/firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { GetPosts, getPosts } from "../../redux/Services/firebaseActions";
import { useNavigation } from "@react-navigation/native";

const CameraModal = ({
  modalVisible,
  setModalVisible,
  setcontent,
  setContentData,
}) => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [stepUp, setstepUp] = useState(1);
const [isSending,setIsSending]=useState(false)
 
const cameraOpened = async () => {
    const respContent = await openCamera();
    if (respContent) dispatch(addNewPost(respContent));
    console.log(respContent)
  };

  const navigation = useNavigation();

  const content = useSelector((state) => state.post?.data);
  const loggedUser=useSelector((state)=>state.auth.currentUser)

  const sendPost = async () => {
    setIsSending(true)

    const uploadTasks = [];
    for (const imageUrl of content) {
      const response = await uploadImage(imageUrl.uri);
      uploadTasks.push(response);
    }
    await Promise.all(uploadTasks);
    const postData = {
      postImage: uploadTasks,
      comments: [],
      fileType: "images",
      likes: 0,
      address: location,
      description: description,
      userId:loggedUser?.userId,
    };
    await addDoc(collection(database, "post"), postData);
    setDescription("");
    setLocation("");
    setIsSending(false)
    setModalVisible(false);
  };

  const uploadImage = async (uri) => {
    try {
      const response = await fetch(uri);
      const blob = await response.blob();
      const storageRef = ref(storage, "post_media_files/");
      const filename = `${Date.now()}-${nanoid()}`;
      const imageRef = ref(storageRef, filename);
      await uploadBytes(imageRef, blob);
      const downloadURL = await getDownloadURL(imageRef);
      return downloadURL;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;

    }
  };

  const handleNextstepUp = () => {
    setstepUp(stepUp + 1);
  };
  const handleNextstepDown = () => {
    setstepUp(stepUp - 1);
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        isVisible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        {stepUp === 1 && (
          <View
            style={{
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              paddingVertical: 10,
            }}
          >
            <Text>Post Your Status</Text>
            <View style={{ maxHeight: 300 }}>
              <ScrollView>
                <View style={styles.modalTopView}>
                  {content &&
                    content.map((item, index) => (
                      <Image
                        source={{ uri: item.uri }}
                        key={index}
                        style={styles.imagesContainer}
                      />
                    ))}
                  <View>
                    <IconButton
                      icon="plus"
                      mode="contained-tonal"
                      style={styles.addPhotosBtn}
                      onPress={cameraOpened}
                    />
                  </View>
                </View>
              </ScrollView>
            </View>

            <View>
              <Button mode="elevated" onPress={handleNextstepUp}>
                {" "}
                Next{" "}
              </Button>
            </View>
          </View>
        )}
        {stepUp === 2 && (
          <View
            style={{
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={styles.modalViewBottom}>
              <TextInput
                label="Description"
                value={description}
                onChangeText={(value) => setDescription(value)}
                mode="outlined"
                placeholder="Add some description"
                width={333}
                outlineStyle={{
                  borderWidth: 0.5,
                  borderColor: "#0000001a",
                }}
                activeOutlineColor="#333"
              />
              <TextInput
                label="Location"
                value={location}
                onChangeText={(value) => setLocation(value)}
                placeholder="Optional"
                mode="outlined"
                width={150}
                style={{ marginTop: 10 }}
                outlineStyle={{
                  borderWidth: 0.5,
                  borderColor: "#0000001a",
                }}
                activeOutlineColor="#333"
              />
            </View>
            <View
              style={{
                position: "absolute",
                flexDirection: "row",
                top: 0,
                marginTop: 100,
                gap: 135,
              }}
            >
              <View>
                <Button mode="elevated" onPress={handleNextstepDown}>
                  Back
                </Button>
              </View>
              <View>
                <Button
                  icon="send"
                  loading={isSending}
                  onPress={sendPost}
                  mode="elevated"
                  style={styles.postButton}
                >
                  Send Post
                </Button>
              </View>
            </View>
          </View>
        )}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalTopView: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  imagesContainer: {
    width: 100,
    height: 100,
    gap: 10,
    borderRadius: 10,
  },
  addPhotosBtn: {
    width: 100,
    height: 100,
  },
  modalViewBottom: {
    maxHeight: 300,
    position: "absolute",
    backgroundColor: "white",
    elevation: 1,
    padding: 10,
  },
});
export default CameraModal;
