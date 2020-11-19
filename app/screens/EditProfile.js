import React, { useState }from "react";
import {
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Text
} from "react-native";

import MyAppText from "../components/MyAppText";

export default function EditProfile ({ navigation }) {
  const [fullname, setFullname] = useState("");
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const checkInput = () => {
    // Có nhập password cũ
    if (oldPass === "nhom13") {

      // Chưa nhập password mới
      if (!newPass) {
        alert("Please enter new password");
        return;
      }

      // Chưa nhập lại password mới
      if (!confirmPass) {
        alert("Please re-enter new password");
        return;
      }
    } else if (oldPass && (oldPass != "nhom13")) {
      alert("Old password is incorrect");
      return;
    }

    // Có nhập password mới
    if (newPass) {

      // Chưa nhập password cũ
      if (!oldPass) {
        alert("Please enter old password");
        return;
      }

      // Chưa nhập lại password mới
      if (!confirmPass) {
        alert("Please re-enter new password");
        return;
      }
    }

    // Có nhập lại password mới
    if (confirmPass) {

      // Chưa nhập password cũ
      if (!oldPass) {
        alert("Please enter old password");
        return;
      }

      // Chưa nhập password mới
      if (!newPass) {
        alert("Please enter new password");
        return;
      }
    }

    // Password mới và nhập lại không giống
    if (newPass != confirmPass) {
      alert("New password and Confirm password do not match");
      return;
    }

    // Nhập đúng đủ 3 trường password
    if (oldPass === "nhom13" && (newPass == confirmPass)) {
      alert("Profile saved successfully");
      return;
    }
    
    // Có nhập tên
    if (fullname) {
      alert("Profile saved successfully");
      return;
    }
  };

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
            size={23}
          >Chỉnh sửa thông tin
          </MyAppText>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", }}>
          <Image source={require("../img/watermelon-repass.png")} style={styles.img} />
        </View>
        <View style={{ flexDirection: "column", alignItems: "center", width: 260}}>
          <View style={styles.inputView} >
            <TextInput
              style={styles.inputText}
              placeholder="Tên của bạn"
              onChangeText={(fullname) => setFullname(fullname)}
              value={fullname}
            />
          </View>
          <View style={styles.inputView} >
            <TextInput
              secureTextEntry
              style={styles.inputText}
              placeholder="Password cũ"
              onChangeText={(oldPass) => setOldPass(oldPass)}
              value={oldPass}
            />
          </View>
          <View style={styles.inputView} >
            <TextInput
              secureTextEntry
              style={styles.inputText}
              placeholder="Password mới"
              onChangeText={(newPass) => setNewPass(newPass)}
              value={newPass}
            />
          </View>
          <View style={styles.inputView} >
            <TextInput
              secureTextEntry
              style={styles.inputText}
              placeholder="Nhập lại password mới"
              onChangeText={(confirmPass) => setConfirmPass(confirmPass)}
              value={confirmPass}
            />
          </View>
        </View>
        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={checkInput}
        >
          <View style={styles.saveBtn}>
            <MyAppText
              content="Lưu lại"
              format="bold"
              style={{
                color: "#fff",
                paddingTop: 10,
                paddingBottom: 10
              }}
              size={22}
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
              size={19}
            >
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
    // padding: 20,
  },
  scroll: {
    paddingHorizontal: StatusBar.currentHeight,
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
