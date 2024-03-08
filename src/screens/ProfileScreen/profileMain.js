import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar, IconButton } from "react-native-paper";
import { useSelector } from "react-redux";

const ProfileMain = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  // console.log(currentUser.proImgLink)
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Avatar.Image
          size={90}
          source={{ uri: currentUser?.proImgLink || null }}
        />
        <Text style={{ marginTop: 10, fontSize: 17 }}>{currentUser?.name}</Text>
      </View>
      <View style={styles.dtails}>
        <View>
          <Pressable style={{ alignItems: "center", marginHorizontal: 10 }}>
            <Text style={{ fontSize: 20 }}>200</Text>
            <Text style={{ fontSize: 16 }}>Posts</Text>
          </Pressable>
        </View>
        <View>
          <Pressable style={{ alignItems: "center", marginHorizontal: 10 }}>
            <Text style={{ fontSize: 20 }}>500</Text>
            <Text style={{ fontSize: 16 }}>Following</Text>
          </Pressable>
        </View>
        <View>
          <Pressable style={{ alignItems: "center", marginHorizontal: 10 }}>
            <Text style={{ fontSize: 20 }}>500</Text>
            <Text style={{ fontSize: 16 }}>Followers</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ProfileMain;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  dtails: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "center",
    paddingTop: 30,
  },
});
