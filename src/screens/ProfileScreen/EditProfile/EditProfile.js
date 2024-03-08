import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button, IconButton, Modal } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const EditProfile = () => {
  const navigation = useNavigation();
  const editing = () => {
    navigation.navigate('editprofile');
  }
  return (
    <>
      <View style={styles.container}>
        <Pressable onPress={editing}>
          <Button
            mode="contained-tonal"
            style={styles.buttons}
            buttonColor="FFFFFF"
          >
            Edit Profile
          </Button>
        </Pressable>
        <Pressable>
          <Button mode="contained-tonal" style={styles.buttons}>
            Share Profile
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

export default EditProfile;

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
});
