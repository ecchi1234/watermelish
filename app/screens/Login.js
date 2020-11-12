import React from "react";
import {
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import MyAppText from "../components/MyAppText";

export default function Login ({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={{ flexDirection: "row", alignItems: "center", }}>
          <Image source={require("../img/watermelon-login.png")} style={styles.img} />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
          <MyAppText
            content="Welcome"
            format="bold"
            style={{ color: "#609F20"}}
            size={25}
          />
        </View>
        <View style={{ flexDirection: "column", alignItems: "center", width: 270, marginBottom: 30}}>
          <View style={styles.inputView} >
            <TextInput
              style={styles.inputText}
              placeholder="Username"
            />
          </View>
          <View style={styles.inputView} >
            <TextInput
              secureTextEntry
              style={styles.inputText}
              placeholder="Password"
            />
          </View>
        </View>
        <TouchableOpacity style={{ alignItems: "center" }}>
          <View style={styles.loginBtn}>
            <MyAppText
            content="Đăng nhập"
            format="bold"
            style={{
              color: "#fff",
              paddingTop: 10,
              paddingBottom: 10
            }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
          <View style={styles.signupBtn}>
            <MyAppText
              content="Đăng ký"
              format="italic"
              style={{ color: "#609F20" }}
            />
          </View>
        </TouchableOpacity>
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
    padding: 20,
  },
  scroll: {
    padding: StatusBar.currentHeight,
  },

  img: {
    marginTop: 50,
    marginBottom: 20,
    flex: 1,
    height: 200,
    resizeMode: "contain",
  },

  inputView: {
    width: "100%",
    height: 37,
    borderBottomWidth: 2,
    borderBottomColor: "#609F20",
    justifyContent: "center",
    marginBottom: 20,
    padding: 5
  },
  inputText: {
    height: 28,
    color: "rgba(0, 0, 0, 0.65)",
  },

  loginBtn: {
    width: 186,
    alignItems: "center",
    backgroundColor: "#609F20",
    borderRadius: 50,
    shadowColor: "0 4 4 rgba(0, 0, 0, 0.25)",
    marginBottom: 20
  },

  signupBtn: {
    alignItems: "center",
  },

});
