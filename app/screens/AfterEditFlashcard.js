import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  StatusBar,
} from "react-native";

import MyAppText from "../components/MyAppText";

export default function AfterEditFlashcard({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={require("../img/watermelon-signup.png")}
          style={styles.img}
        />
      </View>
      <View>
        <MyAppText
          content="Success!"
          format="bold"
          size={25}
          style={{ color: "#609F20" }}
        ></MyAppText>
      </View>
      <View>
        <MyAppText
          content="Bộ từ của bạn đã được chỉnh sửa thành công."
          format="regular"
          size={15}
          style={{ textAlign: "center" }}
        ></MyAppText>
      </View>
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => navigation.navigate("FlashcardHome")}
      >
        <View style={styles.signupBtn}>
          <MyAppText
            content="Trở về"
            format="bold"
            style={{
              color: "#fff",
              paddingTop: 10,
              paddingBottom: 10,
            }}
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: StatusBar.currentHeight,
  },

  img: {
    marginTop: 20,
    marginBottom: 30,
    height: 160,
    resizeMode: "contain",
  },

  signupBtn: {
    width: 186,
    alignItems: "center",
    backgroundColor: "#609F20",
    borderRadius: 50,
    marginBottom: 20,
    marginTop: 20,
  },
});
