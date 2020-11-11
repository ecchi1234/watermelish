import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import Img from '../img/image1.png';

export default function ScoreAndTime(props) {
  return (
    <View style={styles.container}>
        <View style={styles.box}>
            <View style={{flex: 2}}>
                <Text style={styles.text}>Score: </Text>
            </View>
            <View style={{flex: 2}}>
                <Text style={styles.value}>{props.score} </Text>
            </View>
            <View style={{flex: 1}}>
                <Image source={Img}></Image>
            </View>
            <View style={{flex: 2}}>
                <Text style={styles.value}>{"0:"}{props.time} </Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        // backgroundColor: "#fff",
        alignItems: "center",
        // marginTop: 20,
        marginLeft: 20,
    },
    box: {
        flex: 4,
        flexDirection: 'row',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2D2727',
    },
    value: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
    }
});