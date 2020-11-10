import React, { useState }  from 'react';
import {  
View,
Text,
TouchableOpacity,
ScrollView,
StyleSheet,
SafeAreaView,
TextInput,
} from 'react-native';

import ScoreTime from '../components/ScoreAndTime';
// import QuestionChoice from '../components/QuestionChoice';

export default function FillWordScreen({navigation}) {
    let words =["festival", "today", "english", "treasure"];
    const [point, setPoint] = useState(0);
    const [index, setIndex] = useState(0);
    const [result, setResult] = useState("");
    const [value, onChangeText] = useState("");
    const [check, setCheck] = useState(0);
    

    function isTrue(v) {
        let a = words[index][3];
        let A = words[index][3].toUpperCase();
        return (v === a) ||(v === A);
    }

    function isIndex(a){
        return a == (words.length - 1);
    }

    return (
        <SafeAreaView style={StyleSheet.container}>
            <ScrollView style={styles.scrollView} >
                <ScoreTime score={point} time="1:30"/>
                <View style={styles.question}>
                    <Text style={styles.value}>{words[index].slice(0,3)}</Text>    
                    <TextInput 
                        style={styles.input}
                        onChangeText={(text) =>
                            // setCheck((prev) =>{
                            //     if(value === "") prev = 0;
                            //     else prev = 1; 
                            // });
                            // if(check!=1) 
                            onChangeText(text)
                            // else onChangeText(value);
                            // }
                        }
                        value={value}>
                    </TextInput>
                    <Text style={styles.value}>{words[index].slice(4)}</Text>   
                </View>
        
                {/* <QuestionChoice question="festi_al"></QuestionChoice> */}
                {/* <ScrollView style={styles.scrollView, {flex: 5}}> */}
        
                <View style={styles.box}>
                    <View style={{ flex: 1, marginRight: 55, borderRadius: 10 }}>
                        <TouchableOpacity 
                            style={[styles.button, styles.submit]}
                            onPress={() =>{
                                const test = isTrue(value);
                                const check = isIndex(index);
                                setPoint((prev) => {
                                    const test = isTrue(value);
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
                                if (check) navigation.navigate("Game");
                        }}>
                            <Text style={styles.text}>{"Submit"}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1, marginLeft: 55, borderRadius: 10 }}>
                        <TouchableOpacity style={[styles.button, styles.skip]}
                            onPress={()=>{
                                const check = isIndex(index);
                                setIndex((prev) => {
                                    if (!check) return (prev + 1);
                                    else return prev;
                                })
                                if (check) navigation.navigate("Game");
                                // setResult(() => {"Câu hỏi kế tiếp!"})
                            }}>
                            <Text style={styles.text}>{"Skip"}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
                <Text style={styles.result}>{result}</Text>
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
    input:{
        fontSize: 30,
        fontWeight: "bold",
        // borderBottomWidth: 2,
        // borderBottomColor: "black",
        color: "#E84118",
    },

    value: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 30,
        // fontWeight: 'bold',
        color: '#2D2727',
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
    },
    result: {
        marginTop: 30,
        fontWeight: 'bold',
        textAlign: "center",
        color: "red",
    }
})