import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import font_styles from "../font/font";
import MyAppText from "../components/MyAppText";

export default function TestFlashcard() {
  const [point, setPoint] = useState(0);
  const [review, setReview] = useState("");
  const [value, onChangeText] = useState("");

  function isTrue(v) {
    return v === "v";
  }

  return (
    <SafeAreaView style={StyleSheet.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image source={require("../img/green-texture.png")}></Image>
          <MyAppText content="Kiểm tra bộ từ" format="bold" size={25} style={[styles.pageTitle]}>
            Kiểm tra bộ từ
          </MyAppText>
          {/**button save */}
        </View>

        <View style={styles.content}>
          <MyAppText content={point + "/10"} format="bold"
            style={{
              color: "red",
              position: "absolute",
              right: 30,
            }}
          >
            {point + "/10"}
          </MyAppText>
          <View
            style={{
              marginTop: 20,
              marginBottom: 20,
              width: "100%",
              height: 157,
              borderWidth: 1,
              borderRadius: 15,
              borderColor: "black",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <MyAppText content="festi" format="bold" size={30} style={{}}>festi</MyAppText>
              <TextInput
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  borderBottomWidth: 2,
                  borderBottomColor: "black",
                  color: "#E84118"
                }}
                onChangeText={(text) => onChangeText(text)}
                value={value}
              ></TextInput>
              <MyAppText content="al" format="bold" size={30} style={{ }}>al</MyAppText>
            </View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              borderRadius: 10,
              width: 150,
              height: 45,
              alignItems: "center",
              justifyContent: "center",
              
            }}
            onPress={() => {
              setPoint((prev) => {
                const test = isTrue(value);
                if (test) {
                  return (prev + 1);
                }
                else {
                  return prev;
                }
              });
              setReview(() => {
                const test = isTrue(value);
                if (test) {
                  return "Bạn đã trả lời đúng!";
                } else {
                  return "Bạn đã trả lời sai!";
                }
              });
            }}
          >
            <MyAppText content="Submit" format="regular" size={15}
              style={{
                color: "#fff",
              }}
            >
              Submit
            </MyAppText>
          </TouchableOpacity>
          <MyAppText content={review} format="bold" size={25}
            style={[styles.review, styles.true]}
          >
            {review}
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

  content: {
    padding: 30,
    alignItems: "center",
  },

  review: {
    marginTop: 30,
    textAlign: "center"
  },

  true: {
    color: "#84D037",
  },

  false: {
    color: "#E84118",
  }
});
