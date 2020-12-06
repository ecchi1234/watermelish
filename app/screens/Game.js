import React from "react";
import {
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
} from "react-native";

import MultipleChoice from "../components/MultipleChoice";
import MatchWord from "../components/MatchWord";
import FillWord from "../components/FillWord";
import MyAppText from "../components/MyAppText";

export default function Game({ navigation }) {
  return (
    <View style={(StyleSheet.container, { flex: 1, backgroundColor: "#fff" })}>
      <ScrollView style={styles.scrollView}>
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
          <MultipleChoice score="300"></MultipleChoice>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Match Word")}>
          <MatchWord score="300"></MatchWord>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Fill Word")}>
          <FillWord score="300"></FillWord>
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
