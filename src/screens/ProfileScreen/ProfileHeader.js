import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Drawer, IconButton } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const ProfileHeader = (props) => {
  const [active, setActive] = React.useState("");
  return (
    <>
      <StatusBar backgroundColor="#fff" translucent={false} />
      <View style={styles.container}>
        <View style={styles.headericons}>
          <IconButton
            icon={() => <Feather name="lock" size={20} color="black" />}
          />
          <Text style={{ fontSize: 20, fontWeight: "600" }}>
            {props.currentUser?.name || "razaq"}
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
