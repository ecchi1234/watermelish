import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import AddFlashcard from "./app/screens/AddFlashcard";
import FlashcardHome from "./app/screens/FlashcardHome";
import Flashcards from "./app/screens/Flashcards";

import Home from "./app/screens/Home";
import Game from "./app/screens/Game";
import Profile from "./app/screens/Profile";

import ListIcons from "./app/components/ListIcons";

const HomeStack = createStackNavigator();
const GameStack = createStackNavigator();
const FlashcardStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused
                ? ListIcons.icons_focused.home
                : ListIcons.icons_unfocused.home;
            } else if (route.name === "Flashcard") {
              iconName = focused
                ? ListIcons.icons_focused.flashcards
                : ListIcons.icons_unfocused.flashcards;
            } else if (route.name === "Game") {
              iconName = focused
                ? ListIcons.icons_focused.game
                : ListIcons.icons_unfocused.game;
            } else if (route.name === "Profile") {
              iconName = focused
                ? ListIcons.icons_focused.profile
                : ListIcons.icons_unfocused.profile;
            }

            // You can return any component that you like here!
            return <Image source={iconName} />;
          },
        })}
      >
        <Tabs.Screen name="Home" component={Home} />
        <Tabs.Screen name="Game" component={Game} />
        <Tabs.Screen name="Profile" component={Profile} />
        <Tabs.Screen name="Flashcard" component={Flashcards} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
