import React, { useState } from "react";
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

export default function Signup ({ navigation }) {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, confirmPassword] = useState('');
  
  const signUp = () => {
    fetch('http://watermelish.herokuapp.com/dangky', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
        },
      body: JSON.stringify({
        username: username,
        password: password,
        name: name,
      }),
    })
    .then(response => response.json())
    .then((json) => {
      console.log(json[0].result);
      alert(json[0].result);
    })
    .catch((error) => {
      console.error(error);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: "row", alignItems: "center", }}>
          <Image source={require("../img/watermelon-signup.png")} style={styles.img} />
        </View>
        <View style={{ flexDirection: "column", alignItems: "center", width: 270}}>
          <View style={styles.inputView} >
            <TextInput
              style={styles.inputText}
              placeholder="Username"
              onChangeText={(username) => setUsername(username)}
              value={username}
              onBlur={() => {
                fetch(`http://watermelish.herokuapp.com/kiemtrataikhoan/${username}`)
                .then(response => response.json())
                .then((json) => {
                  if (json[0].exist_account == "yes") {
                    console.log('Username existed');
                    alert('Username already exists');
                  } else if (json[0].exist_account == "no") {
                    console.log("Valid username")
                    return;
                  }
                })
                .catch((error) => {
                  console.error(error);
                });
              }}
            />
          </View>
          <View style={styles.inputView} >
            <TextInput
              style={styles.inputText}
              placeholder="Fullname"
              onChangeText={(name) => setName(name)}
              value={name}
            />
          </View>
          <View style={styles.inputView} >
            <TextInput
              secureTextEntry
              style={styles.inputText}
              placeholder="Password"
              onChangeText={(password) => setPassword(password)}
              value={password}
            />
          </View>
          <View style={styles.inputView} >
            <TextInput
              secureTextEntry
              style={styles.inputText}
              placeholder="Re-enter Password"
              onChangeText={(confirmPass) => confirmPassword(confirmPass)}
              value={confirmPass}
              onBlur={() => {
                if (password !== confirmPass) {
                  alert("Password and Confirm password do not match")
                }
              }}
            />
          </View>
        </View>
        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => signUp()}
        >
          <View style={styles.signupBtn}>
            <MyAppText
            content="Đăng ký"
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
            navigation.goBack();
          }}
        >
          <View style={styles.loginBtn}>
            <MyAppText
              content="Đăng nhập"
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
    // padding: 20,
  },
  scroll: {
    padding: StatusBar.currentHeight,
  },

  img: {
    marginTop: 20,
    marginBottom: 30,
    flex: 1,
    height: 150,
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

  signupBtn: {
    width: 186,
    alignItems: "center",
    backgroundColor: "#609F20",
    borderRadius: 50,
    shadowColor: "0 4 4 rgba(0, 0, 0, 0.25)",
    marginBottom: 20,
    marginTop: 20
  },

  loginBtn: {
    alignItems: "center",
  },

});
