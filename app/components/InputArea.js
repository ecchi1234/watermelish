import React, { Component } from "react";
import { TextInput, StyleSheet } from "react-native";

const InputArea = (props) => {
  const [value, onChangeText] = React.useState("");

  const handleInputValue = () => {
    if (props.type==="Tieng anh") {
      props.getValue(props.row.id, value, "english");
    }
    else if (props.type==="Tieng viet") {
      props.getValue(props.row.id, value, "vietnamese");
    }
    else if (props.type==="Ten bo tu") {
      props.getNameFlashcard(value);
    }
  }

  return (
    <TextInput
      style={styles.inputField}
      onChangeText={(text) => {
        onChangeText(text);
        // handleInputValue();
      }}
      value={value}
      placeholder={props.type}
      onBlur={() => {
        handleInputValue();
      }}
    />
  );
};

const styles = StyleSheet.create({
  inputField: {
    height: 40,
    backgroundColor: "#f1f1f1",
    borderRadius: 5,
    marginVertical: 10,
    padding: 5,
    fontSize: 15,
  },
});

export default InputArea;
