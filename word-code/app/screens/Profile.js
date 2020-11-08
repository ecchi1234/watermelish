import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import MyAppText from "../components/MyAppText";

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View>
          <Image source={require("../img/profile-avatar.png")}></Image>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View>
              <MyAppText
                content="Nguyen Duc Toi"
                format="bold"
                size={25}
              ></MyAppText>
            </View>
            <View style={{ marginLeft: 5 }}>
              <MyAppText content="Tham gia từ 01/01/2020"></MyAppText>
              <TouchableOpacity>
                <Image source={require("../img/edit-button.png")}></Image>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <View>
            <MyAppText content="Thống kê" format="bold" size={15}></MyAppText>
          </View>
          <View style={{ alignItems: "center" }}>
            <View style={{ flexDirection: "row" }}>
              <Image source={require("../img/count-word.png")}></Image>
              <MyAppText
                content="100 từ"
                format="regular"
                size={15}
              ></MyAppText>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Image source={require("../img/count-point.png")}></Image>
              <MyAppText
                content="100 điểm"
                format="regular"
                size={15}
              ></MyAppText>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <MyAppText
                content="Mục tiêu hằng ngày"
                format="bold"
                size={15}
              ></MyAppText>
            </View>
            <View>
              <TouchableOpacity>
                <Image source={require("../img/edit-button.png")}></Image>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Image source={require("../img/progress.png")}></Image>
            <MyAppText content="155" format="bold" size={15}></MyAppText>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#609F20",
            borderRadius: 20,
          }}
        >
          <TouchableOpacity>
            <MyAppText
              content="Đăng xuất"
              format="bold"
              size={15}
              style={styles.signOutText}
            ></MyAppText>
          </TouchableOpacity>
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
  scroll: {
    padding: StatusBar.currentHeight,
  },

  signOutText: {
    color: "#fff",
  },
});
