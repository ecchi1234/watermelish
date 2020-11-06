import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Platform,
  StatusBar
} from "react-native";
import FlashcardRow from "../components/FlashcardRow";

export default function Flashcards() {
  return <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
          <View style={{marginBottom: 20}}>
              <Text style={{color: "#84D037", fontWeight: "bold", fontSize: 20}}>Thêm mới bộ từ</Text>
              <View>
                  <TouchableOpacity>
                      <Image source={require("../img/add-button.png")} style={styles.addButton}></Image>
                  </TouchableOpacity>
              </View>
          </View>
          <View>
              <Text style={{color: "#84D037", fontWeight: "bold", fontSize: 20}}>Các bộ từ</Text>
              <View>
                  <FlashcardRow name="Spring"></FlashcardRow>
                  <FlashcardRow name="Autumn"></FlashcardRow>
                  <FlashcardRow name="Autumn"></FlashcardRow>
                  <FlashcardRow name="Autumn"></FlashcardRow>
              </View>
          </View>
      </ScrollView>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },

  addButton: {
      width: 60,
      height: 60
  },

  scrollView: {
    padding: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  }
});
