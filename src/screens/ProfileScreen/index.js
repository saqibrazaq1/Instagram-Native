import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileHeader from "./ProfileHeader";
import { Divider } from "react-native-paper";
import { useSelector } from "react-redux";
import ProfileMain from "./ProfileMain";
import ProfileDetails from "./ProfileDetails";
import EditProfile from "../ProfileScreen/EditProfile/EditProfile";
import PostsNavigation from "./PostsNavigation";

const Profile = () => {
  const posts = useSelector((state) => state.posts);
  // console.log(posts, "posts");
  const currentUser = useSelector((state) => state.auth.currentUser);
  return (
    <>
      <ProfileHeader user={currentUser} />
      <Divider />
      <ProfileMain />
      <ProfileDetails />
      <EditProfile />
      <View style={{ flex: 1 }}>
        <PostsNavigation />
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({});
