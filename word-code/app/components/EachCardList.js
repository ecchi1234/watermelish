import React from 'react';

import { Text, View, StyleSheet, Image } from 'react-native';
import font_styles from '../font/font';
import MyAppText from "../components/MyAppText";

export default function EachCardList(props) {
    return(
        <View style={{justifyContent: "center", alignItems: "center"}}>
            <View style={[styles.english, styles.word]}>
                <View style={{alignItems: "center"}}>

                <MyAppText content={props.english} format="bold" style={[styles.text]}></MyAppText>
                <MyAppText content="(n)" format="regular" style={[styles.text]}>(n)</MyAppText>
                </View>
                <Image source={require("../img/sound.png")} style={styles.soundButton}></Image>
            </View>
            <View style={[styles.word, styles.vietnamese]}>
                <MyAppText content={props.vietnamese} format="bold" style={[styles.text]}>{props.vietnamese}</MyAppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    word: {
        height: 160,
        width: 300,
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },

    english: {
        backgroundColor: "#84D037",
    },

    vietnamese: {
        backgroundColor: "#E84118"
    },

    soundButton: {
        position: "absolute",
        right: 0,
        top: 0
    },
    text: {
        color: "#fff"
    }



})

