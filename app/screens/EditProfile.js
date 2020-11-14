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

export default function EditProfile ({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
          <MyAppText
            content="Chỉnh sửa thông tin"
            format="bold"
            style={{
              color: "#84D037",
              paddingTop: 20,
            }}
            size={25}
          >Chỉnh sửa thông tin
          </MyAppText>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", }}>
          <Image source={require("../img/watermelon-repass.png")} style={styles.img} />
        </View>
        <View style={{ flexDirection: "column", alignItems: "center", width: 270}}>
          <View style={styles.inputView} >
            <TextInput
              style={styles.inputText}
              placeholder="Fullname"
            />
          </View>
          <View style={styles.inputView} >
            <TextInput
              secureTextEntry
              style={styles.inputText}
              placeholder="Password cũ"
            />
          </View>
          <View style={styles.inputView} >
            <TextInput
              secureTextEntry
              style={styles.inputText}
              placeholder="Password mới"
            />
          </View>
          <View style={styles.inputView} >
            <TextInput
              secureTextEntry
              style={styles.inputText}
              placeholder="Nhập lại password mới"
            />
          </View>
        </View>
        <TouchableOpacity style={{ alignItems: "center" }}>
          <View style={styles.saveBtn}>
            <MyAppText
            content="Lưu lại"
            format="bold"
            style={{
              color: "#fff",
              paddingTop: 10,
              paddingBottom: 10
            }}
            >
              Lưu lại
            </MyAppText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <View style={styles.escapeBtn}>
            <MyAppText
              content="Thoát"
              format="italic"
              style={{ color: "#609F20" }}
            >Thoát
            </MyAppText>
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
    marginTop: 20,
    marginBottom: 30,
    flex: 1,
    width: 100,
    height: 100,
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

  saveBtn: {
    width: 186,
    alignItems: "center",
    backgroundColor: "#609F20",
    borderRadius: 50,
    shadowColor: "0 4 4 rgba(0, 0, 0, 0.25)",
    marginBottom: 20
  },

  escapeBtn: {
    alignItems: "center",
  },

});
