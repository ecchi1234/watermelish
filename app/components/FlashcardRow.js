import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import MyAppText from "../components/MyAppText";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
export default function FlashcardRow(props) {
  return (
    <View style={styles.container}>
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
    resizeMode: "contain",
  },
});
