import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileHeader from "./ProfileHeader";
import { Divider } from "react-native-paper";
import { useSelector } from "react-redux";

const Profile = () => {
   
  return (
    <View style={styles.container}>
      <ProfileHeader />
      <Divider />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
});
