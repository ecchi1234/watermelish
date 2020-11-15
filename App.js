import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthContext } from "./app/screens/Context";

import AddFlashcard from "./app/screens/AddFlashcard";
import FlashcardHome from "./app/screens/FlashcardHome";
import Flashcards from "./app/screens/Flashcards";
import LearnFlashcard from "./app/screens/LearnFlashcard";
import EditFlashcard from "./app/screens/EditFlashcard";
import TestFlashcard from "./app/screens/TestFlashcard";

import MultipleChoiceScreen from "./app/screens/MultipleChoiceScreen";
import MatchWordScreen from "./app/screens/MatchWordScreen";
import FillWordScreen from "./app/screens/FillWordScreen";

import Home from "./app/screens/Home";
import Game from "./app/screens/Game";
import Profile from "./app/screens/Profile";
import Result from "./app/screens/Result";
import EditProfile from "./app/screens/EditProfile";
import Login from "./app/screens/Login";
import Signup from "./app/screens/Signup";
import SetTarget from "./app/screens/SetTarget";

import ListIcons from "./app/components/ListIcons";

const LoginStack = createStackNavigator();
const HomeStack = createStackNavigator();
const GameStack = createStackNavigator();
const FlashcardStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const FlashcardHomeStack = createStackNavigator();

const Tabs = createBottomTabNavigator();
const TabsScreen = () => (
  <Tabs.Navigator
    initialRouteName="Home"
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
        return <Image source={iconName} style={{width: 27, height: 27}}/>;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#84D037',
      inactiveTintColor: 'gray',
    }}
  >
    <Tabs.Screen name="Home" component={HomeStackScreen} />
    <Tabs.Screen name="Flashcard" component={FlashcardStackScreen} />
    <Tabs.Screen name="Game" component={GameStackGame} />
    <Tabs.Screen name="Profile" component={ProfileStackScreen} />
  </Tabs.Navigator>
)

const LoginStackScreen = () => (
  <LoginStack.Navigator>
    <LoginStack.Screen name="Login" component={Login}/>
    <LoginStack.Screen name="Signup" component={Signup}/>
  </LoginStack.Navigator>
)

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile}/>
    <ProfileStack.Screen name="EditProfile" component={EditProfile}/>
    <ProfileStack.Screen name="SetTarget" component={SetTarget}/>
  </ProfileStack.Navigator>
)

const GameStackGame = () => (
  <GameStack.Navigator>
    <GameStack.Screen name="Game" component={Game}/>
    <GameStack.Screen name="Multiple Choice" component={MultipleChoiceScreen}/>
    <GameStack.Screen name="Match Word" component={MatchWordScreen}/>
    <GameStack.Screen name="Fill Word" component={FillWordScreen}/>
  </GameStack.Navigator>
)

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
  const [userToken, setUserToken] = useState(null);

  const authContext = React.useMemo(() => {
    return {
      Login: () => {
        setUserToken(true);
      },
      // SignUp: () => {
      //   setUserToken(true);
      // },
      Logout: () => {
        setUserToken(null);
      }
    };
  }, []);

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken ? <TabsScreen/> : <LoginStackScreen/>}
      </NavigationContainer>
    </AuthContext.Provider>
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


