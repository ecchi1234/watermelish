import React, { useReducer, useState } from "react";

import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import MyAppText from "../components/MyAppText";

export default function Login({ navigation }) {
  const [username, onChangeUsername] = useState("Username");
  const [password, onChangePassword] = useState("Password");
  return (
    <View>
      <View>
        <Image source={require("../img/watermelon-login.png")}></Image>
      </View>

      <View>
        <MyAppText
          content="Welcome!"
          format="bold"
          style={styles.welcomeText}
        ></MyAppText>
      </View>

      <View>
        <TextInput
          style={styles.inputField}
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />

        <TextInput
          style={styles.inputField}
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
      </View>

      <View style={{alignItems: "center"}}>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: "#609F20",
              borderRadius: 50,
              width: 186,
              height: 57,
            }}
          >
            <MyAppText content="Login" format="bold" size={15}></MyAppText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <MyAppText content="Sign up" format="italic" size={15}></MyAppText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  welcomeText: {
    color: "#609F20",
  },

  inputField: {
    height: 40,
    marginBottom: 10,
    padding: 5,
    fontSize: 15,
    color: "#7A6666",
    borderBottomWidth: 2,
    borderBottomColor: "#609F20",
  },

  loginButton: {},
});
