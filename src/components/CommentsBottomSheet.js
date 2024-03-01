import React, { useRef } from "react";
import { View, Text } from "react-native";
import { Divider, IconButton } from "react-native-paper";
import RBSheet from "react-native-raw-bottom-sheet";
import { Feather } from "@expo/vector-icons";
import Commentsbox from "../components/Commentsbox";

export default function CommentsBottomSheet({postComments}) {
  const refRBSheet = useRef();

  return (
    <>
      <IconButton
        icon={() => <Feather name="message-circle" size={24} color="black" />}
        onPress={() => refRBSheet.current.open()}
      />

      <View
        style={{
          flex: 1,
        }}
      >
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          height={500}
          customStyles={{
            wrapper: {
              backgroundColor: "rgba(0,0,0,0.8)",
            },
            container: {
              borderTopEndRadius: 20,
              borderTopStartRadius: 20,
            },
            draggableIcon: {
              backgroundColor: "gray",
            },
          }}
        >
          <Commentsbox postCommentsData={postComments}/>
        </RBSheet>
      </View>
    </>
  );
}
