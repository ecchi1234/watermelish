import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import font_styles from "../font/font";

export default function TestFlashcard() {
  return (
    <SafeAreaView style={StyleSheet.container}>
      <ScrollView>
        <View>
          <Image source={require("../img/green-texture.png")}></Image>
          <Text style={[font_styles.font, styles.pageTitle]}>
            Kiểm tra bộ từ
          </Text>
          {/**button save */}
        </View>

        <View style={styles.content}>
            <Text style={{color: "red", position: "absolute", right: 30, fontSize: 25, fontWeight: "bold"}}>0/10</Text>
            <View style={{marginTop: 20, marginBottom: 20, width: "100%", height: 157, borderWidth: 1, borderRadius: 15, borderColor: "black", justifyContent: "center", alignItems: "center"}}>
                <Text style={{fontWeight: "bold", fontSize: 30}}>festi_al</Text>
            </View>
            <TouchableOpacity style={{backgroundColor: "black", borderRadius: 10, width: 150, height: 45, }}>
                <Text style={{color: "#fff", textAlign: "center", textAlignVertical: "center", fontSize: 20}}>Submit</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },

  pageTitle: {
    position: "absolute",
    top: 50,
    marginLeft: 20,
    fontSize: 25,
    color: "#fff",
    fontWeight: "bold",
  },

  content: {
    padding: 30,
    alignItems: "center"
  },
});
