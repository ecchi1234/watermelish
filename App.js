// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import GameScreen from './app/GameScreen';
// import ProfileScreen from './app/ProfileScreen';

// import {
//   StackNavigator,
// } from 'react-navigation';

// export default App = StackNavigator({
//   Game: { screen: GameScreen },
//   Profile: { screen: ProfileScreen },
// });

import React from 'react';
import { View, Text, Button, AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
// import { AppRegistry } from 
import GameScreen from './app/GameScreen';
import ProfileScreen from './app/ProfileScreen';


// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Text>Home Screen</Text>
//         <Button
//           // title="Go to Details"
//           onPress={() =>{this.props.navigation.navigate('Details')} }
//         >chuyển</Button>
//       </View>
//     );
//   }
// }

// class DetailsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//       </View>
//     );
//   }
// }

const Stack = createStackNavigator({
    Minigame: {
      screen: GameScreen,
      // navigationOptions: {
      //   headerTitle: 'Game',
      // },
    },
    Details: {
      screen: ProfileScreen,
    }
});

// export default 
class App extends React.Component {
  render() {
    return (
      // <View> 
      //   <GameScreen/>
      // </View>
      <Stack/>
    );
    
  }
}

export default createAppContainer(Stack);

// export default class App extends React.Component {
//   render(){
//     return (
//       <View style={styles.container}>
//         <GameScreen/>
//       </View>
//     );
//   }
  
// }

// const styles = StyleSheet.create({
//   // container: {
//   //   marginTop: 20,
//   //   marginLeft: 20,
//   //   marginRight: 20,
//   //   flex: 1,
//   // },
//   title: {
//     fontFamily: 'Roboto',
//     fontStyle: 'normal',
//     fontWeight: 'bold',
//     fontSize: 20,
//     lineHeight: 42,
//     color: '#84D037',
//   },
// });




// import React, { Component } from 'react';
// import { Dimensions, Platform, StyleSheet} from 'react-native';
// import { StackNavigator, TabNavigator } from 'react-navigation';
// // import { Icon } from 'react-native-elements';

// import GameScreen from './app/GameScreen';
// import HomeScreen from './app/HomeScreen';
// import LearnScreen from './app/LearnScreen';
// import ProfileScreen from './app/ProfileScreen';

// import ImgAccount from './assets/new_icon_account1.png';
// import ImgGame from './assets/new_icon_game_selected1.png';
// import ImgHome from './assets/new_icon_home1.png';
// import ImgWord from './assets/new_icon_word1.png';

// let screen = Dimensions.get('window');

// export const Tabs = TabNavigator({
//   'GameScreen': {
//     screen: GameScreen,
//     navigationOptions: {
//       tabBarLabel: 'GameScreen',
//       tabBarIcon: ({ tintColor }) => <Image style={styles.image} source={ImgGame} />
//     },
//   },
//   'HomeScreen': {
//     screen: HomeScreen,
//     navigationOptions: {
//       tabBarLabel: 'HomeScreen',
//       tabBarIcon: ({ tintColor }) => <Image style={styles.image} source={ImgHome} />
//     },
//   },
//   'LearnScreen': {
//     screen: LearnScreen,
//     navigationOptions: {
//       tabBarLabel: 'LearnScreen',
//       tabBarIcon: ({ tintColor }) => <Image style={styles.image} source={ImgWord} />
//     },
//   },
//   'ProfileScreen': {
//     screen: ProfileScreen,
//     navigationOptions: {
//       tabBarLabel: 'ProfileScreen',
//       tabBarIcon: ({ tintColor }) => <Image style={styles.image} source={ImgAccount} />
//     },
//   },
// });

// export const createRootNavigator = () => {
//   return StackNavigator(
//     {
//       Tabs: {
//         screen: Tabs,
//         navigationOptions: {
//           gesturesEnabled: false
//         }
//       }
//     },
//   );
// };



// const styles = StyleSheet.create({
//   image: {
//     flex: 1,
//     width: 40,
//     height: 30,
//     resizeMode: 'stretch',
//     // display: 'center',
    
//     // marginTop: 20,
//     // marginBottom: 20,
//      marginLeft: 20,
//     // marginRight: 20,
// },
// });




// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
// import GameScreen from './app/GameScreen';
// import HomeScreen from './app/HomeScreen';


// export default class App extends React.Component {
//   render() {
//     return (
//         <AppContainer />
//     );
//   }
// }

// const bottomTabNavigator = createBottomTabNavigator(
//   {
//     Home: HomeScreen,
//     Game: GameScreen,
//   },
//   {
//     initialRouteName: 'Home'
//   }
// );

// const AppContainer = createAppContainer(bottomTabNavigator);


// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from "react-native-vector-icons/FontAwesome";
// // import { Screen, screensEnabled // @ts-ignore
//   // , shouldUseActivityState } from 'react-native-screens';

// export default class App extends React.Component {
//   render() {
//     return (
//         <AppContainer />
//     );
//   }
// }

// class HomeScreen extends React.Component {
//   render() {
//     return(
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <Text> This is my Home screen </Text>
//       </View>
//     );
//   }
// }

// class ExploreScreen extends React.Component {
//   render() {
//     return(
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#d0d0d0'}}>
//         <Text> This is my Explore screen </Text>
//       </View>
//     );
//   }
// }

// class NotificationsScreen extends React.Component {
//   render() {
//     return(
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'}}>
//         <Text> This is my Notifications screen </Text>
//       </View>
//     );
//   }
// }

// class ProfileScreen extends React.Component {
//   render() {
//     return(
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#d0d0d0'}}>
//         <Text> This is my Profile screen </Text>
//       </View>
//     );
//   }
// }

// const bottomTabNavigator = createBottomTabNavigator(
//   {
//     Home: {
//       screen: HomeScreen,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => (
//           <Icon name="home" size={25} color={tintColor} />
//         )
//       }
//     },
//     Explore: {
//       screen: ExploreScreen,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => (
//           <Icon name="comments" size={25} color={tintColor} />
//         )
//       }
//     },
//     Notifications: {
//       screen: NotificationsScreen,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => (
//           <Icon name="search" size={25} color={tintColor} />
//         )
//       }
//     },
//     Profile: {
//       screen: ProfileScreen,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => (
//           <Icon name="user" size={25} color={tintColor} />
//         )
//       }
//     },
//   },
//   {
//     initialRouteName: 'Home',
//     tabBarOptions: {
//       activeTintColor: '#eb6e3d'
//     }
//   }
// );

// const AppContainer = createAppContainer(bottomTabNavigator);