import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const ProfileDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:16 ,fontWeight:"600"}}>Bio</Text>
      <Text style={{fontSize:16 ,fontWeight:"500"}}>Description</Text>
      <Pressable style={styles.button} onPress={() => alert("clicked")}>
        <Text>Links and Other profile Details and 2 more... </Text>
      </Pressable>
    </View>
  );
};

export default ProfileDetails;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "yellow",
    marginHorizontal: 10,
    paddingLeft: 5,
    backgroundColor:"#fff",
  },
});
