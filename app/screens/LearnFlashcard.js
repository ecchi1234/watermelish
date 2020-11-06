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

export default function LearnFlashcard() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Image source={require("../img/green-texture.png")}></Image>

          <Text style={[font_styles.font, styles.pageTitle]}>
            Bộ từ: Spring
          </Text>
        </View>

        <View style={{ margin: 30 }}>
          <Image
            style={{ flex: 1 }}
            source={require("../img/flashcard-back.png")}
          ></Image>
        </View>

        <View style={{ alignItems: "center" }}>
          <View style={[styles.english, styles.word]}>
            <Text style={[font_styles.font, { color: "#fff", fontWeight: "bold", fontSize: 30 }]}>
              festival
            </Text>
            <Text style={[font_styles.font, { color: "#fff" }]}>
                (n)
            </Text>
            <Image
              source={require("../img/sound.png")}
              style={styles.soundButton}
            ></Image>
          </View>
          <View style={styles.arrow}>
            <Image
              source={require("../img/left.png")}
              style={{ position: "absolute", top: -100, left: -170 }}
            />
            <Image
              source={require("../img/right.png")}
              style={{ position: "absolute", top: -100, right: -170 }}
            />
          </View>
        </View>

        <View style={{ alignItems: "center", marginBottom: 20 }}>
          <Text style={[font_styles.font, { fontStyle: "italic" }]}>
            Nhấn mũi tên để di chuyển qua các thẻ
          </Text>
          <Text style={[font_styles.font, { fontStyle: "italic" }]}>
            Nhấn loa để nghe phát âm
          </Text>
          <Text style={[font_styles.font, { fontStyle: "italic" }]}>
            Nhấn vào thẻ để lật thẻ
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  pageTitle: {
    position: "absolute",
    top: 50,
    marginLeft: 20,
    fontSize: 25,
    color: "#fff",
    fontWeight: "bold",
  },

  word: {
    height: 160,
    width: 300,
    borderRadius: 10,
    marginBottom: 10,
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  soundButton: {
    position: "absolute",
    right: 0,
    top: 0,
  },

  english: {
    backgroundColor: "#84D037",
  },

  arrow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
