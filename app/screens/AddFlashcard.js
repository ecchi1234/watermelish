import React from "react";

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

import InputArea from "../components/InputArea";
import EachWordRow from "../components/EachWordRow";
import font_styles from "../font/font";

export default function AddFlashcard() {
  return (
    <View style={styles.container}>
      {/**title page */}
      <View>
        <Image source={require("../img/green-texture.png")}></Image>
        <Text style={[font_styles.font, styles.pageTitle]}>Thêm mới bộ từ</Text>
        {/**button save */}
      </View>

      <View style={styles.saveGroup}>
        <Text style={font_styles.font}>Lưu lại</Text>
        <Image
          resizeMode={"contain"}
          source={require("../img/save-button.png")}
        ></Image>
      </View>

      <View style={styles.content}>
        {/**name of flashcard word*/}

        <View>
          <Text style={font_styles.font}>Tên bộ từ</Text>
          <InputArea></InputArea>
        </View>
        {/** choose display image of flashcard */}
        <View>
          <Text style={font_styles.font}>Background</Text>
          <View style={styles.chooseImageGroup}>
            <Button title={"Chọn ảnh"} color={"black"}></Button>
            <Text style={styles.fileName}>spring.jpg</Text>
          </View>
        </View>
        <View>
          <EachWordRow></EachWordRow>
        </View>

        <View>
          <Text style={font_styles.font}>Thêm từ vựng</Text>
          <TouchableOpacity onPress={() => console.log("tapped")}>
            <Image source={require("../img/add-button.png")}></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  pageTitle: {
    position: "absolute",
    top: 50,
    marginLeft: 10,
    fontSize: 25
  },
  saveGroup: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 10,
  },
  chooseImageGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: 10,
  },
  fileName: {
    marginLeft: 5
  }
});
