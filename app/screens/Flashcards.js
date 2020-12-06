import React, { useState, useEffect } from "react";
const fetch = require("node-fetch");
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Platform,
  StatusBar,
  ActivityIndicator,
} from "react-native";

import FlashcardRow from "../components/FlashcardRow";
import MyAppText from "../components/MyAppText";
import {toCapitalCase} from "../services/convertString"
import { setFlashcardNames } from "../../globalVariable";

export default function Flashcards({ route, navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [flashcardArray, setFlashcardArray] = useState([]);
  useEffect(() => {
    fetch("http://watermelish.herokuapp.com/danhsachcacbotu/nhom13")
      .then((response) => response.json())
      .then((json) => {
        setFlashcardArray(json[0].result);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ marginBottom: 20 }}>
          <MyAppText
            content="Thêm mới bộ từ"
            format="bold"
            style={{ color: "#84D037" }}
          >
            Thêm mới bộ từ
          </MyAppText>
          <View style={{ marginTop: 10 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("AddFlashcard")}
            >
              <Image
                source={require("../img/add-button.png")}
                style={styles.addButton}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <MyAppText
            content="Các bộ từ"
            format="bold"
            style={{ color: "#84D037" }}
          >
            Các bộ từ
          </MyAppText>
          <View>
            {isLoading ? (
              <ActivityIndicator />
            ) : (
              flashcardArray.map((card, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      setFlashcardNames(card);
                      navigation.navigate("FlashcardHome");
                    }}
                  >
                    <FlashcardRow name={toCapitalCase(card)}></FlashcardRow>
                  </TouchableOpacity>
                );
              })
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight,
  },

  addButton: {
    width: 50,
    height: 50,
  },

  scrollView: {
    // padding: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    width: "100%",
    paddingHorizontal: 20,
  },
});
