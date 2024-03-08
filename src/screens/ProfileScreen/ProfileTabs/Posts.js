import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Icon } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Posts = () => {
  const posts = useSelector((state) => state.frposts.firebasePostsData);
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      2000;
    });
  }, []);

  const currentuser = useSelector((state) => state.auth?.currentUser);
  // console.log(currentuser, "aaayaaa");

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("userposts", {
          selectedPost: item,
          selectedUser: currentuser,
        })
      }
      stlye={styles.postCont}
    >
      {item.postImage && item.postImage.length > 0 && (
        <>
          <Image
            style={{ height: 141, width: 141 }}
            source={{ uri: item.postImage[0] }}
          />

          {item.postImage.length > 1 && (
            <View style={styles.icons}>
              <Icon source="card-multiple" size={21} color="white" />
            </View>
          )}
        </>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
      />
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 600,
    flexDirection: "row",
    overflow: "auto",
    width: 425,
  },
  postCont: {
    flexWrap: "wrap",
  },
  icons: {
    position: "absolute",
    right: 3,
    top: 2,
  },
});
