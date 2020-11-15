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

import { AuthContext } from "../screens/Context";

import MyAppText from "../components/MyAppText";
import DonutChart from "../components/DonutChart";

export default function Profile({ navigation }) {
  const { Logout } = React.useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <View style={{}}>
            <Image
              source={require("../img/profile-avatar.png")}
              style={{ width: 60, height: 60 }}
            ></Image>
          </View>

          <View style={{}}>
            <View style={{ flexDirection: "column" }}>
              <MyAppText
                content="Nguyen Duc Toi"
                format="bold"
                style={{ color: "#84D037" }}
                size={20}
              ></MyAppText>
            </View>
            <View
              style={{
                // marginLeft: 5,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <MyAppText
                content="Tham gia từ 01/01/2020"
                format="regular"
                size={12}
                style={styles.joinTime}
              ></MyAppText>
              <TouchableOpacity
                onPress={() => {
                  navigation.push("EditProfile");
                }}
              >
                <Image
                  source={require("../img/edit-button.png")}
                  style={{ width: 20, height: 20 }}
                ></Image>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View>
          <View>
            <MyAppText
              content="Thống kê"
              format="bold"
              size={15}
              style={{ color: "#84D037" }}
            ></MyAppText>
          </View>

          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              margin: 20,
              justifyContent: "space-around",
            }}
          >
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
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <MyAppText
                content="Mục tiêu hằng ngày"
                format="bold"
                size={15}
                style={{ color: "#84D037" }}
              ></MyAppText>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("SetTarget");
                }}
              >
                <Image
                  source={require("../img/edit-button.png")}
                  style={{ width: 20, height: 20 }}
                ></Image>
              </TouchableOpacity>
            </View>
          </View>

          {/* <View>
            <Image source={require("../img/progress.png")}></Image>
            <View style={{ position: "absolute", left: 45, top: 35 }}>
              <MyAppText content="155" format="bold" size={15}></MyAppText>
            </View>
          </View> */}
          <View style={{ alignItems: "center", margin: 20 }}>
            <DonutChart max={500} radius={80} style={styles.donutChart} />
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: "40%",
            }}
            onPress={() => {
              // Test Login
              // navigation.navigate("Login");
              Logout();
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#609F20",
                borderRadius: 20,
                padding: 8,
              }}
            >
              <MyAppText
                content="Đăng xuất"
                format="bold"
                size={15}
                style={styles.signOutText}
              ></MyAppText>
            </View>
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
    // alignItems: "center",
    // padding: 20,
  },
  scroll: {
    // padding: StatusBar.currentHeight,
    padding: StatusBar.currentHeight,
    // backgroundColor: "red"
  },

  signOutText: {
    color: "#fff",
  },

  joinTime: {
    color: "grey",
    marginRight: 5,
  },

  donutChart: {
    alignSelf: "center",
  },
});
