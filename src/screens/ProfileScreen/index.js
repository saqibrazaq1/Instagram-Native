import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileHeader from "./ProfileHeader";
import { Divider } from "react-native-paper";
import { useSelector } from "react-redux";
import ProfileMain from "./ProfileMain";
import ProfileDetails from "./ProfileDetails";
import EditProfile from "../ProfileScreen/EditProfile/EditProfile";
import PostsNavigation from "./PostsNavigation";

const Profile = ({route}) => {
  const currentUser = useSelector((state) => state.auth.currentUser);

  return (
    <>
      <ProfileHeader user={currentUser} />
      <Divider />
      <ProfileMain  user={currentUser}/>
      <ProfileDetails user={currentUser} />
      <EditProfile  />
      <View style={{ flex: 1 }}>
        <PostsNavigation />
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({});
