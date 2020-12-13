import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useReducer } from "react";
import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthContext } from "./app/components/Context";
import AsyncStorage from '@react-native-community/async-storage';

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
    <FlashcardStack.Screen name="AddFlashcard" component={AddFlashcard} />
    <FlashcardStack.Screen
      name="FlashcardHome"
      component={FlashcardHomeStackScreen}
    />
    <FlashcardStack.Screen name="LearnFlashcard" component={LearnFlashcard} />
  </FlashcardStack.Navigator>
);

const FlashcardHomeStackScreen = () => (
  <FlashcardHomeStack.Navigator>
    <FlashcardHomeStack.Screen name="FlashcardHome" component={FlashcardHome} />
    <FlashcardHomeStack.Screen
      name="LearnFlashcard"
      component={LearnFlashcard}
    />
    <FlashcardHomeStack.Screen name="EditFlashcard" component={EditFlashcard} />
    <FlashcardHomeStack.Screen name="TestFlashcard" component={TestFlashcard} />
  </FlashcardHomeStack.Navigator>
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

  const initialLoginState = {
    isLoading: true,
    username: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch(action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          username: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          username: null,
          userToken: null,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async(username, password) => {
      let userToken;
      userToken = null;
      fetch('http://watermelish.herokuapp.com/dangnhap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
      .then(response => response.json())
      .then(async(json) => {
        if (json[0]._id == -1) {
          alert("Username or Password is incorrect");
        } else {
          // signIn(json[0]._id);
          try {
            userToken = 'abc';
            await AsyncStorage.setItem('userToken', userToken);
          } catch (e) {
            console.error(e);
          }
          dispatch({ type: 'LOGIN', id: username, token: userToken });
          console.log('Signed in successfully');
        }
      })
      .catch((error) => {
        console.error(error);
      });
    },
    signOut: async() => {
      try {
        await AsyncStorage.removeItem('userToken');
      } catch (e) {
        console.error(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
  }), []);

  useEffect(() => {
    setTimeout(async() => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.error(e);
      }
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <ActivityIndicator size='large'/>
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken ? <TabsScreen /> : <LoginStackScreen />}
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
