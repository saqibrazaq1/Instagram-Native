import { Dimensions, Image, StyleSheet, View } from "react-native";
import React from "react";
import Carousel from "react-native-reanimated-carousel";

const PostBody = (props) => {
  const width = Dimensions.get("window").width;

  if (!props.postContent || !Array.isArray(props.postContent)) {
    return null;
  }

  return (
    <View style={{}}>
      <Carousel
        loop={false}
        scrollAnimationDuration={500}
        mode="fade"
        width={width}
        height={width / 1}
        data={props.postContent}
        renderItem={({ item, index }) => (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
            }}
          >
            <Image
              source={{
                uri: item
                  ? item
                  : "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              }}
              style={styles.image}
            />
          </View>
        )}
      />
    </View>
  );
};

export default PostBody;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
});
