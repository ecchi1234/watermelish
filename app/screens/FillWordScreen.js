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

export default function FillWordScreen({navigation}) {
    return (
    <SafeAreaView style={StyleSheet.container}>
        <ScrollView style={styles.scrollView} >
            {/* <View > */}
                <ScoreTime style={{flex: 1}} score="0" time="1:30"/>
                <QuestionChoice style={{flex: 2}} question="festi_al"></QuestionChoice>
                {/* <ScrollView style={styles.scrollView, {flex: 5}}> */}
                <View style={styles.box}>
                    <View style={{ flex: 1, marginRight: 55, borderRadius: 10 }}>
                        <TouchableOpacity style={[styles.button, styles.submit]}
                            onPress={() => navigation.push("Game")}>
                            <Text style={styles.text}>{"Submit"}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1, marginLeft: 55, borderRadius: 10 }}>
                        <TouchableOpacity style={[styles.button, styles.skip]}
                            onPress={() => navigation.push("Game")}>
                            <Text style={styles.text}>{"Skip"}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                    
                {/* </ScrollView> */}
            {/* </View> */}
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
    box: {
        marginLeft: 10,
        flex: 4,
        flexDirection: 'row',
    },
    button: {
        marginTop: 20,
        height: 34,
        borderRadius: 4,
        // flexDirection: 'row',
        justifyContent: "center",
        width: 90,
        
    },
    text: {
        color: "#fff",
        textAlign: "center",
    },
    submit: {
        backgroundColor: "#2D2727",
    },
    skip: {
        backgroundColor: 'red',
    }
})