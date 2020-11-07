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
import QuestionChoice from '../components/QuestionChoice';
import AnswerChoice from '../components/AnswerChoice';



export default function MultipleChoiceScreen() {
    return (
        <SafeAreaView style={StyleSheet.container}>
            <ScrollView style={styles.scrollView} >
                <ScoreTime score="0" time="1:30"/>
                <QuestionChoice question="festival"/>
                <View>
                    <AnswerChoice stt="A" answer="lễ hội" key="true"></AnswerChoice>
                </View>
                <View>
                    <AnswerChoice stt="B" answer="chúc mừng năm mới"></AnswerChoice>
                </View>
                <View>
                    <AnswerChoice stt="C" answer="hoa đào"></AnswerChoice>
                </View>
                
                
            </ScrollView>
        </SafeAreaView>    
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    },
    scrollView: {
        padding: 20,
    },
})