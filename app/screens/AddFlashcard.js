import React, { useState } from "react";
const fetch = require("node-fetch");
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  StatusBar,
} from "react-native";

import InputArea from "../components/InputArea";
import EachWordRow from "../components/EachWordRow";
import font_styles from "../font/font";
import MyAppText from "../components/MyAppText";
import { flashcardNames } from "../../globalVariable";

export default function AddFlashcard({ navigation }) {
  // danh sach cac tu trong bo tu
  const [newFlashcard, setNewFlashcard] = useState("");
  // ten bo tu
  const [nameFlashcard, setName] = useState("");
  // danh sach cac input co tren man hinh
  const [numberOfWord, setNumberOfWord] = useState([
    { id: 1, english: "", type: "", vietnamese: "" },
    { id: 2, english: "", type: "", vietnamese: "" },
  ]);
  // chi muc lon nhat cua cac input
  const [max, setMax] = useState(3);
  // delete row function
  const deleteButton = (id) => {
    const newNumberWord = numberOfWord.filter((word) => word.id != id);
    setNumberOfWord(newNumberWord);
  };

  // get name of flashcard
  const getNameFlashcard = (value) => {
    console.log(value);
    setName(value);
  }

  //add row function
  const addRow = () => {
    setMax(max + 1);
    console.log(max);
    setNumberOfWord((prevState) => {
      return [...prevState, { id: max, english: "", vietnamese: "", type: "" }];
    });
  };

  //get value from input

  const getValue = (id, value, property) => {
    console.log(value);
    console.log(property);
    let newFlashcard = numberOfWord.map((e) => {
      if (e.id == id) {
        if (property === "english") {
          e.english = value;
        } else if (property === "vietnamese") {
          e.vietnamese = value;
        } else if (property === "type") {
          e.type = value;
        }
      }
      return e;
    });
    console.log(newFlashcard);
    setNumberOfWord(newFlashcard);
  };

  // make string to send to server
  const makeString = () => {
    let flashcard = numberOfWord
      .map((e) => {
        return "[" + [e.english, e.type, e.vietnamese].join(",") + "]";
      })
      .join(",");
    setNewFlashcard(flashcard);
  };

  // send request to api
  const makeNewFlashcard = () => {
    makeString();
    let formData = new FormData();
    formData.append('listword', newFlashcard);
    fetch(`http://watermelish.herokuapp.com/thembotumoi/nhom13/${nameFlashcard}`, {
      method: 'GET',
      body: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded '
      }
    })
    .then(response => response.json())
    .then((json) => {
      console.log(json[0].result);
    })
    .catch((error) => {
      console.error(error);
    });
    console.log(newFlashcard);
    console.log(typeof newFlashcard);
  };

  return (
    <View style={styles.container}>
      {/**title page */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image source={require("../img/green-texture.png")}></Image>
          <MyAppText
            content="Thêm mới bộ từ"
            format="bold"
            size={25}
            style={[styles.pageTitle]}
          >
            Thêm mới bộ từ
          </MyAppText>
          {/**button save */}
        </View>

        <View style={styles.saveGroup}>
          <MyAppText
            content="Lưu lại"
            format="italic"
            size={15}
            style={[styles.saveText]}
          ></MyAppText>
          <TouchableOpacity
            onPress={() => {
              makeNewFlashcard();
              // return Alert.alert("Thông báo", "Bạn đã thêm thành công", [
              //   {
              //     text: "Back to home",
              //     onPress: () => navigation.goBack(),
              //   },
              //   {
              //     text: "Cancel",
              //     onPress: () => console.log("cancel"),
              //   },
              // ]);
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
            <MyAppText
              content="Tên bộ từ"
              format="regular"
              size={15}
              style={[styles.titleText]}
            ></MyAppText>
            <InputArea type="Ten bo tu" getNameFlashcard={getNameFlashcard}></InputArea>
          </View>
          {/** choose display image of flashcard */}
          <View style={{ marginBottom: 10 }}>
            <MyAppText
              content="Background"
              format="regular"
              size={15}
              style={[styles.titleText]}
            >
              Background
            </MyAppText>
            <View style={styles.chooseImageGroup}>
              <Button title={"Chọn ảnh"} color={"black"}></Button>
              <MyAppText
                content="spring.jpg"
                format="regular"
                size={15}
                style={styles.fileName}
              >
                spring.jpg
              </MyAppText>
            </View>
          </View>
          <View>
            {numberOfWord.map((e) => {
              return (
                <EachWordRow
                  key={e.id}
                  deleteRow={deleteButton}
                  row={e}
                  getValue={getValue}
                ></EachWordRow>
              );
            })}
          </View>

          <View>
            <MyAppText
              content="Thêm từ vựng"
              format="regular"
              size={15}
              style={{}}
            ></MyAppText>
            <TouchableOpacity
              onPress={() => {
                addRow();
                console.log("tapped");
              }}
            >
              <Image
                source={require("../img/add-button.png")}
                style={{ width: 45, height: 45 }}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    paddingTop: StatusBar.currentHeight,
  },
  pageTitle: {
    position: "absolute",
    top: 40,
    marginLeft: 20,
    // fontSize: 25,
    color: "#fff",
    // fontWeight: "bold",
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
    // fontStyle: "italic",
  },
});
