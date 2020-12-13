import React, { useEffect, useState } from "react";
import ProgressBar from "react-native-progress/Bar";
import AnimatedLoader from "react-native-animated-loader";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";

import ScoreTime from "../components/ScoreAndTime";
import MyAppText from "../components/MyAppText";
import { call } from "react-native-reanimated";
// import BoxMatch from '../components/BoxMatch';

export default function MultipleChoiceScreen({ navigation }) {
  let words = [
    // ["Festival", "lễ hội"],["Love", "Yêu"],["Design", "Thiết kế"],
    ["Hello", "Xin chào"],
    ["Watermelon", "Dưa hấu"],
    ["Goodbye", "Tạm biệt"],
    ["User", "Người dùng"],
    ["Result", "Kết quả"],
    ["English", "Tiếng Anh"],
    ["Circle", "Hình tròn"],
    ["Help", "Giúp đỡ"],
    ["Idol", "Thần tượng"],
  ];

  // React.useEffect(() => {
  //     const all = words.flatMap(([en, vi]) => {
  //         return [
  //             {lang: "en" , value: en},
  //             {lang: "vi" , value: vi}
  //         ];
  //     });
  //     const sorted = all.sort(()=> Math.random() - 0.5);
  //     console.log(all);
  // }, [words]);

  // let question = ["Festival", "Treasure", "Choi Friend", "Hello", "Idol",  "Goodbye"];
  // let answer = ["lễ hội", "kho báu", "Sukie", "Xin chào", "Thần tượng", "Tạm biệt"];

  const [point, setPoint] = useState(0);
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(1);
  const [maxScore, setMaxScore] = useState(0);

  // const [fisrt, setFisrt] = useState(-1);
  // const [second, setSecond] = useState(-1);

  // const [result, setResult] = useState("");

  const [stylebox00, setStylebox00] = useState(styles.nomalbox);
  const [styletext00, setStyletext00] = useState(styles.nomaltext);

  const [stylebox01, setStylebox01] = useState(styles.nomalbox);
  const [styletext01, setStyletext01] = useState(styles.nomaltext);

  const [stylebox10, setStylebox10] = useState(styles.nomalbox);
  const [styletext10, setStyletext10] = useState(styles.nomaltext);

  const [stylebox11, setStylebox11] = useState(styles.nomalbox);
  const [styletext11, setStyletext11] = useState(styles.nomaltext);

  const [stylebox20, setStylebox20] = useState(styles.nomalbox);
  const [styletext20, setStyletext20] = useState(styles.nomaltext);

  const [stylebox21, setStylebox21] = useState(styles.nomalbox);
  const [styletext21, setStyletext21] = useState(styles.nomaltext);

  const [time, setTime] = useState(90);

  const callApiGetMaxScore = (currentScore) => {
    fetch(
      "http://watermelish.herokuapp.com/ketquagame/nhom13/gameghepcap/" +
        currentScore
    )
      .then((response) => response.json())
      .then((json) => {
        setMaxScore(json[0].result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getMaxScore = (currentScore) => {
    callApiGetMaxScore(currentScore);
  };

  useEffect(() => {
    // if(count==3) {
    //     setIndex((prev) => setIndex(prev + 3));
    //     reload();
    // }
    const timer = setInterval(() => {
      if (time > 0) setTime(time - 1);
    }, 1000);
    // clearing interval

    return () => clearInterval(timer);
  });

  function isTimeout() {
    return time == 0;
  }

  function transTime(time) {
    let p = time / 60;
    let s = time % 60;
    if (p < 10) {
      if (s < 10) {
        return "0" + parseInt(p) + ":" + "0" + s;
      }
      return "0" + parseInt(p) + ":" + s;
    }
    return parseInt(p) + ":" + s;
  }

  // function checkTrue(){
  //     return (fisrt == second) && (fisrt !=-1) && (second!=-1);
  // }

  // function checkOnPress(a){

  // }

  function reload() {
    setStylebox00(() => setStylebox00(styles.nomalbox));
    setStyletext00(() => setStyletext00(styles.nomaltext));

    setStylebox01(() => setStylebox01(styles.nomalbox));
    setStyletext01(() => setStyletext01(styles.nomaltext));

    setStylebox10(() => setStylebox10(styles.nomalbox));
    setStyletext10(() => setStyletext10(styles.nomaltext));

    setStylebox11(() => setStylebox11(styles.nomalbox));
    setStyletext11(() => setStyletext11(styles.nomaltext));

    setStylebox20(() => setStylebox20(styles.nomalbox));
    setStyletext20(() => setStyletext20(styles.nomaltext));

    setStylebox21(() => setStylebox21(styles.nomalbox));
    setStyletext21(() => setStyletext21(styles.nomaltext));
  }

  function checkFail() {
    if (stylebox00 == styles.failbox) {
      setStylebox00(() => setStylebox00(styles.nomalbox));
      setStyletext00(() => setStyletext00(styles.nomaltext));
      if (stylebox01 == styles.onPress) {
        setStylebox01(() => setStylebox01(styles.nomalbox));
        setStyletext01(() => setStyletext01(styles.nomaltext));
      } else if (stylebox10 == styles.onPress) {
        setStylebox10(() => setStylebox10(styles.nomalbox));
        setStyletext10(() => setStyletext10(styles.nomaltext));
      } else if (stylebox11 == styles.onPress) {
        setStylebox11(() => setStylebox11(styles.nomalbox));
        setStyletext11(() => setStyletext11(styles.nomaltext));
      } else if (stylebox20 == styles.onPress) {
        setStylebox20(() => setStylebox20(styles.nomalbox));
        setStyletext20(() => setStyletext20(styles.nomaltext));
      } else if (stylebox21 == styles.onPress) {
        setStylebox21(() => setStylebox21(styles.nomalbox));
        setStyletext21(() => setStyletext21(styles.nomaltext));
      }
    }
    if (stylebox01 == styles.failbox) {
      setStylebox01(() => setStylebox01(styles.nomalbox));
      setStyletext01(() => setStyletext01(styles.nomaltext));
      if (stylebox01 == styles.onPress) {
        setStylebox00(() => setStylebox00(styles.nomalbox));
        setStyletext00(() => setStyletext00(styles.nomaltext));
      } else if (stylebox10 == styles.onPress) {
        setStylebox10(() => setStylebox10(styles.nomalbox));
        setStyletext10(() => setStyletext10(styles.nomaltext));
      } else if (stylebox11 == styles.onPress) {
        setStylebox11(() => setStylebox11(styles.nomalbox));
        setStyletext11(() => setStyletext11(styles.nomaltext));
      } else if (stylebox20 == styles.onPress) {
        setStylebox20(() => setStylebox20(styles.nomalbox));
        setStyletext20(() => setStyletext20(styles.nomaltext));
      } else if (stylebox21 == styles.onPress) {
        setStylebox21(() => setStylebox21(styles.nomalbox));
        setStyletext21(() => setStyletext21(styles.nomaltext));
      }
    }
    if (stylebox10 == styles.failbox) {
      setStylebox10(() => setStylebox10(styles.nomalbox));
      setStyletext10(() => setStyletext10(styles.nomaltext));
      if (stylebox01 == styles.onPress) {
        setStylebox01(() => setStylebox01(styles.nomalbox));
        setStyletext01(() => setStyletext01(styles.nomaltext));
      } else if (stylebox00 == styles.onPress) {
        setStylebox00(() => setStylebox00(styles.nomalbox));
        setStyletext00(() => setStyletext00(styles.nomaltext));
      } else if (stylebox11 == styles.onPress) {
        setStylebox11(() => setStylebox11(styles.nomalbox));
        setStyletext11(() => setStyletext11(styles.nomaltext));
      } else if (stylebox20 == styles.onPress) {
        setStylebox20(() => setStylebox20(styles.nomalbox));
        setStyletext20(() => setStyletext20(styles.nomaltext));
      } else if (stylebox21 == styles.onPress) {
        setStylebox21(() => setStylebox21(styles.nomalbox));
        setStyletext21(() => setStyletext21(styles.nomaltext));
      }
    }
    if (stylebox11 == styles.failbox) {
      setStylebox11(() => setStylebox11(styles.nomalbox));
      setStyletext11(() => setStyletext11(styles.nomaltext));
      if (stylebox01 == styles.onPress) {
        setStylebox01(() => setStylebox01(styles.nomalbox));
        setStyletext01(() => setStyletext01(styles.nomaltext));
      } else if (stylebox10 == styles.onPress) {
        setStylebox10(() => setStylebox10(styles.nomalbox));
        setStyletext10(() => setStyletext10(styles.nomaltext));
      } else if (stylebox00 == styles.onPress) {
        setStylebox00(() => setStylebox00(styles.nomalbox));
        setStyletext00(() => setStyletext00(styles.nomaltext));
      } else if (stylebox20 == styles.onPress) {
        setStylebox20(() => setStylebox20(styles.nomalbox));
        setStyletext20(() => setStyletext20(styles.nomaltext));
      } else if (stylebox21 == styles.onPress) {
        setStylebox21(() => setStylebox21(styles.nomalbox));
        setStyletext21(() => setStyletext21(styles.nomaltext));
      }
    }
    if (stylebox20 == styles.failbox) {
      setStylebox20(() => setStylebox20(styles.nomalbox));
      setStyletext20(() => setStyletext20(styles.nomaltext));
      if (stylebox01 == styles.onPress) {
        setStylebox01(() => setStylebox01(styles.nomalbox));
        setStyletext01(() => setStyletext01(styles.nomaltext));
      } else if (stylebox10 == styles.onPress) {
        setStylebox10(() => setStylebox10(styles.nomalbox));
        setStyletext10(() => setStyletext10(styles.nomaltext));
      } else if (stylebox11 == styles.onPress) {
        setStylebox11(() => setStylebox11(styles.nomalbox));
        setStyletext11(() => setStyletext11(styles.nomaltext));
      } else if (stylebox00 == styles.onPress) {
        setStylebox00(() => setStylebox00(styles.nomalbox));
        setStyletext00(() => setStyletext00(styles.nomaltext));
      } else if (stylebox21 == styles.onPress) {
        setStylebox21(() => setStylebox21(styles.nomalbox));
        setStyletext21(() => setStyletext21(styles.nomaltext));
      }
    }
    if (stylebox21 == styles.failbox) {
      setStylebox21(() => setStylebox21(styles.nomalbox));
      setStyletext21(() => setStyletext21(styles.nomaltext));
      if (stylebox01 == styles.onPress) {
        setStylebox01(() => setStylebox01(styles.nomalbox));
        setStyletext01(() => setStyletext01(styles.nomaltext));
      } else if (stylebox10 == styles.onPress) {
        setStylebox10(() => setStylebox10(styles.nomalbox));
        setStyletext10(() => setStyletext10(styles.nomaltext));
      } else if (stylebox11 == styles.onPress) {
        setStylebox11(() => setStylebox11(styles.nomalbox));
        setStyletext11(() => setStyletext11(styles.nomaltext));
      } else if (stylebox20 == styles.onPress) {
        setStylebox20(() => setStylebox20(styles.nomalbox));
        setStyletext20(() => setStyletext20(styles.nomaltext));
      } else if (stylebox00 == styles.onPress) {
        setStylebox00(() => setStylebox00(styles.nomalbox));
        setStyletext00(() => setStyletext00(styles.nomaltext));
      }
    }
  }

  function update() {
    setPoint((prev) => setPoint(prev + 20));
    setCount((prev) => setCount(prev + 1));
    if (count % 3 == 0) {
      reload();
      setIndex((prev) => setIndex(prev + 3));
    }
    getMaxScore(point);
  }

  if (!isTimeout() && count <= words.length) {
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
          <View style={{ marginTop: 10 }}>
            <MyAppText
              content={"Question: " + (index / 3 + 1) + "/" + words.length / 3}
              format="italic"
              size={15}
              style={{
                color: "black",
              }}
            />
          </View>
          <View style={{ marginBottom: 20 }}>
            <ProgressBar
              progress={index / 5}
              width={null}
              height={15}
              borderRadius={8}
              unfilledColor="#E5E5E5"
              color="#84D037"
              borderWidth={0}
            />
          </View>
          <ScoreTime score={point} time={transTime(time)} />

          <View style={styles.box}>
            <TouchableOpacity
              style={{ flexDirection: "column", width: "40%", marginRight: 40 }}
              onPress={() => {
                checkFail();
                if (
                  stylebox01 == styles.onPress ||
                  stylebox10 == styles.onPress ||
                  stylebox11 == styles.onPress ||
                  stylebox20 == styles.onPress
                ) {
                  setStylebox00(() => setStylebox00(styles.failbox));
                  setStyletext00(() => setStyletext00(styles.changtext));
                } else if (stylebox21 == styles.onPress) {
                  setStylebox00(() => setStylebox00(styles.changebox));
                  setStyletext00(() => setStyletext00(styles.changtext));
                  setStylebox21(() => setStylebox21(styles.changebox));
                  setStyletext21(() => setStyletext21(styles.changtext));
                  update();
                } else if (stylebox21 == styles.nomalbox) {
                  setStylebox00(() => setStylebox00(styles.onPress));
                  setStyletext00(() => setStyletext00(styles.changtext));
                } else {
                  setStylebox00(() => setStylebox00(styles.onPress));
                  setStyletext00(() => setStyletext00(styles.changtext));
                }
              }}
            >
              <View style={[styles.question, stylebox00]}>
                <Text style={[styles.text, styletext00]}>
                  {words[index][0]}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: "column", width: "40%", marginRight: 40 }}
              onPress={() => {
                checkFail();
                if (
                  stylebox00 == styles.onPress ||
                  stylebox11 == styles.onPress ||
                  stylebox20 == styles.onPress ||
                  stylebox21 == styles.onPress
                ) {
                  setStylebox01(() => setStylebox01(styles.failbox));
                  setStyletext01(() => setStyletext01(styles.changtext));
                } else if (stylebox10 == styles.onPress) {
                  setStylebox01(() => setStylebox01(styles.changebox));
                  setStyletext01(() => setStyletext01(styles.changtext));
                  setStylebox10(() => setStylebox10(styles.changebox));
                  setStyletext10(() => setStyletext10(styles.changtext));
                  update();
                } else if (stylebox10 == styles.nomalbox) {
                  setStylebox01(() => setStylebox01(styles.onPress));
                  setStyletext01(() => setStyletext01(styles.changtext));
                } else {
                  setStylebox01(() => setStylebox01(styles.onPress));
                  setStyletext01(() => setStyletext01(styles.changtext));
                }
              }}
            >
              <View style={[styles.question, stylebox01]}>
                <Text style={[styles.text, styletext01]}>
                  {words[index + 1][1]}
                </Text>
              </View>
            </TouchableOpacity>
            {/* {renderBox(index+1, 1)} */}
          </View>
          <View style={styles.box}>
            <TouchableOpacity
              style={{ flexDirection: "column", width: "40%", marginRight: 40 }}
              onPress={() => {
                checkFail();
                if (
                  stylebox00 == styles.onPress ||
                  stylebox11 == styles.onPress ||
                  stylebox20 == styles.onPress ||
                  stylebox21 == styles.onPress
                ) {
                  setStylebox10(() => setStylebox10(styles.failbox));
                  setStyletext10(() => setStyletext10(styles.changtext));
                } else if (stylebox01 == styles.onPress) {
                  setStylebox01(() => setStylebox01(styles.changebox));
                  setStyletext01(() => setStyletext01(styles.changtext));
                  setStylebox10(() => setStylebox10(styles.changebox));
                  setStyletext10(() => setStyletext10(styles.changtext));
                  update();
                } else if (stylebox01 == styles.nomalbox) {
                  setStylebox10(() => setStylebox10(styles.onPress));
                  setStyletext10(() => setStyletext10(styles.changtext));
                } else {
                  setStylebox10(() => setStylebox10(styles.onPress));
                  setStyletext10(() => setStyletext10(styles.changtext));
                }
              }}
            >
              <View style={[styles.question, stylebox10]}>
                <Text style={[styles.text, styletext10]}>
                  {words[index + 1][0]}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: "column", width: "40%", marginRight: 40 }}
              onPress={() => {
                checkFail();
                if (
                  stylebox00 == styles.onPress ||
                  stylebox01 == styles.onPress ||
                  stylebox10 == styles.onPress ||
                  stylebox21 == styles.onPress
                ) {
                  setStylebox11(() => setStylebox11(styles.failbox));
                  setStyletext11(() => setStyletext11(styles.changtext));
                } else if (stylebox20 == styles.onPress) {
                  setStylebox11(() => setStylebox11(styles.changebox));
                  setStyletext11(() => setStyletext11(styles.changtext));
                  setStylebox20(() => setStylebox20(styles.changebox));
                  setStyletext20(() => setStyletext20(styles.changtext));
                  update();
                } else if (stylebox20 == styles.nomalbox) {
                  setStylebox11(() => setStylebox11(styles.onPress));
                  setStyletext11(() => setStyletext11(styles.changtext));
                } else {
                  setStylebox11(() => setStylebox11(styles.onPress));
                  setStyletext11(() => setStyletext11(styles.changtext));
                }
              }}
            >
              <View style={[styles.question, stylebox11]}>
                <Text style={[styles.text, styletext11]}>
                  {words[index + 2][0]}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
            <TouchableOpacity
              style={{ flexDirection: "column", width: "40%", marginRight: 40 }}
              onPress={() => {
                checkFail();
                if (
                  stylebox00 == styles.onPress ||
                  stylebox01 == styles.onPress ||
                  stylebox10 == styles.onPress ||
                  stylebox21 == styles.onPress
                ) {
                  setStylebox20(() => setStylebox20(styles.failbox));
                  setStyletext20(() => setStyletext20(styles.changtext));
                } else if (stylebox11 == styles.onPress) {
                  setStylebox11(() => setStylebox11(styles.changebox));
                  setStyletext11(() => setStyletext11(styles.changtext));
                  setStylebox20(() => setStylebox20(styles.changebox));
                  setStyletext20(() => setStyletext20(styles.changtext));
                  update();
                } else if (stylebox11 == styles.nomalbox) {
                  setStylebox20(() => setStylebox20(styles.onPress));
                  setStyletext20(() => setStyletext20(styles.changtext));
                } else {
                  setStylebox20(() => setStylebox20(styles.onPress));
                  setStyletext20(() => setStyletext20(styles.changtext));
                }
              }}
            >
              <View style={[styles.question, stylebox20]}>
                <Text style={[styles.text, styletext20]}>
                  {words[index + 2][1]}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: "column", width: "40%", marginRight: 40 }}
              onPress={() => {
                checkFail();
                if (
                  stylebox01 == styles.onPress ||
                  stylebox10 == styles.onPress ||
                  stylebox11 == styles.onPress ||
                  stylebox20 == styles.onPress
                ) {
                  setStylebox21(() => setStylebox21(styles.failbox));
                  setStyletext21(() => setStyletext21(styles.changtext));
                } else if (stylebox00 == styles.onPress) {
                  setStylebox00(() => setStylebox00(styles.changebox));
                  setStyletext00(() => setStyletext00(styles.changtext));
                  setStylebox21(() => setStylebox21(styles.changebox));
                  setStyletext21(() => setStyletext21(styles.changtext));
                  update();
                } else if (stylebox00 == styles.nomalbox) {
                  setStylebox21(() => setStylebox21(styles.onPress));
                  setStyletext21(() => setStyletext21(styles.changtext));
                } else {
                  setStylebox21(() => setStylebox21(styles.onPress));
                  setStyletext21(() => setStyletext21(styles.changtext));
                }
              }}
            >
              <View style={[styles.question, stylebox21]}>
                <Text style={[styles.text, styletext21]}>
                  {words[index][1]}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* <View style={styles.box}>
                        <TouchableOpacity style={{flexDirection: "column", width: '40%', marginRight: 40}}>
                            <BoxMatch value={words[index +1][0]} changebox={stylebox10} changtext={styletext10}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection: "column", width: '40%'}}>
                            <BoxMatch value={words[index + 2][0]} changebox={stylebox11} changtext={styletext11}/>
                        </TouchableOpacity>
                        
                    </View>
                    <View style={styles.box}>
                        <TouchableOpacity style={{flexDirection: "column", width: '40%', marginRight: 40}}>
                            <BoxMatch value={words[index +2 ][1]} changebox={stylebox20} changtext={styletext20}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection: "column", width: '40%'}}>
                            <BoxMatch value={words[index][1]} changebox={stylebox21} changtext={styletext21}/>
                        </TouchableOpacity>
                        
                    </View> */}
        </ScrollView>
      </SafeAreaView>
    );
  } else {
    // getMaxScore(point);
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Image
            source={require("../img/watermelon-signup.png")}
            style={styles.img}
          />
        </View>
        <View>
          <MyAppText
            content="Kết quả"
            format="bold"
            size={25}
            style={{ color: "#609F20" }}
          ></MyAppText>
        </View>
        <View>
          <MyAppText
            content={`Số điểm bạn đã đạt được: ${point}`}
            format="regular"
            size={15}
            style={{ textAlign: "center" }}
          ></MyAppText>
        </View>
        <View>
          <MyAppText
            content={"Số điểm cao nhất: " + maxScore}
            format="regular"
            size={15}
            style={{ textAlign: "center" }}
          ></MyAppText>
        </View>
        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => navigation.navigate("Game")}
        >
          <View style={styles.signupBtn}>
            <MyAppText
              content="Trở về"
              format="bold"
              size={15}
              style={{
                color: "#fff",
                paddingTop: 10,
                paddingBottom: 10,
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => {
            reload();
            setTime(() => setTime(90));
            setCount(() => setCount(1));
            setIndex(() => setIndex(0));
            setPoint(() => setPoint(0));
          }}
        >
          <MyAppText
            content="Chơi lại"
            format="italic"
            size={15}
            style={{
              color: "#609F20",
              // paddingTop: 10,
              // paddingBottom: 10,
            }}
          />
        </TouchableOpacity>
      </SafeAreaView>
      // return (
      //   <SafeAreaView
      //     style={(StyleSheet.container, { flex: 1, backgroundColor: "#fff" })}
      //   >
      //     <ScrollView style={styles.scrollView}>
      //       {/* <ScoreTime score={point} time={transTime(time)}/> */}
      //       <View
      //         style={{
      //           flexDirection: "row",
      //           borderWidth: 1,
      //           borderColor: "#8E8888",
      //           borderRadius: 10,
      //           marginTop: 100,
      //           marginBottom: 100,
      //           height: 150,
      //           justifyContent: "center",
      //           backgroundColor: "#fff",
      //         }}
      //       >
      //         <View>
      //           <Text style={styles.result}>Game Over !!!</Text>
      //           <Text style={styles.result}>High Score: {point}</Text>
      //         </View>
      //       </View>
      //       <View style={{ flexDirection: "row", marginLeft: 10 }}>
      //         <View style={{ flex: 1, marginRight: 55, borderRadius: 10 }}>
      //           <TouchableOpacity
      //             style={[styles.button, styles.back]}
      //             onPress={() => navigation.navigate("Game")}
      //           >
      //             <Text style={styles.goback}>{"BACK"}</Text>
      //           </TouchableOpacity>
      //         </View>
      //         <View style={{ flex: 1, marginLeft: 55, borderRadius: 10 }}>
      //           <TouchableOpacity
      //             style={styles.button}
      //             onPress={() => {
      //               reload();
      //               setTime(() => setTime(90));
      //               setCount(() => setCount(1));
      //               setIndex(() => setIndex(0));
      //               // setPoint(() =>setPoint(0));
      //             }}
      //           >
      //             <Text style={styles.goback}>{"RESET"}</Text>
      //           </TouchableOpacity>
      //         </View>
      //       </View>
      //     </ScrollView>
      //   </SafeAreaView>
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
  box: {
    flexDirection: "row",
    marginTop: 10,
  },
  scrollView: {
    padding: 20,
  },
  question: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#8E8888",
    borderRadius: 10,
    width: "100%",
    height: 120,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    // backgroundColor: "#987",
    // marginRight: 30,
  },
  text: {
    textAlign: "center",
    marginTop: 30,
    fontSize: 20,

    fontWeight: "bold",
    color: "#2D2727",
  },
  nomalbox: {
    borderWidth: 2,
    backgroundColor: "#fff1",
  },
  onPress: {
    borderWidth: 2,
    borderColor: "#111",
    backgroundColor: "#84D037",
  },
  failbox: {
    borderWidth: 2,
    borderColor: "#111",
    backgroundColor: "red",
  },
  changebox: {
    borderWidth: 0,
    borderColor: "#fff",
    backgroundColor: "#fff",
  },
  nomaltext: {
    color: "#2D2727",
  },
  changtext: {
    color: "#fff",
  },
  result: {
    marginTop: 30,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "red",
  },
  button: {
    marginTop: 20,
    height: 34,
    borderRadius: 4,
    // flexDirection: 'row',
    justifyContent: "center",
    width: 90,
    backgroundColor: "#2D2727",
  },
  goback: {
    color: "#fff",
    textAlign: "center",
  },

  img: {
    marginTop: 20,
    marginBottom: 30,
    height: 160,
    resizeMode: "contain",
  },

  signupBtn: {
    width: 186,
    alignItems: "center",
    backgroundColor: "#609F20",
    borderRadius: 50,
    marginBottom: 20,
    marginTop: 20,
  },
});
