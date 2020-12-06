import React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import InputArea from "../components/InputArea";
import font_styles from "../font/font";
import MyAppText from "../components/MyAppText";

// module lấy chỗ khác
import DropDownPicker from "react-native-dropdown-picker";

export default function EachWordRow({ row, deleteRow, getValue }) {
  function handleDeleteButton() {
    deleteRow(row.id);
  }
  return (
    <View style={styles.container}>
      {/**Header of row: consist of name title and delete button */}
      <View style={styles.headerRow}>
        <MyAppText content="Từ vựng" format="regular" size={15} style={{}}>
          Từ vựng
        </MyAppText>
        <TouchableOpacity onPress={handleDeleteButton}>
          <MyAppText content="Xóa" format="italic" size={15} style={{}}>
            Xóa
          </MyAppText>
        </TouchableOpacity>
      </View>

      {/** content of row: consist of two lines, first line is word in English, second is
       * word in Vietnamese
       */}

      <View>
        <InputArea type="Tieng anh" row={row} getValue={getValue}></InputArea>
        <DropDownPicker
          items={[
            { label: "Danh từ", value: "n" },
            { label: "Động từ", value: "v" },
            { label: "Tính từ", value: "adj" },
            { label: "Trạng từ", value: "adv" },
          ]}
          defaultNull
          placeholder="Chọn loại từ cho từ vựng"
          containerStyle={{ height: 40 }}
          onChangeItem={(item) => {
            getValue(row.id, item.value, "type");
            console.log(item.label, item.value);
          }}
        />
        <InputArea type="Tieng viet" row={row} getValue={getValue}></InputArea>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  deleteText: {
    fontStyle: "italic",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
