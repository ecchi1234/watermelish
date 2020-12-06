import React, { useState, useEffect } from "react";
import ProgressBar from "react-native-progress/Bar";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Alert,
  Card,
} from "react-native";

import ScoreTime from "../components/ScoreAndTime";
import MyAppText from "../components/MyAppText";
import { color } from "react-native-reanimated";
// import QuestionChoice from '../components/QuestionChoice';

export default function FillWordScreen({ navigation }) {
  let words = [
    "festival",
    "love",
    "use",
    "english",
    "treasure",
    "bigbang",
    "design",
    "sunday",
  ];
  const [point, setPoint] = useState(0);
  const [index, setIndex] = useState(0);
  const [result, setResult] = useState("");
  const [value, onChangeText] = useState("");
  const [time, setTime] = useState(90);

  useEffect(() => {
    const timer = setInterval(() => {
      if (time > 0) setTime(time - 1);
    }, 1000);
    // clearing interval
    return () => clearInterval(timer);
  });

  function isTrue(v) {
    let i = words[index].length / 2;
    let a = words[index][parseInt(i)];
    let A = words[index][parseInt(i)].toUpperCase();
    return v === a || v === A;
  }

  function isIndex(a) {
    return a == words.length - 1;
  }

  function isTimeout() {
    return time == 0;
  }

  function transTime(time) {
    let p = time / 60;
    let s = time % 60;
    return parseInt(p) + ":" + s;
  }

  // if(isTimeout()){
  //     Alert.alert("Đã hết thời gian, vui lòng chuyển sang câu hỏi khác");
  //     // navigation.navigate("Game");
  // }

  const checkTime = isTimeout();

  if (index <= words.length - 1 && !checkTime) {
    const test = isTrue(value);
    const check = isIndex(index);

    return (
      <SafeAreaView
        style={(StyleSheet.container, { flex: 1, backgroundColor: "#fff" })}
      >
        <ScrollView style={styles.scrollView}>
          <View style={{ marginBottom: 5 }}>
            <MyAppText
              content="Trắc nghiệm"
              format="bold"
              style={{ color: "#84D037" }}
            />
          </View>
          <View style={{ marginTop: 5, marginBottom: 10 }}>
            <MyAppText
              content={"Question: " + (index + 1) + "/" + words.length}
              format="italic"
              size={15}
              style={{
                color: "black",
              }}
            />
          </View>

          <View style={{ marginBottom: 20 }}>
            <ProgressBar
              progress={index / 8}
              width={null}
              height={15}
              borderRadius={8}
              unfilledColor="#E5E5E5"
              color="#84D037"
              borderWidth={0}
            />
          </View>

          <ScoreTime score={point} time={transTime(time)} />
          <View style={styles.question}>
            <MyAppText
              content={words[index].slice(0, parseInt(words[index].length / 2))}
              format="bold"
              size={30}
              style={{}}
            />
            <TextInput
              underlineColorAndroid="transparent"
              style={{
                fontSize: 30,
                fontWeight: "bold",
                borderBottomWidth: 2,
                borderBottomColor: "black",
                color: "#E84118",
              }}
              onChangeText={(text) => onChangeText(text)}
              value={value}
            ></TextInput>
            <MyAppText
              content={words[index].slice(
                parseInt(words[index].length / 2) + 1
              )}
              format="bold"
              size={30}
              style={{}}
            />
            {/* <Text style={styles.value}>{words[index].slice(0,3)}</Text>    
                        <TextInput 
                            style={styles.input}
                            onChangeText={(text) => onChangeText(text)}
                            value={value}>
                        </TextInput>
                        <Text style={styles.value}>{words[index].slice(4)}</Text>    */}
          </View>

          <View style={styles.box}>
            <View style={{ flex: 1, marginRight: 55, borderRadius: 10 }}>
              <TouchableOpacity
                style={[styles.button, styles.skip]}
                onPress={() => {
                  setIndex((prev) => {
                    // if (!check)
                    return prev + 1;
                    // else return prev;
                  });
                  // setTime(() => setTime(20));
                  // if (check) navigation.navigate("Game");
                  onChangeText("");
                  setResult(() => {
                    "";
                  });
                }}
              >
                <Text style={styles.text}>{"Skip"}</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flex: 1, marginLeft: 55, borderRadius: 10 }}>
              <TouchableOpacity
                style={[styles.button, styles.submit]}
                onPress={() => {
                  setPoint((prev) => {
                    if (test && !checkTime) return prev + 10;
                    else return prev;
                  });
                  setIndex((prev) => {
                    if (test) {
                      onChangeText("");
                      return prev + 1;
                    } else {
                      onChangeText("");
                      return prev;
                    }
                  });
                  setResult(() => {
                    if (value == "") return "Vui lòng nhập câu trả lời";
                    else if (!test && !checkTime) return "Bạn đã trả lời sai";
                  });
                  // if (check) navigation.navigate("Game");
                }}
              >
                <Text style={styles.text}>{"Submit"}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={[styles.result, styles.review]}>{result}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView
        style={(StyleSheet.container, { flex: 1, backgroundColor: "#fff" })}
      >
        <ScrollView style={styles.scrollView}>
          {/* <ScoreTime score={point} time={transTime(time)}/> */}
          <View
            style={{
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "#8E8888",
              borderRadius: 10,
              marginTop: 100,
              marginBottom: 100,
              height: 150,
              justifyContent: "center",
              backgroundColor: "#fff",
            }}
          >
            <View>
              <Text style={[styles.result, styles.gameover]}>
                Game Over !!!
              </Text>
              <Text style={[styles.result, styles.gameover]}>
                High Score: {point}
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 10 }}>
            <View style={{ flex: 1, marginRight: 55, borderRadius: 10 }}>
              <TouchableOpacity
                style={[styles.button, styles.submit]}
                onPress={() => navigation.navigate("Game")}
              >
                <Text style={styles.text}>{"BACK"}</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, marginLeft: 55, borderRadius: 10 }}>
              <TouchableOpacity
                style={[styles.button, styles.submit]}
                onPress={() => {
                  setTime(() => setTime(90));
                  setIndex(() => setIndex(0));
                  setPoint(() => setPoint(0));
                }}
              >
                <Text style={styles.text}>{"RESET"}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    padding: 20,
  },
  question: {
    flexDirection: "row",
    marginTop: 40,
    marginBottom: 20,
    width: "100%",
    height: 157,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  // input:{
  //     fontSize: 30,
  //     fontWeight: "bold",
  //     // borderBottomWidth: 2,
  //     // borderBottomColor: "black",
  //     color: "#E84118",
  // },

  // value: {
  //     textAlign: 'center',
  //     marginTop: 50,
  //     fontSize: 30,
  //     // fontWeight: 'bold',
  //     color: '#2D2727',
  // },
  box: {
    marginLeft: 10,
    flex: 4,
    flexDirection: "row",
  },
  button: {
    marginTop: 20,
    height: 34,
    borderRadius: 4,
    // flexDirection: 'row',
    justifyContent: "center",
    width: 90,
  },
  text: {
    color: "#fff",
    textAlign: "center",
  },
  submit: {
    backgroundColor: "#2D2727",
  },
  skip: {
    backgroundColor: "red",
  },
  result: {
    color: "#000",
    marginTop: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  review: {
    fontSize: 20,
    color: "#ddd",
  },
  gameover: {
    fontSize: 25,
    color: "red",
  },
});
