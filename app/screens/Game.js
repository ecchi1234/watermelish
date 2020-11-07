import React from "react";
import {
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

import MultipleChoice from "../components/MultipleChoice";
import MatchWord from "../components/MatchWord";
import FillWord from "../components/FillWord";

export default function Game({ navigation }) {
    return (
        <ScrollView style={styles.scrollView}>
            <TouchableOpacity
              onPress={() => navigation.navigate("MultipleChoiceScreen")}>
              <MultipleChoice score="300"></MultipleChoice>
            </TouchableOpacity>
            
            <TouchableOpacity
              onPress={() => navigation.navigate("MatchWordScreen")}>
              <MatchWord score="300"></MatchWord>
            </TouchableOpacity>
            
            <TouchableOpacity
              onPress={() => navigation.navigate("FillWordScreen")}>
              <FillWord score="300"></FillWord>
            </TouchableOpacity>

            <View style={{padding: 20}}></View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  scrollView: {
    padding: 20,
  },
});
