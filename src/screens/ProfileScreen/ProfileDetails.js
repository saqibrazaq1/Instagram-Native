import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const ProfileDetails = (props) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 16, fontWeight: "600" }}>{props?.user?.bio}</Text>
      <Text style={{ fontSize: 16, fontWeight: "500" }}>Description</Text>
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
    // marginHorizontal: 10,
    paddingLeft: 15,
    marginVertical: 0,
    backgroundColor: "#fff",
  },
});
