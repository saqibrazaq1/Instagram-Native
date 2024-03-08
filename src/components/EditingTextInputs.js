import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { useSelector } from "react-redux";

const EditingTextInputs = ({ label, value, placeholder, onChangeText }) => {
  const [text, setText] = React.useState("");
  const [isFocused, setIsFocused] = React.useState(false);


  
  return (
    <>
      <View
        style={{
          width: "99%",
          alignSelf: "center",
          marginVertical: 20,
          backgroundColor: "white",
        }}
      >
        <TextInput
          label={label}
          mode="editable"
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          style={{
            borderBottomWidth: 1,
            borderColor: "#fff",
            marginVertical: 1,
            backgroundColor: "white",
          }}
        />
      </View>
    </>
  );
};

export default EditingTextInputs;

const styles = StyleSheet.create({});
