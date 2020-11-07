import React from 'react';
import {  
View,
Text,
TouchableOpacity,
ScrollView,
StyleSheet,
} from 'react-native';

import ScoreTime from '../components/ScoreAndTime';

export default function MatchWordScreen() {
    return (
        <View style={styles.container}>
            <ScoreTime score="0" time="1:30"></ScoreTime>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    }
})