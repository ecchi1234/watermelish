import React, { useState, useEffect } from "react";
const fetch = require("node-fetch");
import AnimatedLoader from "react-native-animated-loader";
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
  TextInput,
} from "react-native";

import InputArea from "../components/InputArea";
import EachWordRow from "../components/EachWordRow";
import font_styles from "../font/font";
import MyAppText from "../components/MyAppText";

import { flashcardNames } from "../../globalVariable";
import { toCapitalCase } from "../services/convertString";

export default function EditFlashcard({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [value, onChangeText] = React.useState(flashcardNames.name);
  const [modalVisible, setModalVisible] = useState(false);

  const [flashcardArray, setFlashcardArray] = useState([]);
  // chi muc lon nhat cua cac input
  const [max, setMax] = useState(1);
  useEffect(() => {
    fetch(
      "http://watermelish.herokuapp.com/danhsachbotu/nhom13/" +
        flashcardNames.name
    )
      .then((response) => response.json())
      .then((json) => {
        setFlashcardArray(
          json[0].result.map((element, index) => {
            return {
              id: index + 1,
              english: element[0],
              type: element[1],
              vietnamese: element[2],
            };
          })
        );
        setMax(json[0].result.length);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setLoading(false));
  }, []);

  // delete row function
  const deleteButton = (id) => {
    const newFlashcardArray = flashcardArray.filter((word) => word.id != id);
    setFlashcardArray(newFlashcardArray);
  };

  //add row function
  const addRow = () => {
    console.log("max 1 " + max);
    setMax(max + 1);
    console.log(max);
    setFlashcardArray((prevState) => {
      return [
        ...prevState,
        { id: max + 1, english: "", vietnamese: "", type: "" },
      ];
    });
  };

  //get value from input

  const getValue = (id, value, property) => {
    let newFlashcard = flashcardArray.map((e) => {
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
    setFlashcardArray(() => newFlashcard);
    console.log(flashcardArray);
  };

  // make string to send to server
  const makeString = () => {
    let flashcard = flashcardArray
      .map((e) => {
        return (
          "[" +
          [e.english, e.type, e.vietnamese]
            .map((element) => {
              return "'" + element + "'";
            })
            .join(",") +
          "]"
        );
      })
      .join(",");
    return flashcard;
  };

  // send request to api
  const editFlashcard = (newFlashcardName) => {
    let formData = new FormData();
    formData.append("listword", makeString());
    console.log(formData);
    console.log(value);
    fetch(
      `http://watermelish.herokuapp.com/chinhsuabotu/nhom13/${flashcardNames.name}/${newFlashcardName}`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json[0].result);
      })
      .then(() => {
        setModalVisible(() => false);
        navigation.navigate("AfterEditFlashcard");
        console.log("check");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return isLoading ? (
    <AnimatedLoader
      visible={true}
      overlayColor="rgba(255,255,255,0.75)"
      source={require("../img/loading-effect/pre-load.json")}
      animationStyle={{ width: 100, height: 100 }}
      speed={1}
    />
  ) : (
    <SafeAreaView style={styles.container}>
      {/**title page */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <AnimatedLoader
          visible={modalVisible}
          overlayColor="rgba(255,255,255,0.75)"
          source={require("../img/loading-effect/pre-load.json")}
          animationStyle={{ width: 100, height: 100 }}
          speed={1}
        />
        <View>
          <Image source={require("../img/green-texture.png")}></Image>
          <MyAppText
            content="Chỉnh sửa bộ từ"
            format="bold"
            size={25}
            style={[styles.pageTitle]}
          >
            Chỉnh sửa bộ tư
          </MyAppText>
          {/**button save */}
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {
              return Alert.alert(
                "Xác nhận chỉnh sửa",
                `Bạn đang thực hiện chỉnh sửa bộ từ ${flashcardNames.name}? Bạn có chắc chắn?`,
                [
                  {
                    text: "Quay lại",
                    onPress: () => console.log("cancel"),
                    style: {
                      color: "#000",
                    },
                  },
                  {
                    text: "Xác nhận",
                    onPress: () => {
                      setModalVisible(true);
                      editFlashcard(value);
                    },
                    style: {
                      color: "#609F20",
                    },
                  },
                ]
              );
            }}
            style={styles.saveGroup}
          >
            <MyAppText content="Lưu lại" format="italic" size={15} style={{}}>
              Lưu lại
            </MyAppText>
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
            <TextInput
              style={styles.inputField}
              onChangeText={(text) => {
                onChangeText(text);
              }}
              value={value}
              placeholder="Ten bo tu"
              onSubmitEditing={() => {
                handleInputValue();
              }}
            />
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
            {flashcardArray.map((w) => {
              return (
                <EachWordRow
                  key={w.id}
                  english={w.english}
                  type={w.type}
                  vietnamese={w.vietnamese}
                  deleteRow={deleteButton}
                  row={w}
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
  inputField: {
    height: 40,
    backgroundColor: "#f1f1f1",
    borderRadius: 5,
    marginVertical: 10,
    padding: 5,
    fontSize: 15,
  },
});
