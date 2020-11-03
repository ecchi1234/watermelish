import React from 'react';
import { Image, StyleSheet, View, Text, Button } from 'react-native';
// import { Button } from 'react-native-button';

import ImgGame from '../../assets/spring1.png';

export default function IconTracNghiem(props){
    return (
        <View style={{flex: 4}}>
            <View style={{flex: 1}}>
              <Text style={styles.title}>Trắc nghiệm</Text>
            </View>
            <View style={styles.game}>
              <View style={{flex: 4}}>
                <Image style={styles.image} source={ImgGame} />   
              </View>
              <View style={{flex: 5}}>
                <Text style={styles.textScore}>Điểm cao</Text>
                <Text style={styles.textScore}>{props.score}</Text>
                <Button
                  title="Play"
                  onPress={() =>{this.props.navigation.navigate('Details')} }/>
                
               
              </View>
            </View>
        </View>
    );
        
}

const styles = StyleSheet.create({
    title: {
        fontSize: 15,
        lineHeight: 40,
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'bold',
        color: '#2D2727',
    },
    game: {
        flex: 4,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: "#8E8888",
        borderRadius: 10,
    },
    image: {
        flex: 1,
        resizeMode: 'stretch',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10
    },
    textScore: {
        // position: 'absolute',
        // width: 195,
        // height: 114,
        // left: 185,
        // top: 404,
        marginTop: 30,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 24,
        lineHeight: 28,
        textAlign: 'center',
        color: '#84D037',
    },
});
  