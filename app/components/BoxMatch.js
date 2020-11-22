import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function QuestionChoice(props){
    return (
        <View style={[styles.question, props.changebox] }>
            <Text style={[styles.text, props.changtext]} >{props.value}</Text>    
        </View>
    );
}

const styles = StyleSheet.create({
    question: {
        flex: 1,
        borderWidth: 2,
        borderColor: "#8E8888",
        borderRadius: 10,
        width: '100%',
        height: 120,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        // backgroundColor: "#987",
        // marginRight: 30,
    },
    text: {
        textAlign: 'center',
        marginTop: 30,
        fontSize: 20,
        
        fontWeight: 'bold',
        // color: '#2D2727',
    },
    nomalbox :{
        borderWidth: 2,
        backgroundColor: "#999",
    },
    onPress: {
        borderWidth: 4,
        borderColor: "#111",
        backgroundColor: "#84D037",
    },
    changebox :{
        borderWidth: 0,
        borderColor: "#fff",
        backgroundColor: "#fff",
    },
    nomaltext: {
        color: '#2D2727',
    },
    changtext: {
        color: "#fff",
    }
})

