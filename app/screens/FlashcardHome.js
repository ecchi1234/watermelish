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

export default function FlashcardHome({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/**title page */}
      <ScrollView style={styles.scroll}>
        <View>
          <Image source={require("../img/green-texture.png")}></Image>

          <Text style={[font_styles.font, styles.pageTitle]}>
            Bộ từ: Spring
          </Text>
          <View style={styles.buttonHeaderGroup}>
            <View style={{ marginRight: 10, borderRadius: 10 }}>
              <TouchableOpacity
                style={[styles.button, styles.learn]}
                onPress={() => navigation.push("LearnFlashcard")}
              >
                <Text style={styles.learnLabel}>{"Học"}</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={[styles.button, styles.test]}>
                <Text style={styles.learnLabel}>{"Kiểm tra"}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.editButtonGroup}>
          <Text
            style={[font_styles.font, { fontStyle: "italic", marginRight: 10 }]}
          >
            Chỉnh sửa
          </Text>
          <TouchableOpacity onPress={() => navigation.push("EditFlashcard")}>
            <Image source={require("../img/edit-button.png")}></Image>
          </TouchableOpacity>
        </View>

        <View style={{ margin: 30 }}>
          <Image
            style={{ flex: 1 }}
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
    fontWeight: "bold",
    fontSize: 25,
    position: "absolute",
    top: 30,
    marginLeft: 10,
  },

  editButtonGroup: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 10,
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
  },
});
