import React from "react";
import { Image, View, Text } from "react-native";

import ImgGame from "../img/spring1.png";
import styles from "../font/fontGame";
import MyAppText from "./MyAppText";

export default function MultipleChoice(props) {
  return (
    <View>
      <MyAppText content="Trắc nghiệm" format="bold" style={styles.title}>
        Trắc nghiệm
      </MyAppText>
      <View style={styles.game}>
        <View>
          <Image style={styles.image} source={ImgGame} />
        </View>
        <View style={{ alignItems: "center", justifyContent: "flex-start" }}>
          <View>
            <MyAppText
              content="Điểm cao"
              format="regular"
              style={[styles.textScore, styles.textScoreTitle]}
            ></MyAppText>
          </View>
          <View>
            <MyAppText
              content={props.score}
              format="bold"
              style={styles.textScore}
            >
              {props.score}
            </MyAppText>
          </View>
        </View>
      </View>
    </View>
  );
}
