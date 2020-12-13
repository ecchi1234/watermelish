import React, { useState, useEffect } from "react";
import AnimatedLoader from "react-native-animated-loader";
import {
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
  RefreshControl,
} from "react-native";

import MultipleChoice from "../components/MultipleChoice";
import MatchWord from "../components/MatchWord";
import FillWord from "../components/FillWord";
import MyAppText from "../components/MyAppText";
const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};
export default function Game({ navigation }) {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getMaxScoreAllGame().then(() => {
      setRefreshing(false);
    });
    // wait(2000).then(() => setRefreshing(false));
  }, []);

  const [maxScore, setMaxScore] = useState({
    tracnghiem: "",
    ghepcap: "",
    dientu: "",
  });
  const [isLoading, setLoading] = useState(true);

  const getMaxScoreAllGame = () => {
    return new Promise((resolve, reject) => {
      fetch("http://watermelish.herokuapp.com/diemcacgamecaonhat/nhom13")
        .then((response) => response.json())
        .then((json) => {
          setMaxScore({
            tracnghiem: json[0].result[0],
            ghepcap: json[0].result[1],
            dientu: json[0].result[2],
          });
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  useEffect(() => {
    fetch("http://watermelish.herokuapp.com/diemcacgamecaonhat/nhom13")
      .then((response) => response.json())
      .then((json) => {
        setMaxScore({
          tracnghiem: json[0].result[0],
          ghepcap: json[0].result[1],
          dientu: json[0].result[2],
        });
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setLoading(false));
  });
  return isLoading ? (
    <AnimatedLoader
      visible={true}
      overlayColor="rgba(255,255,255,0.75)"
      source={require("../img/loading-effect/pre-load.json")}
      animationStyle={{ width: 100, height: 100 }}
      speed={1}
    />
  ) : (
    <View style={(StyleSheet.container, { flex: 1, backgroundColor: "#fff" })}>
      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View>
          <MyAppText
            content="Minigame"
            format="bold"
            style={{ color: "#84D037" }}
          ></MyAppText>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Multiple Choice")}
        >
          <MultipleChoice score={maxScore.tracnghiem}></MultipleChoice>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Match Word")}>
          <MatchWord score={maxScore.ghepcap}></MatchWord>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Fill Word")}>
          <FillWord score={maxScore.dientu}></FillWord>
        </TouchableOpacity>

        <View style={{ padding: 20 }}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight,
  },
});
