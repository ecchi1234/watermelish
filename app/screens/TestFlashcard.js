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

export default function TestFlashcard() {
  const [point, setPoint] = useState(0);
  const [review, setReview] = useState("");
  const [value, onChangeText] = useState("");

  function isTrue(v) {
    return v === "v";
  }

  return (
    <SafeAreaView style={StyleSheet.container}>
      <ScrollView>
        <View>
          <Image source={require("../img/green-texture.png")}></Image>
          <Text style={[font_styles.font, styles.pageTitle]}>
            Kiểm tra bộ từ
          </Text>
          {/**button save */}
        </View>

        <View style={styles.content}>
          <Text
            style={{
              color: "red",
              position: "absolute",
              right: 30,
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            {point + "/10"}
          </Text>
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
              <Text style={{ fontWeight: "bold", fontSize: 30 }}>festi</Text>
              <TextInput
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  borderBottomWidth: 2,
                  borderBottomColor: "black",
                }}
                onChangeText={(text) => onChangeText(text)}
                value={value}
              ></TextInput>
              <Text style={{ fontWeight: "bold", fontSize: 30 }}>al</Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              borderRadius: 10,
              width: 150,
              height: 45,
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
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                textAlignVertical: "center",
                fontSize: 20,
              }}
            >
              Submit
            </Text>
          </TouchableOpacity>
          <Text
            style={[styles.review]}
          >
            {review}
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

  content: {
    padding: 30,
    alignItems: "center",
  },

  review: {
    fontSize: 30,
    marginTop: 30,
    fontWeight: "bold",
  },

  false: {
    color: "#84D037",
  },

  true: {
    color: "#E84118",
  }
});
