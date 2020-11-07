import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function QuestionChoice(props){
    return (
        <View style={styles.box}>
            <Text style={styles.text} >{props.question}</Text>    
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#8E8888",
        borderRadius: 10,
        width: '100%',
        height: 150,
        marginTop: 30,
        marginBottom: 30,
        // marginLeft: 30,
        marginRight: 30,
    },
    text: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 30,
        // fontWeight: 'bold',
        color: '#2D2727',
    }
})

