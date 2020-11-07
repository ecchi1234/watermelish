import React from 'react';
import {  
View,
Text,
TouchableOpacity,
ScrollView,
StyleSheet,
} from 'react-native';

import ScoreTime from '../components/ScoreAndTime';
import QuestionChoice from '../components/QuestionChoice';

export default function MultipleChoiceScreen() {
    return (
        <View style={styles.container}>
            <ScoreTime style={{flex: 1}} score="0" time="1:30"/>
            <QuestionChoice style={{flex: 1}} question="festival"></QuestionChoice>
            <ScrollView style={styles.scrollView, {flex: 5}}>
                <View>
                </View>
            </ScrollView>
        </View>
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