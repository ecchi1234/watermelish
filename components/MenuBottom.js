import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

import ImgAccount from '../assets/new_icon_account1.png';
import ImgGame from '../assets/new_icon_game_selected1.png';
import ImgHome from '../assets/new_icon_home1.png';
import ImgWord from '../assets/new_icon_word1.png';

export default function MenuBottom(props){
    return (
        <View style={{flex: 1, bottomTop: 20}}>
          <View style={styles.menuBottom}>
            <View style={{flex: 1}}>
              <Image style={styles.image} source={ImgHome} />
            </View>
            <View style={{flex: 1}}>
              <Image style={styles.image} source={ImgWord} />
            </View>
            <View style={{flex: 1}}>
              <Image style={styles.image} source={ImgGame} />
            </View>
            <View style={{flex: 1}}>
              <Image style={styles.image} source={ImgAccount} />
            </View>
          </View>
        </View>
      
    );
        
}

const styles = StyleSheet.create({
    menuBottom: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1, 
        borderTopColor: '#C1B8B8',
        borderColor: '#fff',
        marginLeft: -20,
        marginRight: -20,
        // position: 'fixed'
    },
    image: {
      flex: 1,
      width: 40,
      height: 30,
      resizeMode: 'stretch',
      // display: 'center',
      
      // marginTop: 20,
      // marginBottom: 20,
       marginLeft: 20,
      // marginRight: 20,
  },
});