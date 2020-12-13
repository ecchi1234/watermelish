import React, { useState, useEffect } from "react";
import AnimatedLoader from "react-native-animated-loader";
import Svg, { Rect, Circle } from "react-native-svg";
import ContentLoader from "react-native-masked-loader";
import { MaterialIcons } from "@expo/vector-icons";

const fetch = require("node-fetch");
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Platform,
  StatusBar,
  ActivityIndicator,
  Alert,
  Modal,
  RefreshControl,
} from "react-native";

import FlashcardRow from "../components/FlashcardRow";
import MyAppText from "../components/MyAppText";
import { toCapitalCase } from "../services/convertString";
import { setFlashcardNames } from "../../globalVariable";
// pull to refresh function
const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

function getMaskedElement() {
  return (
    <Svg height={250} width="100%" fill={"black"}>
      <Rect x="0" y="0" rx="8" ry="8" width="50%" height="16" />
      <Rect x="0" y="30" rx="9" ry="9" width="100%" height="128" />
      <Rect x="0" y="172" rx="4" ry="4" width="100%" height="8" />
      <Rect x="0" y="188" rx="4" ry="4" width="100%" height="8" />
      <Rect x="0" y="204" rx="4" ry="4" width="100%" height="8" />
    </Svg>
  );
}

function getMaskedElement_2() {
  return (
    <>
      <View style={styles.cardLoaderContainer}>
        <View style={styles.cardCircleWrapper}>
          <Svg height={105} width="100%" fill={"black"}>
            <Circle cx="52" cy="52" r="52" />
          </Svg>
        </View>
        <View style={styles.cardContextWrapper}>
          <Svg height={105} width="100%" fill={"black"}>
            <Rect x="0" y="0" rx="7" ry="7" width="100%" height="12" />
            <Rect x="0" y="29" rx="7" ry="7" width="100%" height="12" />
            <Rect x="0" y="53" rx="7" ry="7" width="100%" height="12" />
            <Rect x="0" y="77" rx="7" ry="7" width="50%" height="12" />
          </Svg>
        </View>
      </View>

      <View style={styles.cardLoaderContainer}>
        <View style={styles.cardCircleWrapper}>
          <Svg height={105} width="100%" fill={"black"}>
            <Circle cx="52" cy="52" r="52" />
          </Svg>
        </View>
        <View style={styles.cardContextWrapper}>
          <Svg height={105} width="100%" fill={"black"}>
            <Rect x="0" y="0" rx="7" ry="7" width="100%" height="12" />
            <Rect x="0" y="29" rx="7" ry="7" width="100%" height="12" />
            <Rect x="0" y="53" rx="7" ry="7" width="100%" height="12" />
            <Rect x="0" y="77" rx="7" ry="7" width="50%" height="12" />
          </Svg>
        </View>
      </View>

      <View style={styles.cardLoaderContainer}>
        <View style={styles.cardCircleWrapper}>
          <Svg height={105} width="100%" fill={"black"}>
            <Circle cx="52" cy="52" r="52" />
          </Svg>
        </View>
        <View style={styles.cardContextWrapper}>
          <Svg height={105} width="100%" fill={"black"}>
            <Rect x="0" y="0" rx="7" ry="7" width="100%" height="12" />
            <Rect x="0" y="29" rx="7" ry="7" width="100%" height="12" />
            <Rect x="0" y="53" rx="7" ry="7" width="100%" height="12" />
            <Rect x="0" y="77" rx="7" ry="7" width="50%" height="12" />
          </Svg>
        </View>
      </View>

      <View style={styles.cardLoaderContainer}>
        <View style={styles.cardCircleWrapper}>
          <Svg height={105} width="100%" fill={"black"}>
            <Circle cx="52" cy="52" r="52" />
          </Svg>
        </View>
        <View style={styles.cardContextWrapper}>
          <Svg height={105} width="100%" fill={"black"}>
            <Rect x="0" y="0" rx="7" ry="7" width="100%" height="12" />
            <Rect x="0" y="29" rx="7" ry="7" width="100%" height="12" />
            <Rect x="0" y="53" rx="7" ry="7" width="100%" height="12" />
            <Rect x="0" y="77" rx="7" ry="7" width="50%" height="12" />
          </Svg>
        </View>
      </View>
    </>
  );
}

export default function Flashcards({ route, navigation }) {
  // pull to refresh function
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getListFlashcard().then((newFlashcardArray) => {
      setFlashcardArray(newFlashcardArray);
      setRefreshing(false);
    });

    // wait(2000).then(() => setRefreshing(false));
  }, []);

  const MaskedElement = getMaskedElement_2();

  const [isLoading, setLoading] = useState(true);
  const [isDelete, setIsDelete] = useState(false);
  const [flashcardArray, setFlashcardArray] = useState([]);
  const [isLoadingWhenDelete, setLoadingWhenDelete] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const getListFlashcard = () => {
    return new Promise((resolve, reject) => {
      fetch("http://watermelish.herokuapp.com/danhsachcacbotu/nhom13")
        .then((response) => response.json())
        .then((json) => {
          resolve(json[0].result);
          // setFlashcardArray(json[0].result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  useEffect(() => {
    fetch("http://watermelish.herokuapp.com/danhsachcacbotu/nhom13")
      .then((response) => response.json())
      .then((json) => {
        setFlashcardArray(json[0].result);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setLoading(false));
  }, []);

  const deleteFlashcard = (nameFlashcard) => {
    fetch(`http://watermelish.herokuapp.com/xoabotu/nhom13/${nameFlashcard}`)
      .then((response) => response.json())
      .then((json) => {
        setLoadingWhenDelete(false);
        setModalVisible(true);
        getListFlashcard().then((value) => {
          setFlashcardArray(value);
        });
        console.log(json[0].result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return isLoading ? (
    <View style={styles.container}>
      <ContentLoader MaskedElement={MaskedElement} />
    </View>
  ) : isLoadingWhenDelete ? (
    <AnimatedLoader
      visible={isLoadingWhenDelete}
      overlayColor="rgba(255,255,255,0.75)"
      source={require("../img/loading-effect/pre-load.json")}
      animationStyle={{ width: 100, height: 100 }}
      speed={1}
    />
  ) : (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Bạn đã xóa thành công!</Text>

              <TouchableOpacity
                style={{ ...styles.openButton, backgroundColor: "#84D037" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Quay về</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View style={{ marginBottom: 20 }}>
          <MyAppText
            content="Thêm mới bộ từ"
            format="bold"
            style={{ color: "#84D037" }}
          >
            Thêm mới bộ từ
          </MyAppText>
          <View style={{ marginTop: 10 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("AddFlashcard")}
            >
              <Image
                source={require("../img/add-button.png")}
                style={styles.addButton}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <MyAppText
            content="Các bộ từ"
            format="bold"
            style={{ color: "#84D037" }}
          >
            Các bộ từ
          </MyAppText>
          <View>
            {isLoading ? (
              <AnimatedLoader
                visible={true}
                overlayColor="rgba(255,255,255,0.75)"
                source={require("../img/loading-effect/pre-load.json")}
                animationStyle={{ width: 100, height: 100 }}
                speed={1}
              />
            ) : (
              flashcardArray.map((card, index) => {
                return (
                  <View key={index}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <View>
                        <MyAppText
                          content={toCapitalCase(card)}
                          format="bold"
                          size={15}
                          style={{}}
                        ></MyAppText>
                      </View>
                      <View>
                        <TouchableOpacity
                          onPress={() => {
                            return Alert.alert(
                              "Xác nhận xóa",
                              `Bạn đang chuẩn bị xóa bộ từ ${toCapitalCase(
                                card
                              )}. Bạn có chắc chắn?`,
                              [
                                {
                                  text: "Hủy",
                                  onPress: () => {
                                    console.log("Thoát");
                                  },
                                  style: "cancel",
                                },
                                {
                                  text: "OK",
                                  onPress: () => {
                                    setLoadingWhenDelete(true);
                                    deleteFlashcard(card);
                                  },
                                  style: "default",
                                },
                              ],
                              { cancelable: false }
                            );
                          }}
                        >
                          <MaterialIcons
                            name="delete"
                            size={24}
                            color="#609F20"
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        setFlashcardNames(card);
                        navigation.navigate("FlashcardHome");
                      }}
                    >
                      <FlashcardRow name={toCapitalCase(card)}></FlashcardRow>
                    </TouchableOpacity>
                  </View>
                );
              })
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight,
  },

  addButton: {
    width: 50,
    height: 50,
  },

  scrollView: {
    // padding: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    width: "100%",
    paddingHorizontal: 20,
  },

  container_1: {
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingVertical: 30,
    height: 285,
  },
  container_2: {
    backgroundColor: "#fff",
    height: 145,
  },
  cardLoaderContainer: {
    width: "100%",
    flexDirection: "row",
    paddingBottom: 20,
  },
  cardCircleWrapper: {
    paddingTop: 20,
    paddingLeft: 33,
    width: 147,
  },
  cardContextWrapper: {
    flex: 1,
    padding: 20,
    paddingLeft: 22,
    paddingBottom: 0,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
