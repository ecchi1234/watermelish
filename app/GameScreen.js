import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import IconTracNghiem from '../components/game/IconTracNghiem';
import IconGhepChu from '../components/game/IconGhepChu';
import IconDienTu from '../components/game/IconDienTu';
import MenuBottom from '../components/MenuBottom';


export default class GameScreen extends Component {
  // static navigationOptions = {
  //   title: 'Welcome',
  // };
  // render() {
   
  //   return (
  //     <Button
  //       title="Go to Jane's profile"
  //       onPress={() =>
  //         navigate('Profile')
  //       }
  //     />
  //   );
  // }


  render() {
    // const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        {/* <View style={{flex: 1}}>
          <Text style={styles.title}>Minigame</Text>
        </View> */}
        <IconTracNghiem score="300"></IconTracNghiem>
        <IconGhepChu/>
        <IconDienTu/>
        <View style={{flex: 1.2}}></View>
        {/* <MenuBottom/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        flex: 1,
    },
    title: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 42,
        color: '#84D037',
    },
});