/*
text for this app
props of this components need to be front of style props for true display 

*/

import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import { AppLoading } from "expo";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";

export default (props) => {
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });

  let fontSize = props.size ? props.size : 20;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    if (props.format === "regular") {
      return (
        <Text
          style={[{
            fontSize,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: "Roboto_400Regular",
          },
        props.style]}
        >
          {props.content}
        </Text>
      );
    }
    else if (props.format === "bold") {
      return (
        <Text
          style={[{
            fontSize,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: "Roboto_700Bold",
          },
        props.style]}
        >
          {props.content}
        </Text>
      );
    }
    else if (props.format === "italic") {
      return (
        <Text
          style={[{
            fontSize,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: "Roboto_400Regular_Italic",
          },
        props.style]}
        >
          {props.content}
        </Text>
      );
    }
    
  }
};


