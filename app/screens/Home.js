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
import AnimatedLoader from "react-native-animated-loader";

import MyAppText from "../components/MyAppText";
import { setWordFound } from "../../globalVariable";
import { setWordEnter } from "../../globalVariable";

export default function Home({ navigation }) {
  const [value, onChangeText] = useState("");
  const [isLoading, setLoading] = useState(false);
  const findWord = () => {
    return new Promise((resolve, reject) => {

      fetch("http://watermelish.herokuapp.com/timtu/nhom13/" + value)
        .then((response) => response.json())
        .then((json) => {
          setLoading(false);
          setWordFound(json[0].result);
          resolve();
        })
        .catch((error) => {
          console.error(error);
          reject(error);
        })
        .finally(() => setLoading(false));
    })
  };

  return isLoading ? (<AnimatedLoader
    visible={true}
    overlayColor="rgba(255,255,255,0.75)"
    source={require("../img/loading-effect/pre-load.json")}
    animationStyle={{ width: 100, height: 100 }}
    speed={1}
  />) : (
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
              setLoading(true);
              setWordEnter(value);
              findWord().then(() => {
                setWordEnter(value);
                navigation.push("Result");
              });

              // navigation.push("Result");
              // if (value === "Festival") {
              //   navigation.push("Result");
              // } else {
              //   console.log("false");
              // }
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
          <View>
            <MyAppText
              content="Spring"
              format="bold"
              size={15}
              style={styles.titleDetail}
            ></MyAppText>
          </View>
          <View>
            <Image
              style={styles.imageBackground}
              source={require("../img/flashcard-back.png")}
            ></Image>
          </View>
        </View>

        <View style={{ width: "100%", marginBottom: 20 }}>
          <View>
            <MyAppText
              content="Gợi ý học hôm nay"
              format="bold"
              size={20}
              style={styles.titleIntro}
            ></MyAppText>
          </View>
          <View>
            <MyAppText
              content="Autumn"
              format="bold"
              size={15}
              style={styles.titleDetail}
            ></MyAppText>
          </View>
          <View style={{ width: "100%" }}>
            <Image
              style={styles.imageBackground}
              source={require("../img/autumn.png")}
            ></Image>
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
    paddingTop: StatusBar.currentHeight,
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
    padding: 20,
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
});
