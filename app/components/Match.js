import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function QuestionChoice(props){
    return (
        <View style={styles.question}>
            <Text style={styles.text} >{props.value}</Text>    
        </View>
    );
}

const styles = StyleSheet.create({
    question: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#8E8888",
        borderRadius: 10,
        width: '100%',
        height: 120,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        backgroundColor: "#999",
        // marginRight: 30,
    },
    text: {
        textAlign: 'center',
        marginTop: 30,
        fontSize: 20,
        // fontWeight: 'bold',
        color: '#2D2727',
    }
})

