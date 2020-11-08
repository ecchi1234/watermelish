import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import MyAppText from "../components/MyAppText";

export default function FlashcardRow(props) {
  return (
    <View style={styles.container}>
      <MyAppText content={props.name} format="bold" size={15} style={{  }}></MyAppText>
        <Image
          resizeMode="cover"
          source={require("../img/autumn.png")}
          style={styles.imageBackground}
        ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },

  imageBackground: {
    flex: 1,
    width: "100%",
    resizeMode: "contain"
  }
});
