import React from "react";
import { Image, View, Text } from "react-native";

import ImgGame from "../img/spring3.png";
import styles from "../font/fontGame";
import MyAppText from "./MyAppText";

export default function FillWord(props) {
  return (
    <View>
      <MyAppText content="Điền từ" format="bold" style={styles.title}>
        Ghép từ
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
            >
              Điểm cao
            </MyAppText>
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
