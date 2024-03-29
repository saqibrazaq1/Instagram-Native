import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar, Card, IconButton } from "react-native-paper";
const FollowCards = () => {
  return (
    <View style={{ backgroundColor: "#fff", paddingRight: 15, marginTop: 2 }}>
      <Card.Title
        title={"Name"}
        subtitle={"UserName"}
        left={(props) => (
          <Avatar.Image
            size={10}
            source={{
              uri: "https://images.pexels.com/photos/20720452/pexels-photo-20720452/free-photo-of-a-woman-in-a-scarf-is-looking-at-herself-in-a-mirror.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
            {...props}
          />
        )}
        right={(props) => (
          <Pressable>
            <Text style={{ color: "blue", fontWeight: "600", fontSize: 15 }}>
              Unfollow
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default FollowCards;

const styles = StyleSheet.create({});
