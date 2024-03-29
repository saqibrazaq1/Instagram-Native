import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileHeader from "../ProfileScreen/ProfileHeader";
import { Divider } from "react-native-paper";
import ProfileMain from "../ProfileScreen/ProfileMain";
import PostsNavigation from "../ProfileScreen/PostsNavigation";
import ProfileDetails from "../ProfileScreen/ProfileDetails";
import UserProfileBtn from "../../components/UserProfileBtn";

const UserProfile = ({ route }) => {
  const { userData } = route.params;
  //   console.log(userData.name);

  return (
    <>
      <ProfileHeader user={userData} />
      <Divider />
      <ProfileMain user={userData} />
      <View style={styles.conatiner}>
        <ProfileDetails user={userData} />
      </View>
      <UserProfileBtn />
      <View style={{ flex: 1 }}>
        <PostsNavigation />
      </View>
    </>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: "white",
    width: "100%",
  },
});
