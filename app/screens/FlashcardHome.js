import React, { useState, useEffect } from "react";
import AnimatedLoader from "react-native-animated-loader";

import { AntDesign } from "@expo/vector-icons";

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
  ActivityIndicator,
} from "react-native";

import font_styles from "../font/font";
import EachCardList from "../components/EachCardList";
import MyAppText from "../components/MyAppText";

// module for audio and flip card
import FlipCard from "react-native-flip-card";
import { Audio } from "expo-av";
import { listAudio } from "../sound/listAudio";

import { flashcardNames } from "../../globalVariable";
import { toCapitalCase } from "../services/convertString";
import { setFlashcardNames } from "../../globalVariable";

export default function FlashcardHome({ route, navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [flashcardWords, setFlashcardWords] = useState([]);
  const [offset, setOffset] = useState(1);
  const getWordsInFlashcard = () => {
    console.log("get data");
    setLoading(true);
    console.log(
      `http://watermelish.herokuapp.com/danhsachbotu/nhom13/${flashcardNames.name}/5/${offset}`
    );
    console.log(offset);
    fetch(
      `http://watermelish.herokuapp.com/danhsachbotu/nhom13/${flashcardNames.name}/5/${offset}`
    )
      .then((response) => response.json())
      .then((json) => {
        setOffset(offset + 1);
        setFlashcardWords([...flashcardWords, ...json[0].result]);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getWordsInFlashcard();
  }, []);

  async function playSound(linkAudio) {
    const soundObject = new Audio.Sound();

    try {
      await soundObject.loadAsync(linkAudio);
      await soundObject.playAsync();
      // Your sound is playing!
    } catch (error) {
      // An error occurred!
      console.log(error);
    }
  }

  return isLoading && offset == 1 ? (
    <AnimatedLoader
      visible={true}
      overlayColor="rgba(255,255,255,0.75)"
      source={require("../img/loading-effect/pre-load.json")}
      animationStyle={{ width: 100, height: 100 }}
      speed={1}
    />
  ) : (
    <SafeAreaView style={styles.container}>
      {/**title page */}
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View>
          <Image source={require("../img/green-texture.png")}></Image>

          <View></View>

          <MyAppText
            content={`Bộ từ: ${toCapitalCase(flashcardNames.name)}`}
            format="bold"
            size={25}
            style={[styles.pageTitle]}
          >
            Bộ từ: Spring
          </MyAppText>
          <View style={styles.buttonHeaderGroup}>
            <View style={{ marginRight: 10, borderRadius: 10 }}>
              <TouchableOpacity
                style={[styles.button, styles.learn]}
                onPress={() => navigation.push("LearnFlashcard")}
              >
                <MyAppText
                  content="Học"
                  format="regular"
                  size={15}
                  style={styles.learnLabel}
                ></MyAppText>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={[styles.button, styles.test]}
                onPress={() => navigation.push("TestFlashcard")}
              >
                <MyAppText
                  content="Kiểm tra"
                  format="regular"
                  size={15}
                  style={styles.learnLabel}
                ></MyAppText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.push("EditFlashcard");
            }}
            style={styles.editButtonGroup}
          >
            <MyAppText
              content="Chỉnh sửa"
              format="italic"
              size={15}
              style={[{ marginRight: 10 }]}
            >
              Chỉnh sửa
            </MyAppText>
            <Image source={require("../img/edit-button.png")}></Image>
          </TouchableOpacity>
        </View>

        <View style={{ width: "100%", padding: 20 }}>
          <Image
            style={{ width: "100%", resizeMode: "contain" }}
            source={require("../img/flashcard-back.png")}
          ></Image>
        </View>

        <View>
          {/* <EachCardList english="festival" vietnamese="hoa đào"></EachCardList> */}
          {flashcardWords.map((word, index) => {
            return (
              <FlipCard
                key={index}
                style={{ alignItems: "center" }}
                flipVertical={true}
                friction={8}
              >
                <View style={[styles.english, styles.word]}>
                  <MyAppText
                    content={word[0]}
                    format="bold"
                    style={[{ color: "#fff" }]}
                  ></MyAppText>
                  <MyAppText
                    content={`(${word[1]})`}
                    format="regular"
                    size={15}
                    style={[{ color: "#fff" }]}
                  ></MyAppText>
                  <TouchableOpacity
                    style={styles.soundButton}
                    onPress={() =>
                      playSound(
                        listAudio[word[0]]
                          ? listAudio[word[0]]
                          : require("../sound/peach-blossom.mp3")
                      )
                    }
                  >
                    <Image source={require("../img/sound.png")}></Image>
                  </TouchableOpacity>
                </View>

                <View style={[styles.vietnamese, styles.word]}>
                  <MyAppText
                    content={word[2]}
                    format="bold"
                    style={[{ color: "#fff" }]}
                  ></MyAppText>
                </View>
              </FlipCard>
            );
          })}
        </View>
        {flashcardWords.length >= 5 ? (
          <View style={styles.footer}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => getWordsInFlashcard()}
              //On Click of button load more data
              style={styles.loadMoreBtn}
            >
              <Text style={styles.btnText}>Xem thêm</Text>
              {isLoading ? (
                <ActivityIndicator color="white" style={{ marginLeft: 8 }} />
              ) : null}
            </TouchableOpacity>
          </View>
        ) : null}
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
    // paddingTop: StatusBar.currentHeight
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
    // paddingTop: StatusBar.currentHeight,
  },

  word: {
    height: 160,
    width: 300,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  english: {
    backgroundColor: "#84D037",
  },

  vietnamese: {
    backgroundColor: "#E84118",
  },

  soundButton: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  text: {
    color: "#fff",
  },

  footer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: "#000",
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
  },
});
