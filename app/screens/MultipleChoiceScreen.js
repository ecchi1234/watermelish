import React, { useState, useEffect } from "react";
import ProgressBar from "react-native-progress/Bar";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";

import ScoreTime from "../components/ScoreAndTime";
import MyAppText from "../components/MyAppText";

// import AnswerChoice from '../components/AnswerChoice';

export default function MultipleChoiceScreen({ navigation }) {
  let words = ["festival", "today", "sunday", "english", "treasure"];
  let answer = [
    ["Lễ Hội", "Chúc Mừng Năm Mới", "Hoa Đào", "A"],
    ["Ngày Mai", "Hôm Qua", "Hôm Nay", "C"],
    ["Chủ Nhật", "Thứ Bảy", "Thứ Năm", "A"],
    ["Nước Anh", "Tiếng Anh", "Người Anh", "B"],
    ["Châu Báu", "Kho Báu", "Của Cải", "B"],
  ];
  // lưu trạng thái của đáp án đang được chọn
  const [selected, setSelected] = useState("");
  const [point, setPoint] = useState(0);
  const [index, setIndex] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [textColorA, setTextColorA] = useState("#000");
  const [textColorB, setTextColorB] = useState("#000");
  const [textColorC, setTextColorC] = useState("#000");
  // const [result, setResult] = useState("");
  const [stylea, setStylea] = useState("#E5E5E5");
  const [styleb, setStyleb] = useState("#E5E5E5");
  const [stylec, setStylec] = useState("#E5E5E5");
  const [time, setTime] = useState(90);
  // const [isTrue, setIsTrue] = useState(false);

  const getMaxScore = (currentScore) => {
    fetch(
      "http://watermelish.herokuapp.com/ketquagame/nhom13/gametracnghiem/" +
        currentScore
    )
      .then((response) => response.json())
      .then((json) => {
        setMaxScore(json[0].result);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setLoading(false));
  };

  const learnedAWord = () => {
    fetch("http://watermelish.herokuapp.com/xacnhanhocmottu/nhom13")
      .then((response) => response.json())
      .then((json) => {
        console.log(json[0].result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
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

  function isTrue(a, i) {
    return a === answer[i][3];
  }

  function isIndex(a) {
    return a == words.length - 1;
  }

  function selectOption(a) {
    setSelected(a);
    console.log(a);
    if (a === "A") {
      setStylea("#9B9797");
      setStyleb("#E5E5E5");
      setStylec("#E5E5E5");
    } else if (a === "B") {
      setStyleb("#9B9797");
      setStylea("#E5E5E5");
      setStylec("#E5E5E5");
    } else {
      setStylec("#9B9797");
      setStylea("#E5E5E5");
      setStyleb("#E5E5E5");
    }
  }

  function moveToNext(a) {
    setTextColorA("#000");
    setTextColorB("#000");
    setTextColorC("#000");

    setStylea("#E5E5E5");
    setStyleb("#E5E5E5");
    setStylec("##E5E5E5");

    setSelected("");
    const test = isTrue(a, index);
    setIndex((prev) => {
      setStylea(() => setStylea("#E5E5E5"));
      setStyleb(() => setStyleb("#E5E5E5"));
      setStylec(() => setStylec("#E5E5E5"));
      return prev + 1;
    });

    console.log(index);
  }

  function setTrueSelection(index) {
    if (isTrue("A", index)) {
      setTextColorA("#fff");
      setStylea(() => setStylea("#84D037"));
    } else if (isTrue("B", index)) {
      setTextColorB("#fff");
      setStyleb(() => setStyleb("#84D037"));
    } else {
      setTextColorC("#fff");
      setStylec(() => setStylec("#84D037"));
    }
  }

  function checkAnswer(a) {
    const test = isTrue(a, index);
    //const check = isIndex(index);
    // if(test) setTimeout(() => { console.log("success"); }, 2000);
    setPoint((prev) => {
      if (test) {
        return prev + 10;
      } else return prev;
    });

    if (test) {
      learnedAWord();
    }
    // setIndex((prev) => {
    //   if (test) {
    //     // setTimeout(() => { console.log("success"); }, 2000);
    //     setStylea(() => setStylea("#E5E5E5"));
    //     setStyleb(() => setStyleb("#E5E5E5"));
    //     setStylec(() => setStylec("#E5E5E5"));
    //     return prev + 1;
    //   } else return prev;
    // });
    // setResult(() => {
    //     if (!test ) return "Bạn đã trả lời sai!";
    // });
    if (a === "A") {
      setTextColorA("#fff");
      if (!test) {
        setStylea(() => setStylea("#E84118"));
      } else {
        setStylea(() => setStylea("#84D037"));
      }
    } else if (a === "B") {
      setTextColorB("#fff");
      if (!test) {
        setStyleb(() => setStyleb("#E84118"));
      } else {
        setStyleb(() => setStyleb("#84D037"));
      }
    } else if (a === "C") {
      setTextColorC("#fff");
      if (!test) {
        setStylec(() => setStylec("#E84118"));
      } else {
        setStylec(() => setStylec("#84D037"));
      }
    }
    // if(test) {
    //     setTimeout(() => { console.log("success"); }, 2000);
    // }
  }

  const checkTime = isTimeout();
  if (index <= words.length - 1 && !checkTime) {
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

          <View style={styles.question}>
            <View>
              <MyAppText
                content={words[index]}
                format="bold"
                style={styles.value}
              >
                {words[index]}
              </MyAppText>
            </View>
          </View>
          <TouchableOpacity onPress={() => selectOption("A")}>
            {/* <AnswerChoice style ={stylea}  stt="A" answer ={answer[index][0]} ></AnswerChoice> */}
            <View style={styles.box}>
              {/* <View style={styles.stt}>
                <Text style={styles.text}>{"A"}</Text>
              </View> */}
              <View
                style={{
                  flex: 5,
                  backgroundColor: stylea,
                  borderRadius: 10,
                  padding: 5,
                }}
              >
                <MyAppText
                  content={answer[index][0]}
                  format="bold"
                  size={15}
                  style={[styles.text, { color: textColorA }]}
                >
                  {answer[index][0]}
                </MyAppText>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => selectOption("B")}>
            {/* <AnswerChoice style ={stylea}  stt="B" answer={answer[index][1]}></AnswerChoice> */}
            <View style={styles.box}>
              <View
                style={{
                  flex: 5,
                  backgroundColor: styleb,
                  borderRadius: 10,
                  padding: 5,
                }}
              >
                <MyAppText
                  content={answer[index][1]}
                  format="bold"
                  style={[styles.text, { color: textColorB }]}
                >
                  {answer[index][1]}
                </MyAppText>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => selectOption("C")}>
            <View style={styles.box}>
              <View
                style={{
                  flex: 5,
                  backgroundColor: stylec,
                  borderRadius: 10,
                  padding: 5,
                }}
              >
                <MyAppText
                  content={answer[index][2]}
                  format="bold"
                  style={[styles.text, { color: textColorC }]}
                >
                  {answer[index][2]}
                </MyAppText>
              </View>
            </View>
          </TouchableOpacity>
          {selected ? (
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => {
                  setTrueSelection(index);
                  checkAnswer(selected);
                  getMaxScore(point);
                  setTimeout(() => {
                    moveToNext(selected);
                    console.log("ahihi");
                  }, 1000);
                  // moveToNext(selected);
                }}
              >
                <View
                  style={{
                    backgroundColor: "#2D2727",
                    borderRadius: 8,
                    padding: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    width: "40%",
                  }}
                >
                  <MyAppText
                    content="Xác nhận"
                    format="bold"
                    size={15}
                    style={{ color: "#fff" }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          ) : null}
        </ScrollView>
      </SafeAreaView>
    );
  } else {
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
            content={`Số điểm cao nhất: ${maxScore}`}
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
            setTime(() => setTime(90));
            setIndex(() => setIndex(0));
            setPoint(() => setPoint(0));
            setLoading(() => true);
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
    );
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
    //             style={styles.button}
    //             onPress={() => navigation.navigate("Game")}
    //           >
    //             <MyAppText
    //               content="BACK"
    //               format="regular"
    //               size={13}
    //               style={styles.goback}
    //             >
    //               {"RESET"}
    //             </MyAppText>
    //           </TouchableOpacity>
    //         </View>
    //         <View style={{ flex: 1, marginLeft: 55, borderRadius: 10 }}>
    //           <TouchableOpacity
    //             style={styles.button}
    //             onPress={() => {
    //               setTime(() => setTime(90));
    //               setIndex(() => setIndex(0));
    //               setPoint(() => setPoint(0));
    //             }}
    //           >
    //             <MyAppText
    //               content="RESET"
    //               format="regular"
    //               size={13}
    //               style={styles.goback}
    //             >
    //               {"RESET"}
    //             </MyAppText>
    //           </TouchableOpacity>
    //         </View>
    //       </View>
    //     </ScrollView>
    //   </SafeAreaView>
    // );
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
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight,
  },
  question: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 3,
    borderColor: "#84D037",
    borderRadius: 10,
    width: "100%",
    height: 150,
    marginTop: 10,
    marginBottom: 10,
    // marginLeft: 30,
    marginRight: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  value: {
    textAlign: "center",
    // marginTop: 50,
    fontSize: 20,
    // fontWeight: 'bold',
    color: "#2D2727",
  },
  box: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 10,
    marginBottom: 15,
  },
  stt: {
    flex: 1,
    borderWidth: 1,
    width: 50,
    borderColor: "#8E8888",
    backgroundColor: "#A09E9E",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  answer: {
    flex: 5,
    // backgroundColor: "#fff",
    borderRadius: 10,
  },
  text: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    fontSize: 13,
    // fontWeight: 'bold',
    color: "#2D2727",
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
