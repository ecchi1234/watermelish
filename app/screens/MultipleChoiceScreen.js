import React, {useState} from 'react';
import {  
View,
Text,
TouchableOpacity,
ScrollView,
StyleSheet,
SafeAreaView,
} from 'react-native';

import ScoreTime from '../components/ScoreAndTime';
import AnswerChoice from '../components/AnswerChoice';



export default function MultipleChoiceScreen({ navigation }) {
    let words =["festival", "today", "english", "treasure"];
    let answer=[
        ["lễ hội", "chúc mừng năm mới", "hoa đào", "A" ],
        ["ngày mai", "hôm qua", "hôm nay","C" ],
        ["Nước Anh", "Tiếng Anh", "Người Anh", "B" ],
        ["Châu Báu", "Kho báu", "Của cải", "B" ]
    ];

    const [point, setPoint] = useState(0);
    const [index, setIndex] = useState(0);
    // const [key, setKey] = useState(answer[0][3])
    const [result, setResult] = useState("");

    function isTrue(a, i){
        return a === answer[i][3];
    }

    function isIndex(a){
        return a == (words.length - 1);
    }

    return (
        <SafeAreaView style={StyleSheet.container}>
            <ScrollView style={styles.scrollView} >
                <ScoreTime score={point} time="1:30"/>
                <View style={styles.question}>
                    <Text style={styles.value}>{words[index]}</Text>     
                </View>    
                <TouchableOpacity
                    onPress = {() => {
                        const test = isTrue("A", index);
                        const check = isIndex(index);
                        setPoint((prev) => {
                            if (test) return (prev + 10);
                            else return prev;
                        });
                        setIndex((prev) => {
                            if (test && !check) return (prev + 1);
                            else return prev;
                        });
                        setResult(() => {
                            if (!test ) return "Bạn đã trả lời sai!";
                        })
                }}>
                    <AnswerChoice stt="A" answer ={answer[index][0]} ></AnswerChoice>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {() => {
                        const test = isTrue("B", index);
                        const check = isIndex(index);
                        setPoint((prev) => {
                            if (test) return (prev + 10);
                            else return prev;
                        });
                        setIndex((prev) => {
                            if (test && !check) return (prev + 1);
                            else return prev;
                        });
                        setResult(() => {
                            if (!test ) return "Bạn đã trả lời sai!";
                        })
                }}>
                    <AnswerChoice stt="B" answer={answer[index][1]}></AnswerChoice>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {() => {
                        const test = isTrue("C", index);
                        const check = isIndex(index);
                        setPoint((prev) => {
                            if (test) return (prev + 10);
                            else return prev;
                        });
                        setIndex((prev) => {
                            if (test && !check) return (prev + 1);
                            else return prev;
                        });
                        setResult(() => {
                            if (!test ) return "Bạn đã trả lời sai!";
                        })
                }}>
                    <AnswerChoice stt="C" answer={answer[index][2]}></AnswerChoice>
                </TouchableOpacity>
                <Text style={styles.value}>{result}</Text>
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
    question:{
        flex: 1,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#8E8888",
        borderRadius: 10,
        width: '100%',
        height: 150,
        marginTop: 30,
        marginBottom: 30,
        // marginLeft: 30,
        marginRight: 30,
        justifyContent: "center"
    },
    value: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 30,
        // fontWeight: 'bold',
        color: '#2D2727',
    },
})