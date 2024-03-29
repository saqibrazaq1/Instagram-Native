import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";

const FollowSearch = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  return (
    <View>
      <Searchbar
        style={{
          backgroundColor: "#fff",
          borderRadius: 10,
          width: "96%",
          alignSelf: "center",
          height: 50,
          marginVertical: 10,
          fontSize: 22,
        }}
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
    </View>
  );
};

export default FollowSearch;

const styles = StyleSheet.create({});
