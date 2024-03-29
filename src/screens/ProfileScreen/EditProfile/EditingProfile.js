import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Appbar, Avatar, Divider, Icon, Switch } from "react-native-paper";
import { useSelector } from "react-redux";
import EditingTextInputs from "../../../components/EditingTextInputs";
import { database } from "../../../../firebase/firebaseConfig";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

const EditingProfile = () => {
  const navigation = useNavigation();
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const currentUser = useSelector((state) => state.auth.currentUser);

  const [updateName, setUpdateName] = useState("");
  const [updateUser, setUpdateUser] = useState({
    username: "",
    email: "",
    bio: "",
    age: "",
    gender: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const userDocRef = doc(database, "users", currentUser?.userId);
      const docSnapshot = await getDoc(userDocRef);
      if (docSnapshot.exists()) {
        const userData = docSnapshot.data();
        setUpdateName(userData.name);
        setUpdateUser(userData);
      }
    };

    fetchData();
  }, [currentUser]);

  const handleEdits = async () => {
    try {
      const userDocRef = doc(database, "users", currentUser?.userId);

      if (updateUser.username.trim() === "") {
        throw new Error("Username cannot be empty");
      }

      await updateDoc(userDocRef, {
        ...updateUser,
        name: updateName,
      });

      navigation.goBack();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <>
      <View style={{ backgroundColor: "white" }}>
        <View>
          <Appbar.Header style={{ backgroundColor: "#fff" }}>
            <Appbar.BackAction onPress={() => navigation.goBack()} />
            <Appbar.Content title="Edit Profile" />
            <Pressable style={{ marginRight: 15 }} onPress={handleEdits}>
              <Icon source={"check"} size={29} color="darkgreen" />
            </Pressable>
          </Appbar.Header>
        </View>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Avatar.Image
            source={{
              uri:
                currentUser?.proImgLink ||
                "https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
            size={70}
          />
          <Pressable
            style={styles.iconsssss}
            onPress={() => console.log("Pressed")}
          >
            <View style={styles.icon}>
              <Icon source={"plus-circle-outline"} color="white" size={20} />
            </View>
          </Pressable>
          <Text style={{ fontSize: 14, marginTop: 7 }}>
            Edit Picture or Avatar
          </Text>
        </View>
        <View>
          <EditingTextInputs
            label={"Name"}
            value={updateName}
            placeholder={"Name"}
            onChangeText={(text) => setUpdateName(text)}
          />
          <EditingTextInputs
            label={"Bio"}
            value={updateUser.bio}
            placeholder={"Bio"}
            onChangeText={(text) => setUpdateUser({ ...updateUser, bio: text })}
          />
          <EditingTextInputs
            label={"username"}
            value={updateUser.username}
            placeholder={"UserName"}
            onChangeText={(text) =>
              setUpdateUser({ ...updateUser, username: text })
            }
          />
          <EditingTextInputs
            label={"Age"}
            value={updateUser.age}
            placeholder={"Age"}
            onChangeText={(text) => setUpdateUser({ ...updateUser, age: text })}
          />
          <EditingTextInputs
            label={"Gender"}
            value={updateUser.gender}
            placeholder={"Gender"}
            onChangeText={(text) =>
              setUpdateUser({ ...updateUser, gender: text })
            }
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
            alignItems: "center",
            paddingHorizontal: 17,
          }}
        >
          <Text>Show Threads Badge</Text>
          <Switch
            value={isSwitchOn}
            color="blue"
            onValueChange={onToggleSwitch}
          />
        </View>
      </View>
      <Divider />
    </>
  );
};

export default EditingProfile;

const styles = StyleSheet.create({
  iconsssss: {
    width: 20,
  },
  icon: {
    position: "relative",
    left: 18,
    bottom: 18,
    backgroundColor: "#000",
    borderRadius: 50,
  },
});
