import React, { useState, useEffect }  from 'react';
import {  
View,
Text,
TouchableOpacity,
ScrollView,
StyleSheet,
SafeAreaView,
TextInput,
Alert,
Card 
} from 'react-native';

import ScoreTime from '../components/ScoreAndTime';
// import QuestionChoice from '../components/QuestionChoice';

export default function FillWordScreen({navigation}) {
    let words =["festival", "today", "english", "treasure"];
    const [point, setPoint] = useState(0);
    const [index, setIndex] = useState(0);
    const [result, setResult] = useState("");
    const [value, onChangeText] = useState("");
    const [time, setTime] = useState(90);
    
    useEffect(() => {
        const timer = setInterval(() => {
            if(time>0) setTime(time - 1);
        }, 1000);
        // clearing interval
        return () => clearInterval(timer);
    });


    function isTrue(v) {
        let a = words[index][3];
        let A = words[index][3].toUpperCase();
        return (v === a) ||(v === A);
    }

    function isIndex(a){
        return a == (words.length - 1);
    }

    function isTimeout(){
        return time == 0;
    }


    function transTime(time){
        let p = time/60;
        let s = time%60;
        return  (parseInt(p) + ":" + s); 
    }


    // if(isTimeout()){
    //     Alert.alert("Đã hết thời gian, vui lòng chuyển sang câu hỏi khác");
    //     // navigation.navigate("Game");
    // }
    
    const checkTime = isTimeout();

    if(index <= words.length - 1 && !checkTime){
        const test = isTrue(value);
        const check = isIndex(index);
    
        return (
            <SafeAreaView style={StyleSheet.container}>
                <ScrollView style={styles.scrollView} >
                    <ScoreTime score={point} time={transTime(time)}/>
                    <View style={styles.question}>
                        <Text style={styles.value}>{words[index].slice(0,3)}</Text>    
                        <TextInput 
                            style={styles.input}
                            onChangeText={(text) => onChangeText(text)}
                            value={value}>
                        </TextInput>
                        <Text style={styles.value}>{words[index].slice(4)}</Text>   
                    </View>
            
                    <View style={styles.box}>
                        <View style={{ flex: 1, marginRight: 55, borderRadius: 10 }}>
                            <TouchableOpacity 
                                style={[styles.button, styles.submit]}
                                onPress={() =>{
                                    setPoint((prev) => {
                                        if (test && !checkTime) return (prev + 10);
                                        else return prev;
                                    });
                                    setIndex((prev) => {
                                        if (test && !check ){
                                            onChangeText("");
                                            return (prev + 1);
                                        } 
                                        else {
                                            onChangeText("");
                                            return prev;
                                        }
                                    });
                                    setResult(() => {
                                        if (!test && !checkTime ) return "Bạn đã trả lời sai!";
                                    });
                                if (check) navigation.navigate("Game");
                            }}>
                                <Text style={styles.text}>{"Submit"}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex: 1, marginLeft: 55, borderRadius: 10 }}>
                            <TouchableOpacity style={[styles.button, styles.skip]}
                                onPress={()=>{
                                    setIndex((prev) => {
                                        // if (!check) 
                                        return (prev + 1);
                                        // else return prev;
                                    })
                                    // setTime(() => setTime(20));
                                    // if (check) navigation.navigate("Game");
                                    // setResult(() => {"Câu hỏi kế tiếp!"})
                                }}>
                                <Text style={styles.text}>{"Skip"}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View><Text style={styles.result}>{result}</Text></View>
                    
                </ScrollView>
            </SafeAreaView>    
        )
    }
    else {
        return (
            <SafeAreaView style={StyleSheet.container}>
                <ScrollView style={styles.scrollView} >
                    <ScoreTime score={point} time={transTime(time)}/>
                    <View style={{  flexDirection: "row",
                                    borderWidth: 1,
                                    borderColor: "#8E8888",
                                    borderRadius: 10,
                                    marginTop: 100,
                                    marginBottom: 100,
                                    height: 150,
                                    justifyContent: "center",
                                    backgroundColor: "#fff"
                                }}>
                        <View>
                            <Text style={styles.result}>Game Over !!!</Text>
                            <Text style={styles.result}>High Score:  {point}</Text>
                        </View>
                    </View>
                    <View style={{flex: 1, margin: 'auto', borderRadius: 10 }}>
                        <TouchableOpacity style={[styles.button, styles.skip]}
                            onPress={()=> navigation.navigate("Game")}>
                            <Text style={styles.text}>{"Go Back"}</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>    
        )
    }
    
    
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
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: "center",
        color: "red",
    }
})