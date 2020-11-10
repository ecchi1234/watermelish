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
              onPress={() => navigation.navigate("Multiple Choice")}>
              <MultipleChoice score="300"></MultipleChoice>
            </TouchableOpacity>
            
            <TouchableOpacity
              onPress={() => navigation.navigate("Match Word")}>
              <MatchWord score="300"></MatchWord>
            </TouchableOpacity>
            
            <TouchableOpacity
              onPress={() => navigation.navigate("Fill Word")}>
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
