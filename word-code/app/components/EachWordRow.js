import React from "react";

import { View, Text, StyleSheet } from "react-native";

import InputArea from "../components/InputArea";
import font_styles from "../font/font";
import MyAppText from "../components/MyAppText";

export default function EachWordRow() {
  return (
    <View style={styles.container}>
      {/**Header of row: consist of name title and delete button */}
      <View style={styles.headerRow}>
        <MyAppText content="Từ vựng" format="regular" size={15} style={{}}>Từ vựng</MyAppText>
        <MyAppText content="Xóa" format="italic" size={15} style={{}}>Xóa</MyAppText>
      </View>

      {/** content of row: consist of two lines, first line is word in English, second is
       * word in Vietnamese
       */}

      <View>
        <InputArea>{/* <MyAppText>festival(n)</MyAppText> */}</InputArea>
        <InputArea>{/* <MyAppText>Mùa xuân</MyAppText> */}</InputArea>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  deleteText: {
    fontStyle: "italic",
  },
  headerRow: {
      flexDirection: "row",
      justifyContent: "space-between"
      
},
}
)

