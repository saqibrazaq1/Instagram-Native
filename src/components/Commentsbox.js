import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState } from "react";
import {
  Avatar,
  Button,
  Divider,
  IconButton,
  TextInput,
} from "react-native-paper";
import { database } from "../../firebase/firebaseConfig";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useSelector } from "react-redux";

const Commentsbox = ({ postCommentsData }) => {
  const [comment, setComment] = useState("");
  const [isSending, setIsSending] = useState(false);
  const currentUser = useSelector((state) => state.auth?.currentUser);
  console.log(currentUser?.userId, "id");
  const sendComment = async () => {
    setIsSending(true);
    try {
      const postRef = doc(database, "post", postCommentsData?.postId);
      const commentMeta = {
        comment,
        userId: currentUser?.userId,
        username: currentUser?.name,
        userIdImg: currentUser?.proImgLink,
      };
      await updateDoc(postRef, {
        comments: arrayUnion(commentMeta),
      });
      setComment("");
    } catch (error) {
      console.log(error.code);
    } finally {
      setIsSending(false);
    }
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          minHeight: 36,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <Text style={{ fontWeight: 600 }}>Comments</Text>
      </View>
      <Divider />
      <View style={{ flex: 1 }}>
        <FlatList
          data={postCommentsData?.comments}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                paddingVertical: 4,
                justifyContent: "space-between",
              }}
            >
              <Avatar.Image
                source={{
                  uri: item?.userIdImg,
                }}
                size={30}
              />
              <View style={{ marginLeft: 10, flex: 1 }}>
                <Text style={{ fontWeight: 600, fontSize: 14 }}>
                  {item?.username}
                </Text>
                <Text style={{ fontSize: 12 }}>{item?.comment}</Text>
              </View>
              <IconButton
                icon={"heart"}
                size={16}
                onPress={() => console.log("heart")}
              />
            </View>
          )}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 20,
          paddingVertical: 4,
          alignItems: "center",
        }}
      >
        <Avatar.Image source={{ uri: currentUser.proImgLink }} size={34} />
        <TextInput
          placeholder="Write a comment"
          value={comment}
          onChangeText={(value) => setComment(value)}
          style={{ flex: 1, marginLeft: 5, padding: 0 }}
          mode="outlined"
          dense={40}
        />
        <IconButton
          icon={"send"}
          style={{ marginLeft: 6 }}
          onPress={sendComment}
          loading={isSending}
        />
      </View>
    </View>
  );
};

export default Commentsbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
