import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button, IconButton, Modal } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const UserProfileBtn = () => {
  const navigation = useNavigation();
  const [isFollowing, setIsFollowing] = useState(false);
  const onfollowing = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <>
      <View style={styles.container}>
        <Pressable onPress={onfollowing}>
          <Button
            mode="contained-tonal"
            style={[styles.button, isFollowing && styles.followingButton]}
            buttonColor="FFFFFF"
          >
            {isFollowing ? "Following" : "Follow"}
          </Button>
        </Pressable>
        <Pressable>
          <Button mode="contained-tonal" style={styles.buttons}>
            Message
          </Button>
        </Pressable>
        <IconButton
          icon="account-plus"
          iconColor="#000"
          containerColor="#ddd"
          style={{ borderRadius: 8 }}
          size={20}
          onPress={() => console.log("Pressed")}
        />
      </View>
    </>
  );
};

export default UserProfileBtn;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 2,
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 5,
    backgroundColor: "#fff",
  },
  buttons: {
    borderRadius: 10,
    paddingHorizontal: 20,
    backgroundColor: "#dddddd",
    fontSize: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  //

  button: {
    backgroundColor: "#dddddd",
    borderRadius: 10,
    paddingHorizontal: 20,
    width: 140,

    fontSize: 20,
    color: "black",
  },
  followingButton: {
    backgroundColor: "blue",
    color: "white",
    borderRadius: 10,
    paddingHorizontal: 10,
    width: 140,
    fontSize: 15,
  },
});
