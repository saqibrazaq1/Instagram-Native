import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar, IconButton, TouchableRipple } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const ProfileMain = (props) => {
  const navigation = useNavigation();
  const following = () => {
    navigation.navigate("followingNavigation");
  };
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Avatar.Image
          size={90}
          source={{ uri: props?.user?.proImgLink || null }}
        />
        <Text style={{ marginTop: 10, fontSize: 17 }}>{props?.name}</Text>
      </View>
      <View style={styles.dtails}>
        <View>
          <Pressable
            style={({ pressed }) => ({
              backgroundColor: pressed ? "rgba(0, 0, 0, 0.1)" : "transparent",
              alignItems: "center",
              marginHorizontal: 10,
              borderRadius: 8, // Optional: adds rounded corners for a nicer look
            })}
            android_ripple={{ color: "black" }}
            onPress={() => console.log("Pressed")}
          >
            <Text style={{ fontSize: 20 }}>200</Text>
            <Text style={{ fontSize: 16 }}>Posts</Text>
          </Pressable>
        </View>
        <View>
          <Pressable
            onPress={following}
            style={{ alignItems: "center", marginHorizontal: 10 }}
          >
            <Text style={{ fontSize: 20 }}>500</Text>
            <Text style={{ fontSize: 16 }}>Following</Text>
          </Pressable>
        </View>
        <View>
          <Pressable
            onPress={following}
            style={{ alignItems: "center", marginHorizontal: 10 }}
          >
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
