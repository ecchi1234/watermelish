import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import MyAppText from "../components/MyAppText";
import { wordFound } from "../../globalVariable";
import { setWordFound } from "../../globalVariable";
import { wordEnter } from "../../globalVariable";
import { setWordEnter } from "../../globalVariable";

export default function Result({ navigation }) {
  const findWord = () => {
    return new Promise((resolve, reject) => {
      fetch("http://watermelish.herokuapp.com/timtu/nhom13/" + value)
        .then((response) => response.json())
        .then((json) => {
          setWordFound(json[0].result);
          resolve();
        })
        .catch((error) => {
          console.error(error);
          reject(error);
        });
    });
  };

  const [value, onChangeText] = useState("");
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View>
          <MyAppText
            content="Good Morning!"
            format="bold"
            size={25}
            style={styles.greet}
          ></MyAppText>
        </View>
        <View>
          <TextInput
            style={styles.inputField}
            onChangeText={(text) => onChangeText(text)}
            value={value}
            placeholder="I'm looking for... "
            placeholderTextColor="grey"
          />
          <TouchableOpacity
            style={styles.seachButton}
            onPress={() => {
              if (value === "Festival") {
                navigation.push("Result");
              } else {
                console.log("false");
              }
            }}
          >
            <Image source={require("../img/search.png")}></Image>
          </TouchableOpacity>
        </View>

        <View>
          <View>
            <MyAppText
              content="Bộ từ sẵn có"
              format="bold"
              size={20}
              style={styles.titleIntro}
            ></MyAppText>
          </View>
          <View style={{ marginBottom: 20 }}>
            <MyAppText
              content={`Đã tìm thấy ${wordFound.words.length} kết quả gần đúng!`}
              format="regular"
              size={15}
            ></MyAppText>
          </View>
          <View style={{ width: "100%" }}>
            {/* <MyAppText
              content="Spring"
              format="bold"
              size={15}
              style={styles.titleDetail}
            ></MyAppText> */}
            {wordFound.words.map((e, index) => {
              return (
                <View
                  key={index}
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: 154,
                    backgroundColor: "#84D037",
                    borderRadius: 20,
                  }}
                >
                  <MyAppText
                    content={e[0]}
                    format="bold"
                    style={styles.word}
                  ></MyAppText>
                  <MyAppText
                    content={`(${e[1]})`}
                    format="regular"
                    style={styles.word}
                  ></MyAppText>
                  <TouchableOpacity style={styles.soundButton}>
                    <Image source={require("../img/sound.png")}></Image>
                  </TouchableOpacity>
                </View>
              );
            })}
            {/* <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: 154,
                backgroundColor: "#84D037",
                borderRadius: 20
              }}
            >
              <MyAppText
                content="festival"
                format="bold"
                style={styles.word}
              ></MyAppText>
              <MyAppText
                content="(n)"
                format="regular"
                style={styles.word}
              ></MyAppText>
              <TouchableOpacity style={styles.soundButton}>
                <Image source={require("../img/sound.png")}></Image>
              </TouchableOpacity>
            </View> */}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: "center",
    // alignItems: "center",
  },

  inputField: {
    height: 40,
    backgroundColor: "#f1f1f1",
    borderRadius: 5,
    marginBottom: 10,
    padding: 5,
    fontSize: 15,
    color: "#7A6666",
  },

  seachButton: {
    position: "absolute",
    right: 5,
    top: 5,
  },

  scroll: {
    padding: StatusBar.currentHeight,
  },

  titleIntro: {
    marginBottom: 5,
    color: "#84D037",
  },

  titleDetail: {
    color: "#000",
    marginBottom: 5,
  },

  imageBackground: {
    width: "100%",
    resizeMode: "contain",
  },

  greet: {
    color: "#84D037",
  },

  word: {
    color: "#fff",
  },
  soundButton: {
    position: "absolute",
    right: 0,
    top: 0,
  },
});
