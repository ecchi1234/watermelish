import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

import Img from "../img/alarm-clock.png";
import MyAppText from "./MyAppText";

export default function ScoreAndTime(props) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={{ flex: 2 }}>
          <MyAppText content="Score: " format="bold" style={styles.text}>
            Score:{" "}
          </MyAppText>
        </View>
        <View style={{ flex: 2 }}>
          <MyAppText content={props.score} format="bold" style={styles.value}>
            {props.score}{" "}
          </MyAppText>
        </View>
        <View style={{ flex: 1 }}>
          <Image source={Img}></Image>
        </View>
        <View style={{}}>
          <MyAppText content={props.time} format="bold" style={styles.value}>
            {props.time}{" "}
          </MyAppText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "#fff",
    alignItems: "baseline",
    // marginTop: 20,
    // marginLeft: 20,
  },
  box: {
    flex: 4,
    flexDirection: "row",
    // backgroundColor: "blue",
    // justifyContent: "space-between",
  },
  text: {
    fontSize: 15,
    color: "#2D2727",
  },
  value: {
    fontSize: 15,
    color: "red",
  },
});
