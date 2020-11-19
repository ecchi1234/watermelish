import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import FlashcardRow from "../components/FlashcardRow";
import MyAppText from "../components/MyAppText";

export default function Flashcards({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: 20 }}>
          <MyAppText content="Thêm mới bộ từ" format="bold" style={{ color: "#84D037"}}>
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
          <MyAppText content="Các bộ từ" format="bold" style={{ color: "#84D037"}}>
            Các bộ từ
          </MyAppText>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("FlashcardHome")}
            >
              <FlashcardRow name="Spring"></FlashcardRow>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("FlashcardHome")}
            >
              <FlashcardRow name="Spring"></FlashcardRow>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("FlashcardHome")}
            >
              <FlashcardRow name="Spring"></FlashcardRow>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("FlashcardHome")}
            >
              <FlashcardRow name="Spring"></FlashcardRow>
            </TouchableOpacity>
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
  },

  addButton: {
    width: 50,
    height: 50,
  },

  scrollView: {
    // padding: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    width: "100%",
    padding: 20,
  },
});
