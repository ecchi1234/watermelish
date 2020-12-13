import React, { useState, useEffect } from "react";
// const fetch = require("node-fetch");

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Button,
  Modal,
  Alert,
  TouchableHighlight,
  RefreshControl,
} from "react-native";

import { AuthContext } from "../components/Context";

import MyAppText from "../components/MyAppText";
import DonutChart from "../components/DonutChart";
import RadioButton from "../components/RadioButton";

export default function Profile({ navigation }) {

  const { signOut } = React.useContext(AuthContext);

  // pull to refresh function
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getInformation().then(() => {
      setRefreshing(false);
    });

    // wait(2000).then(() => setRefreshing(false));
  }, []);
  const { Logout } = React.useContext(AuthContext);

  const target_array = ["10 từ", "15 từ", "20 từ", "25 từ"];
  const [modalVisible, setModalVisible] = useState(false);
  const [selectTarget, setTargetSelected] = useState(0);

  const [isLoading, setLoading] = useState(true);
  const [information, setInformation] = useState([]);
  const [target, setTarget] = useState(0);

  const getInformation = () => {
    return new Promise((resolve, reject) => {
      fetch("http://watermelish.herokuapp.com/thongke/nhom13")
        .then((response) => response.json())
        .then((json) => {
          setInformation(json[0].result);
          setTarget(json[0].result[4]);
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  useEffect(() => {
    fetch("http://watermelish.herokuapp.com/thongke/nhom13")
      .then((response) => response.json())
      .then((json) => {
        setInformation(json[0].result);
        setTarget(json[0].result[4]);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setLoading(false));
  }, []);

  // const [isCheck, setIsCheck] = useState(false);

  const handleRadioInput = (index) => {
    if (selectTarget !== index) {
      setTargetSelected(index);
    }
  };

  // thay doi muc tieu hoc trong ngay
  const changeTarget = () => {
    const newTarget = target_array
      .map((e) => {
        return e.split(" ")[0];
      })
      .find((e, index) => index == selectTarget);
    fetch("http://watermelish.herokuapp.com/datmuctieu/nhom13/" + newTarget)
      .then((response) => response.json())
      .then((json) => {
        console.log(json[0].result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <SafeAreaView
        style={[
          styles.container,
          { backgroundColor: modalVisible ? "#ccc" : "#fff" },
        ]}
      >
        <ScrollView
          style={styles.scroll}
          showsVerticalScrollIndicator={true}
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
                <MyAppText
                  content="Mục tiêu hàng ngày"
                  format="regular"
                  style={styles.modalText}
                ></MyAppText>
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  {target_array.map(function (target, index) {
                    return (
                      <View
                        key={index}
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginBottom: 20,
                        }}
                      >
                        <View style={{ marginRight: 50 }}>
                          <TouchableOpacity
                            onPress={() => handleRadioInput(index)}
                          >
                            <RadioButton
                              selected={selectTarget === index ? true : false}
                            ></RadioButton>
                          </TouchableOpacity>
                        </View>
                        <View>
                          <MyAppText
                            content={target}
                            format="regular"
                            size={15}
                          ></MyAppText>
                        </View>
                      </View>
                    );
                  })}
                </View>
                <View
                  style={{
                    borderTopColor: "#E5E5E5",
                    borderTopWidth: 2,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingTop: 10,
                  }}
                >
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <MyAppText
                        content="Hủy"
                        format="regular"
                        size={15}
                        style={{ color: "#9B9797" }}
                      ></MyAppText>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        changeTarget();
                        setModalVisible(!modalVisible);
                        getInformation().then(() => {
                          console.log("changed!");
                        });
                      }}
                    >
                      <MyAppText
                        content="OK"
                        format="regular"
                        size={15}
                        style={{ color: "#84D037" }}
                      ></MyAppText>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
          <View
            style={{
              // flexDirection: "row",
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
                style={{ color: "#609F20" }}
              ></MyAppText>
            </View>

            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                // margin: 20,
                marginVertical: 20,
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <View
                style={{
                  backgroundColor: "#fff",
                  // flex: 1,
                  borderRadius: 10,
                  width: "45%",
                  height: 130,
                  marginRight: 10,
                  elevation: 7,
                  padding: 15,
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Image source={require("../img/count-word.png")}></Image>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <MyAppText
                    content={information[2]}
                    format="regular"
                    size={16}
                  ></MyAppText>
                  <MyAppText
                    content=" từ"
                    format="regular"
                    size={12}
                    style={{ color: "#C1B8B8" }}
                  ></MyAppText>
                </View>

                <View>
                  <MyAppText
                    content="Số từ"
                    format="bold"
                    size={15}
                    style={{ color: "#84D037" }}
                  ></MyAppText>
                </View>
              </View>

              <View
                style={{
                  backgroundColor: "#fff",
                  // flex: 1,
                  borderRadius: 10,
                  width: "45%",
                  height: 130,
                  elevation: 7,
                  padding: 15,
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Image source={require("../img/count-point.png")}></Image>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <MyAppText
                    content={information[1]}
                    format="regular"
                    size={16}
                  ></MyAppText>
                  <MyAppText
                    content=" điểm"
                    format="regular"
                    size={12}
                    style={{ color: "#C1B8B8" }}
                  ></MyAppText>
                </View>

                <View>
                  <MyAppText
                    content="Số điểm"
                    format="bold"
                    size={15}
                    style={{ color: "#84D037" }}
                  ></MyAppText>
                </View>
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
                  style={{ color: "#609F20" }}
                ></MyAppText>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(true);
                    // navigation.navigate("SetTarget");
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
            <View>
              <MyAppText
                content={`Mục tiêu của bạn là: ${target} từ`}
                format="regular"
                size={13}
                style={{ color: "#A09E9E" }}
              ></MyAppText>
            </View>
            <View
              style={{ alignItems: "center", marginTop: 5, marginBottom: 5 }}
            >
              <DonutChart
                max={20}
                radius={80}
                percentage={isLoading ? 0 : information[3]}
                style={styles.donutChart}
              />
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
                signOut();
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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    // alignItems: "center",
    paddingTop: StatusBar.currentHeight,
  },
  scroll: {
    paddingHorizontal: 20,
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
    padding: 20,
    // alignItems: "center",
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
