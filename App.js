import React, { useState } from "react";
import { StyleSheet, Text, View, Image, StatusBar } from "react-native";

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
import AfterAddFlashcard from "./app/screens/AfterAddFlashcard";
import AfterEditFlashcard from "./app/screens/AfterEditFlashcard";

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
const AddFlashcardStack = createStackNavigator();

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
        return <Image source={iconName} style={{ width: 27, height: 27 }} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: "#84D037",
      inactiveTintColor: "gray",
    }}
  >
    <Tabs.Screen name="Home" component={HomeStackScreen} />
    <Tabs.Screen name="Flashcard" component={FlashcardStackScreen} />
    <Tabs.Screen name="Game" component={GameStackGame} />
    <Tabs.Screen name="Profile" component={ProfileStackScreen} />
  </Tabs.Navigator>
);

const LoginStackScreen = () => (
  <LoginStack.Navigator>
    <LoginStack.Screen
      name="Login"
      component={Login}
      options={{
        headerShown: false,
      }}
    />
    <LoginStack.Screen
      name="Signup"
      component={Signup}
      options={{
        headerShown: false,
      }}
    />
  </LoginStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name="Profile"
      component={Profile}
      options={{
        headerShown: false,
      }}
    />
    <ProfileStack.Screen
      name="EditProfile"
      component={EditProfile}
      options={{
        headerShown: false,
      }}
    />
    <ProfileStack.Screen name="SetTarget" component={SetTarget} />
  </ProfileStack.Navigator>
);

const GameStackGame = () => (
  <GameStack.Navigator>
    <GameStack.Screen
      name="Game"
      component={Game}
      options={{
        headerShown: false,
      }}
    />
    <GameStack.Screen
      name="Multiple Choice"
      component={MultipleChoiceScreen}
      options={{
        title: "Trắc nghiệm",
        headerTintColor: "#84D037",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerShown: false,
      }}
    />
    <GameStack.Screen
      name="Match Word"
      component={MatchWordScreen}
      options={{
        headerShown: false,
      }}
    />
    <GameStack.Screen
      name="Fill Word"
      component={FillWordScreen}
      options={{
        headerShown: false,
      }}
    />
  </GameStack.Navigator>
);

const FlashcardStackScreen = () => (
  <FlashcardStack.Navigator headerMode="none">
    <FlashcardStack.Screen name="Flashcards" component={Flashcards} />
    <FlashcardStack.Screen
      name="AddFlashcard"
      component={AddFlashcardStackScreen}
    />
    <FlashcardStack.Screen
      name="FlashcardHome"
      component={FlashcardHomeStackScreen}
    />
  </FlashcardStack.Navigator>
);

const FlashcardHomeStackScreen = () => (
  <FlashcardHomeStack.Navigator>
    <FlashcardHomeStack.Screen
      name="FlashcardHome"
      component={FlashcardHome}
      options={{
        title: "",
        headerTitleStyle: {
          fontFamily: "Roboto_400Regular",
          fontSize: 14,
        },
        headerStyle: {
          height: 65,
        },
      }}
    />
    <FlashcardHomeStack.Screen
      name="LearnFlashcard"
      component={LearnFlashcard}
      options={{
        title: "",
        headerTitleStyle: {
          fontFamily: "Roboto_400Regular",
          fontSize: 14,
        },
        headerStyle: {
          height: 65,
        },
      }}
    />
    <FlashcardHomeStack.Screen
      name="EditFlashcard"
      component={EditFlashcard}
      options={{
        title: "Thoát",
        headerTitleStyle: {
          fontFamily: "Roboto_400Regular",
          fontSize: 14,
        },
        headerStyle: {
          height: 65,
        },
      }}
    />
    <FlashcardHomeStack.Screen name="TestFlashcard" component={TestFlashcard} />
    <FlashcardHomeStack.Screen
      name="AfterEditFlashcard"
      component={AfterEditFlashcard}
      options={{
        headerShown: false,
      }}
    />
  </FlashcardHomeStack.Navigator>
);

const AddFlashcardStackScreen = () => (
  <AddFlashcardStack.Navigator>
    <AddFlashcardStack.Screen
      name="AddFlashcard"
      component={AddFlashcard}
      options={{
        title: "",
        headerTitleStyle: {
          fontFamily: "Roboto_400Regular",
          fontSize: 14,
        },
        headerStyle: {
          height: 65,
        },
      }}
    />
    <AddFlashcardStack.Screen
      name="AfterAddFlashcard"
      component={AfterAddFlashcard}
      options={{
        headerShown: false,
      }}
    />
  </AddFlashcardStack.Navigator>
);

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack.Screen name="Result" component={Result} />
  </HomeStack.Navigator>
);

export default function App() {
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
      },
    };
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          {userToken ? <TabsScreen /> : <LoginStackScreen />}
        </NavigationContainer>
      </AuthContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
