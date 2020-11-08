import React from 'react';
import {  
View,
Text,
TouchableOpacity,
ScrollView,
StyleSheet,
SafeAreaView,
} from 'react-native';

import ScoreTime from '../components/ScoreAndTime';
import Match from '../components/Match';



export default function MultipleChoiceScreen() {
    return (
        <SafeAreaView style={StyleSheet.container}>
            <ScrollView style={styles.scrollView} >
                <ScoreTime score="0" time="1:30"/>
                <View style={styles.box}>
                    <Match value="Hello"/>
                    <Match value="Choi Hyun Suk"/>
                </View>
                <View style={styles.box}>
                    <Match value="Bạn của Teume"/>
                    <Match value="Kho báu"/>
                </View>
                <View style={styles.box}>
                    <Match value="Xin chào"/>
                    <Match value="Treasure"/>
                </View>
            </ScrollView>
        </SafeAreaView>    
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    },
    box: {
        flexDirection: 'row',
    },
    scrollView: {
        padding: 20,
    },
    
})