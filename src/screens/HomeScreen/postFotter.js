import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  Icon,
  IconButton,
  Modal,
  PaperProvider,
  Portal,
} from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import CommentsBottomSheet from "../../components/CommentsBottomSheet";

const PostFotter = ({postContent}) => {
  const [isLiked, setLiked] = useState(false);
  const handleLikePress = () => {
    setLiked(!isLiked);
    console.log("heart");
  };
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <View style={styles.container}>
      <View style={styles.leftIcons}>
        <IconButton
          icon={isLiked ? "heart" : "heart-outline"}
          onPress={handleLikePress}
        />
        <CommentsBottomSheet postComments={postContent} />
        <IconButton
          icon={() => <Feather name="send" size={24} color="black" />}
          onPress={() => console.log("send")}
        />
      </View>
      <View style={styles.rightIcons}>
        <IconButton
          icon="bookmark-outline"
          onPress={() => console.log("bookmark")}
        />
      </View>
    </View>
  );
};

export default PostFotter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    // minHeight: 139,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  leftIcons: {
    flexDirection: "row",
    gap: -5,
  },
  portal: {
    backgroundColor: "red",
    width: "100vh",
  },
});
