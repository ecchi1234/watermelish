import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import AddFlashcard from "./app/screens/AddFlashcard";
import FlashcardHome from "./app/screens/FlashcardHome";
import Flashcards from "./app/screens/Flashcards";
import LearnFlashcard from "./app/screens/LearnFlashcard";
import EditFlashcard from "./app/screens/EditFlashcard";
import TestFlashcard from "./app/screens/TestFlashcard";

import Home from "./app/screens/Home";
import Game from "./app/screens/Game";
import Profile from "./app/screens/Profile";
import Result from "./app/screens/Result";

import ListIcons from "./app/components/ListIcons";

const HomeStack = createStackNavigator();
const GameStack = createStackNavigator();
const FlashcardStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const FlashcardHomeStack = createStackNavigator();

const Tabs = createBottomTabNavigator();

const FlashcardStackScreen = () => (
  <FlashcardStack.Navigator>
    <FlashcardStack.Screen name="Flashcards" component={Flashcards}/>
    <FlashcardStack.Screen name="AddFlashcard" component={AddFlashcard}/>
    <FlashcardStack.Screen name="FlashcardHome" component={FlashcardHomeStackScreen}/>
    <FlashcardStack.Screen name="LearnFlashcard" component={LearnFlashcard}/>
  </FlashcardStack.Navigator>
)

const FlashcardHomeStackScreen = () => (
  
  <FlashcardHomeStack.Navigator>
    <FlashcardHomeStack.Screen name="FlashcardHome" component={FlashcardHome} />
    <FlashcardHomeStack.Screen name="LearnFlashcard" component={LearnFlashcard}/>
    <FlashcardHomeStack.Screen name="EditFlashcard" component={EditFlashcard}/>
    <FlashcardHomeStack.Screen name="TestFlashcard" component={TestFlashcard}/>
  </FlashcardHomeStack.Navigator>
)

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home}/>
    <HomeStack.Screen name="Result" component={Result}/>
  </HomeStack.Navigator>
)


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
        tabBarOptions={{
          activeTintColor: '#84D037',
          inactiveTintColor: 'gray',
        }}
      >
        <Tabs.Screen name="Home" component={HomeStackScreen} />
        <Tabs.Screen name="Game" component={Game} />
        <Tabs.Screen name="Profile" component={Profile} />
        <Tabs.Screen name="Flashcard" component={FlashcardStackScreen} />
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


