import React from "react";

import { View, Text, StyleSheet } from "react-native";

import InputArea from "../components/InputArea";
import font_styles from "../font/font";

export default function EachWordRow() {
  return (
    <View style={styles.container}>
      {/**Header of row: consist of name title and delete button */}
      <View style={styles.headerRow}>
        <Text style={font_styles.font}>Từ vựng</Text>
        <Text style={[styles.deleteText, font_styles.font]}>Xóa</Text>
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

