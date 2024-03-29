import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Drawer, IconButton } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const ProfileHeader = (props) => {
  const navigation = useNavigation();
  // const { name } = props.user;
  // console.log(name, "NAME OF THE USER PROFILE") // Extracting the 'name' property from props.user
  // const currentuser = useSelector((state) => state.currentUser);
  console.log(props?.user?.userData);
  return (
    <>
      <StatusBar backgroundColor="#fff" translucent={false} />
      <View style={styles.container}>
        <View style={styles.headericons}>
          {props?.user === props?.user?.userData ? (
            <IconButton
              icon={() => (
                <Feather name="chevron-left" size={27} color="black" />
              )}
              onPress={() => navigation.goBack()}
            />
          ) : (
            <IconButton
              icon={() => <Feather name="lock" size={27} color="black" />}
            />
          )}
          <Text style={{ fontSize: 20, fontWeight: "600" }}>
            {props.user.name || "Unknown"}
          </Text>
          <IconButton
            icon={() => <Feather name="chevron-down" size={20} color="black" />}
          />
        </View>
        <View style={styles.cornericons}>
          <IconButton
            icon={() => <Feather name="at-sign" size={20} color="black" />}
          />
          <IconButton
            icon={() => <Feather name="plus-square" size={20} color="black" />}
          />
          <IconButton
            icon={() => <Feather name="menu" size={20} color="black" />}
          />
        </View>
      </View>
    </>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    minHeight: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  headericons: {
    flexDirection: "row",
    alignItems: "center",
  },
  cornericons: {
    flexDirection: "row",
    alignItems: "center",
  },
});
