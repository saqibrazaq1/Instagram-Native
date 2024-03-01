import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { IconButton } from "react-native-paper";
import { Feather } from "@expo/vector-icons";

const ProfileHeader = ({currentUser}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headericons}>
        <IconButton
          icon={() => <Feather name="lock" size={20} color="black" />}
        />
        <Text style={{fontSize:20,fontWeight:"600"}}>{currentUser?.name || "saqib"}</Text>
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
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "red",
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  headericons: {
    flexDirection: "row",
    alignItems:"center"
  },
  cornericons:{
    flexDirection: "row",
    alignItems:"center"
  }
});
