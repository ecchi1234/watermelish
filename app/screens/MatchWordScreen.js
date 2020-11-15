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
import BoxMatch from '../components/BoxMatch';



export default function MultipleChoiceScreen() {
    return (
        <SafeAreaView style={StyleSheet.container}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <ScoreTime score="0" time="1:30"/>
                <View style={styles.box}>
                    <BoxMatch value="Hello"/>
                    <BoxMatch value="Choi Hyun Suk"/>
                </View>
                <View style={styles.box}>
                    <BoxMatch value="Bạn của Teume"/>
                    <BoxMatch value="Kho báu"/>
                </View>
                <View style={styles.box}>
                    <BoxMatch value="Xin chào"/>
                    <BoxMatch value="Treasure"/>
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