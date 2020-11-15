import React from "react";

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
  StatusBar,
} from "react-native";

import font_styles from "../font/font";
import EachCardList from "../components/EachCardList";
import MyAppText from "../components/MyAppText";

export default function FlashcardHome({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/**title page */}
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View>
          <Image source={require("../img/green-texture.png")}></Image>

          <MyAppText content="Bộ từ: Spring" format="bold" size={25} style={[styles.pageTitle]}>
            Bộ từ: Spring
          </MyAppText>
          <View style={styles.buttonHeaderGroup}>
            <View style={{ marginRight: 10, borderRadius: 10 }}>
              <TouchableOpacity
                style={[styles.button, styles.learn]}
                onPress={() => navigation.push("LearnFlashcard")}
              >
                <MyAppText content="Học" format="regular" size={12} style={styles.learnLabel}></MyAppText>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={[styles.button, styles.test]}
                onPress={() => navigation.push("TestFlashcard")}
              >
                <MyAppText content="Kiểm tra" format="regular" size={12} style={styles.learnLabel}></MyAppText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.editButtonGroup}>
          <MyAppText content="Chỉnh sửa" format="italic" size={15}
            style={[{marginRight: 10 }]}
          >
            Chỉnh sửa
          </MyAppText>
          <TouchableOpacity onPress={() => navigation.push("EditFlashcard")}>
            <Image source={require("../img/edit-button.png")}></Image>
          </TouchableOpacity>
        </View>

        <View style={{ width: "100%", padding: 20}}>
          <Image
            style={{ width: "100%", resizeMode: "contain" }}
            source={require("../img/flashcard-back.png")}
          ></Image>
        </View>

        <View>
          <EachCardList english="festival" vietnamese="hoa đào"></EachCardList>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  pageTitle: {
    color: "#ffffff",
    position: "absolute",
    top: 30,
    marginLeft: 10,
  },

  editButtonGroup: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 20,
    alignItems: "center",
  },

  buttonHeaderGroup: {
    flexDirection: "row",
    justifyContent: "flex-start",
    position: "absolute",
    top: 80,
    left: 10,
  },

  button: {
    height: 34,
    backgroundColor: "#2D2727",
    borderRadius: 4,
    justifyContent: "center",
  },

  test: {
    width: 91,
  },

  learn: {
    width: 54,
  },

  learnLabel: {
    color: "#fff",
    textAlign: "center",
  },

  imageBackground: {
    resizeMode: "contain",
  },

  scroll: {
    // paddingTop: Platform.OS === "android" ? 20 : 0,
    width: "100%",
  
  },
});
