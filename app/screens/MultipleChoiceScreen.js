import React, {useState, useEffect} from 'react';
import {  
View,
Text,
TouchableOpacity,
ScrollView,
StyleSheet,
SafeAreaView,
} from 'react-native';

import ScoreTime from '../components/ScoreAndTime';
// import AnswerChoice from '../components/AnswerChoice';



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
    // const [result, setResult] = useState("");
    const [stylea, setStylea]= useState("#fff");
    const [styleb, setStyleb]= useState("#fff");
    const [stylec, setStylec]= useState("#fff");
    const [time, setTime] = useState(90);
    
    useEffect(() => {
        const timer = setInterval(() => {
            if(time>0) setTime(time - 1);
        }, 1000);
        // clearing interval
        return () => clearInterval(timer);
    });

    function isTimeout(){
        return time == 0;
    }


    function transTime(time){
        let p = time/60;
        let s = time%60;
        return  (parseInt(p) + ":" + s); 
    }

    function isTrue(a, i){
        return a === answer[i][3];
    }

    function isIndex(a){
        return a == (words.length - 1);
    }

    function checkAnswer(a){
        const test = isTrue(a, index);
        //const check = isIndex(index);
        // if(test) setTimeout(() => { console.log("success"); }, 2000);
        setPoint((prev) => {
            if (test) return (prev + 10);
            else return prev;
        });
        setIndex((prev) => {
            if (test){
                // setTimeout(() => { console.log("success"); }, 2000);
                setStylea(()=>setStylea("#fff"));
                setStyleb(()=>setStyleb("#fff"));
                setStylec(()=>setStylec("#fff"));
                return (prev + 1);
            }
            else return prev;
        });
        // setResult(() => {
        //     if (!test ) return "Bạn đã trả lời sai!";
        // });
        if(a === "A"){
            if(!test) setStylea(()=>setStylea("#E84118"));
            else setStylea(()=>setStylea("#84D037"));
        }
        else if (a === "B"){
            if(!test) setStyleb(()=>setStyleb("#E84118"));
            else setStyleb(()=>setStyleb("#84D037"));
        }
        else if (a === "C"){
            if(!test) setStylec(()=>setStylec("#E84118"));
            else setStylec(()=>setStylec("#84D037"));
        }
        // if(test) {
        //     setTimeout(() => { console.log("success"); }, 2000);
        // }
        
    }

    const checkTime = isTimeout();
    if(index <= words.length - 1 && !checkTime){
        return (
            <SafeAreaView style={StyleSheet.container, {flex: 1, backgroundColor: "#fff"}}>
                <ScrollView style={styles.scrollView} >
                    <ScoreTime score={point} time={transTime(time)}/>
                    <View style={styles.question}>
                        <Text style={styles.value}>{words[index]}</Text>     
                    </View>    
                    <TouchableOpacity
                        onPress = {() => checkAnswer("A")}
                    >
                        {/* <AnswerChoice style ={stylea}  stt="A" answer ={answer[index][0]} ></AnswerChoice> */}
                        <View style={styles.box}>
                            <View style={ styles.stt}>
                                <Text style={styles.text} >{"A"}</Text>  
                            </View>
                            <View style={{  
                                    flex: 5,
                                    backgroundColor: stylea, 
                                    borderTopRightRadius: 10,
                                    borderBottomRightRadius: 10,
                                }}
                            >
                                <Text style={styles.text} >{answer[index][0]}</Text>  
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {() => checkAnswer("B")}
                    >
                        {/* <AnswerChoice style ={stylea}  stt="B" answer={answer[index][1]}></AnswerChoice> */}
                        <View style={styles.box}>
                            <View style={ styles.stt}>
                                <Text style={styles.text} >{"B"}</Text>  
                            </View>
                            <View style={{  
                                    flex: 5,
                                    backgroundColor: styleb, 
                                    borderTopRightRadius: 10,
                                    borderBottomRightRadius: 10,
                                }}
                            >
                                <Text style={styles.text} >{answer[index][1]}</Text>  
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {() => checkAnswer("C")}
                    >
                        
                        <View style={styles.box}>
                            <View style={ styles.stt}>
                                <Text style={styles.text} >{"C"}</Text>  
                            </View>
                            <View style={{  
                                    flex: 5,
                                    backgroundColor: stylec, 
                                    borderTopRightRadius: 10,
                                    borderBottomRightRadius: 10,
                                }}
                            >
                                <Text style={styles.text} >{answer[index][2]}</Text>  
                            </View>
                        </View>
    
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>    
        )
    }
    else {
        return (
            <SafeAreaView style={StyleSheet.container, {flex: 1, backgroundColor: "#fff"}}>
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
                                    backgroundColor: "#fff",
                                }}>
                        <View>
                            <Text style={styles.result}>Game Over !!!</Text>
                            <Text style={styles.result}>High Score:  {point}</Text>
                        </View>
                    </View>
                    <View style={{flex: 1, margin: 'auto', borderRadius: 10 }}>
                        <TouchableOpacity style={styles.button}
                            onPress={()=> navigation.navigate("Game")}>
                            <Text style={styles.goback}>{"Go Back"}</Text>
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
        justifyContent: "center",
        backgroundColor: "#fff"
    },
    value: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 30,
        // fontWeight: 'bold',
        color: '#2D2727',
    },
    box: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: "#8E8888",
        borderRadius: 10,
        marginBottom: 30,
    },
    stt: {
        flex: 1,
        borderWidth: 1,
        width: 50,
        borderColor: "#8E8888",
        backgroundColor: "#A09E9E",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    answer: {
        flex: 5,
        // backgroundColor: "#fff",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    text: {
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
        fontSize: 20,
        // fontWeight: 'bold',
        color: '#2D2727',
    },
    result: {
        marginTop: 30,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: "center",
        color: "red",
    },
    button: {
        marginTop: 20,
        height: 34,
        borderRadius: 4,
        // flexDirection: 'row',
        justifyContent: "center",
        width: 90,
        backgroundColor: "#2D2727",
    },
    goback: {
        color: "#fff",
        textAlign: "center",
    }
})