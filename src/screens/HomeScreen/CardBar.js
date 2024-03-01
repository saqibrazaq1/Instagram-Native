import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "./card";
import { useDispatch, useSelector } from "react-redux";
import { openLibarary } from "../../utils/cameraOrImage";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { nanoid } from "@reduxjs/toolkit";
import { doc, setDoc } from "firebase/firestore";
import { database, storage } from "../../../firebase/firebaseConfig";
import { setIsLoading,setUpdateProImg } from "../../../redux/Slices/authSlice";

const CardBar = () => {
  const image = [
    {
      index: 1,
      url: "https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg",
      name: "image1",
    },
    {
      index: 2,
      url: "https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "image2",
    },
    {
      index: 3,
      url: "https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "image3",
    },
    {
      index: 4,
      url: "https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "image4",
    },
    {
      index: 5,
      url: "https://fastly.picsum.photos/id/512/200/300.jpg?hmac=la5xkVbvHxjdyuCGyQl9H0Hhom_c8BN-5heSmUIPUzE",
      name: "image5",
    },
    {
      index: 6,
      url: "https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg",
      name: "image6",
    },
    {
      index: 7,
      url: "https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "image7",
    },
    {
      index: 8,
      url: "https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "image8",
    },
    {
      index: 9,
      url: "https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "image9",
    },
    {
      index: 10,
      url: "https://fastly.picsum.photos/id/512/200/300.jpg?hmac=la5xkVbvHxjdyuCGyQl9H0Hhom_c8BN-5heSmUIPUzE",
      name: "image10",
    },
  ];

  const dispatch = useDispatch();
  const activeUser = useSelector((state) => state.auth.currentUser);
  const userId = useSelector((state) => state.auth.currentUser?.userId);
  const loadinguser = useSelector((state) => state.auth.isLoading);
  const [buttonLoading, setButtonLoading] = React.useState(false);

  const userProfileImage = async (uri) => {
  dispatch(setIsLoading(true))
    if (!uri) return;
    try {
      const resp = await fetch(uri);
      const blobtype = await resp.blob();
      const storageRef = ref(storage, `user_profile_images/${nanoid()}`);
      console.log(storageRef, "storage")
      await uploadBytes(storageRef, blobtype);
      const downloadURL = await getDownloadURL(storageRef);
      console.log(downloadURL , "downloadded")
      const userDocRef = doc(database, "users", userId);
      await setDoc(userDocRef, { proImgLink: downloadURL }, { merge: true });
      dispatch(setUpdateProImg({proImgLink: downloadURL}))
      
      console.log("uploding image successfully")
    } catch (error) {
      console.log("error uploding profile img")
      dispatch(setIsLoading(false))
    }finally{
      dispatch(setIsLoading(false))
      setButtonLoading(true);
    }
  };

  const ProfilePhotoCamera = async () => {
    const response = await openLibarary(); 
    try {
      await userProfileImage(response?.uri);
    } catch (error) {
      console.log("Error while uploading profile image:", error);
    }
}
  return (
    <View>
      <ScrollView contentContainerStyle={styles.container} horizontal={true}>
        <Card userImage={activeUser?.proImgLink} userName={activeUser?.name} onPress={ProfilePhotoCamera} isLoading={loadinguser}   />
        {image.map((item) => (
          <Card userImage={item.url} key={item.index} userName={item.name} />
        ))}
      </ScrollView>
      <View
        style={{
          marginTop: 5,
          borderBottomWidth: 1,
          borderColor: "#0000001a",
          flex: 1,
        }}
      />
    </View>
  );
};

export default CardBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // backgroundColor: 'green',
    height: 98,
    // justifyContent: 'center',
    alignItems: "center",
    gap: 10,
  },
});
