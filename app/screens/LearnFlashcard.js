import React, { useState, useEffect } from "react";
import Swiper from "react-native-web-swiper";
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
import FlipCard from "react-native-flip-card";
import { Audio } from "expo-av";
import font_styles from "../font/font";
import MyAppText from "../components/MyAppText";

class Screen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Swiper
          from={1}
          minDistanceForAction={0.1}
          controlsProps={{
            dotsTouchable: true,
            prevPos: "left",
            nextPos: "right",
            nextTitle: ">",
            nextTitleStyle: { color: "red", fontSize: 24, fontWeight: "500" },
            PrevComponent: ({ onPress }) => (
              <TouchableOpacity onPress={onPress}>
                <Text
                  style={{ color: "white", fontSize: 24, fontWeight: "500" }}
                >
                  {"<"}
                </Text>
              </TouchableOpacity>
            ),
          }}
        >
          <View style={[styles.slideContainer, styles.slide1]}>
            <Text>Slide 1</Text>
          </View>
          <View style={[styles.slideContainer, styles.slide2]}>
            <Text>Slide 2</Text>
          </View>
          <View style={[styles.slideContainer, styles.slide3]}>
            <Text>Slide 3</Text>
          </View>
        </Swiper>
        <Text>hello??</Text>
      </View>
    );
  }
}

export default function LearnFlashcard() {
  async function playSound() {
    const soundObject = new Audio.Sound();

    try {
      await soundObject.loadAsync(require("../sound/festival.mp3"));
      await soundObject.playAsync();
      // Your sound is playing!
    } catch (error) {
      // An error occurred!
      console.log(error);
    }
  }

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image source={require("../img/green-texture.png")}></Image>

          <MyAppText
            content="Bộ từ: Spring"
            format="bold"
            size={25}
            style={[styles.pageTitle]}
          >
            Bộ từ: Spring
          </MyAppText>
        </View>
        <FlipCard flipVertical={true}>
          <View style={{ margin: 30 }}>
            <Image
              resizeMode="contain"
              style={[styles.imageBackground, {}]}
              source={require("../img/flashcard-back.png")}
            ></Image>
          </View>

          <View style={{ margin: 30 }}>
            <Image
              style={styles.imageBackground}
              source={require("../img/autumn.png")}
            ></Image>
          </View>
        </FlipCard>
        <View>
          <FlipCard
            style={{ alignItems: "center" }}
            flipVertical={true}
            friction={8}
          >
            <View style={[styles.english, styles.word]}>
              <MyAppText
                content="festival"
                format="bold"
                style={[{ color: "#fff" }]}
              >
                festival
              </MyAppText>
              <MyAppText
                content="(n)"
                format="regular"
                size={15}
                style={[{ color: "#fff" }]}
              >
                (n)
              </MyAppText>
              <TouchableOpacity
                style={styles.soundButton}
                onPress={() => playSound()}
              >
                <Image source={require("../img/sound.png")}></Image>
              </TouchableOpacity>
            </View>

            <View style={[styles.vietnamese, styles.word]}>
              <MyAppText
                content="lễ hội"
                format="bold"
                style={[{ color: "#fff" }]}
              >
                lễ hội
              </MyAppText>
            </View>
          </FlipCard>

          <View style={styles.arrow}>
            <TouchableOpacity
              style={{ position: "absolute", top: -110, left: 30 }}
              onPress={() => console.log("prev")}
            >
              <Image source={require("../img/left.png")} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ position: "absolute", top: -105, right: 30 }}
              onPress={() => console.log("next")}
            >
              <Image source={require("../img/right.png")} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ margin: 20, flexWrap: "wrap", alignContent: "center" }}>
          <MyAppText
            content="Nhấn mũi tên để di chuyển qua các thẻ"
            format="italic"
            size={15}
            style={{ alignSelf: "center" }}
          >
            Nhấn mũi tên để di chuyển qua các thẻ
          </MyAppText>
          <MyAppText
            content="Nhấn loa để nghe phát âm"
            format="italic"
            size={15}
            style={{}}
          >
            Nhấn loa để nghe phát âm
          </MyAppText>
          <MyAppText
            content="Nhấn vào thẻ để lật thẻ"
            format="italic"
            size={15}
            style={{}}
          >
            Nhấn vào thẻ để lật thẻ
          </MyAppText>
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
    top: 30,
    marginLeft: 20,
    color: "#fff",
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

  vietnamese: {
    backgroundColor: "#E84118",
  },

  arrow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  imageBackground: {
    width: "100%",
    flex: 1,
    resizeMode: "contain",
  },
  container2: {
    flex: 1,
  },

  slideContainer: {
    flex: 1,
    width: 200,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  slide1: {
    backgroundColor: "red",
  },
  slide2: {
    backgroundColor: "blue",
  },
  slide3: {
    backgroundColor: "green",
  },
});
