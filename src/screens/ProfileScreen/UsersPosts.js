import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Appbar, Icon } from "react-native-paper";
import PostHeader from "../HomeScreen/postHeader";
import PostBody from "../HomeScreen/postBody";
import PostFotter from "../HomeScreen/postFotter";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const UsersPosts = ({route }) => {
  const navigation = useNavigation();
  const { selectedPost ,selectedUser } = route.params;
  
  // console.log( selectedPost , "asd")
  
  return (
    <View backgroundColor="white" style={styles.container}>
      <Appbar.Header style={{ backgroundColor: "#fff" }}>
        <Appbar.BackAction onPress={() => {navigation.goBack(null)}} />
        <Appbar.Content title="Posts" />
      </Appbar.Header>
      <View>
        <PostHeader postBy={selectedUser} Userposts={selectedPost} />
        <PostBody  postContent={selectedPost.postImage} />
        <PostFotter  postContent={selectedPost} />
      </View>
    </View>
  );
};

export default UsersPosts;

const styles = StyleSheet.create({});
