import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import PostHeader from "./postHeader";
import PostBody from "./postBody";
import PostFotter from "./postFotter";
import { database } from "../../../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useSelector } from "react-redux";

const PostMain = ({ postData }) => {
  const [postUser, setPostUser] = React.useState(null);
 
  const getPoster = async () => {
    const getUserRef = doc(database, "users", postData.userId);
    const respo = await getDoc(getUserRef);
    setPostUser(respo.data());
  };
  useEffect(() => {
    getPoster();
  }, [postData?.userId]);
  return (
    <View style={styles.container}>
      <PostHeader postContent={postData} postBy={postUser} />
      <PostBody postContent={postData.postImage} />
      <PostFotter postContent={postData} />
    </View>
  );
};

export default PostMain;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "orange",
    height: "100vh",
  },
});
