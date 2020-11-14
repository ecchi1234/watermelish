import React from "react";

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert
} from "react-native";

import InputArea from "../components/InputArea";
import EachWordRow from "../components/EachWordRow";
import font_styles from "../font/font";
import MyAppText from "../components/MyAppText";

export default function EditFlashcard({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      {/**title page */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image source={require("../img/green-texture.png")}></Image>
          <MyAppText content="Chỉnh sửa bộ từ" format="bold" size={25} style={[styles.pageTitle]}>
            Chỉnh sửa bộ tư
          </MyAppText>
          {/**button save */}
        </View>

        <View style={styles.saveGroup}>
          <MyAppText content="Lưu lại" format="italic" size={15} style={{}}>Lưu lại</MyAppText>
          <TouchableOpacity
            onPress={() => {
              return Alert.alert("Thông báo", "Bạn đã thêm thành công", [
                {
                  text: "Back to home",
                  onPress: () => navigation.goBack(),
                },
                {
                  text: "Cancel",
                  onPress: () => console.log("cancel"),
                },
              ]);
            }}
          >
            <Image
              resizeMode={"contain"}
              source={require("../img/save-button.png")}
            ></Image>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          {/**name of flashcard word*/}

          <View>
            <MyAppText content="Tên bộ từ" format="regular" size={15} style={[styles.titleText]}></MyAppText>
            <InputArea type="Ten bo tu"></InputArea>
          </View>
          {/** choose display image of flashcard */}
          <View style={{ marginBottom: 10 }}>
            <MyAppText content="Background" format="regular" size={15} style={[styles.titleText]}>Background</MyAppText>
            <View style={styles.chooseImageGroup}>
              <Button title={"Chọn ảnh"} color={"black"}></Button>
              <MyAppText content="spring.jpg" format="regular" size={15} style={styles.fileName}>spring.jpg</MyAppText>
            </View>
          </View>
          <View>
            <EachWordRow></EachWordRow>
            <EachWordRow></EachWordRow>
            <EachWordRow></EachWordRow>
            <EachWordRow></EachWordRow>
          </View>

          <View>
            <MyAppText content="Thêm từ vựng" format="regular" size={15} style={{}}></MyAppText>
            <TouchableOpacity onPress={() => console.log("tapped")}>
              <Image source={require("../img/add-button.png")} style={{width: 45, height: 45}}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  pageTitle: {
    position: "absolute",
    top: 30,
    marginLeft: 20,
    color: "#fff",
  },
  saveGroup: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 30,
  },
  chooseImageGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: 30,
  },
  fileName: {
    marginLeft: 5,
  },
  titleText: {
    marginBottom: 10,
  },
  saveText: {
    fontStyle: "italic",
  },
});
