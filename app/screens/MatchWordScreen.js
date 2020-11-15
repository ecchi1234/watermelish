import React, {useEffect, useState} from 'react';
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
    let words =[
        ["Festival", "lễ hội", 0],
        ["Treasure", "kho báu", 1],
        ["Choi Friend", "Sukie", 2],
        ["Hello", "Xin chào", 3],
        ["Idol", "Thần tượng", 4],
        ["Goodbye", "Tạm biệt", 5],
    ];

    const [point, setPoint] = useState(0);
    const [index, setIndex] = useState(0);
    const [count, setCount] = useState(0);
    const [fisrt, setFisrt] = useState(-1);
    const [second, setSecond] = useState(-1);

    // const [result, setResult] = useState("");
    const [stylebox00, setStylebox00]= useState(styles.nomalbox);
    const [styletext00, setStyletext00]= useState(styles.nomaltext);

    const [stylebox01, setStylebox01]= useState(styles.nomalbox);
    const [styletext01, setStyletext01]= useState(styles.nomaltext);

    const [stylebox10, setStylebox10]= useState(styles.nomalbox);
    const [styletext10, setStyletext10]= useState(styles.nomaltext);
    
    const [stylebox11, setStylebox11]= useState(styles.nomalbox);
    const [styletext11, setStyletext11]= useState(styles.nomaltext);
    
    const [stylebox20, setStylebox20]= useState(styles.nomalbox);
    const [styletext20, setStyletext20]= useState(styles.nomaltext);
    
    const [stylebox21, setStylebox21]= useState(styles.nomalbox);
    const [styletext21, setStyletext21]= useState(styles.nomaltext);
    
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

    function checkTrue(){
        return fisrt==second;
    }


    function checkOnPress(a){
        
    }



    return (
        <SafeAreaView style={StyleSheet.container, {flex: 1, backgroundColor: "#fff"}}>
            <ScrollView style={styles.scrollView} >
                <ScoreTime score={point} time={transTime(time)} />
                <View style={styles.box}>
                    <TouchableOpacity 
                        style={{flexDirection: "column", width: '40%', marginRight: 40}}
                        // key = {index}
                        onPress= {()=> {
                            setStylebox00(styles.onPress);
                            setStyletext00(styles.changtext);
                            // if(fisrt==-1 && second !=-1) setFisrt(index);
                            // else setSecond(index);
                            // if(checkTrue()) setStylebox00(styles.changebox)
                            // console.log(fisrt);
                            // console.log(second);
                        }}


                    >
                        <View style={[styles.question, stylebox00 ]}>
                            <Text style={[styles.text, styletext00]} >{words[index][0]}</Text>    
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{flexDirection: "column", width: '40%', marginRight: 40}}
                        key = {index +1}
                        onPress= {()=> {
                            setStylebox01(styles.onPress);
                            setStyletext01(styles.changtext);
                        }}
                        
                    >
                        <View style={[styles.question, stylebox01 ]}>
                            <Text style={[styles.text, styletext01]} >{words[index +1][1]}</Text>    
                        </View>
                    </TouchableOpacity>
                    
                </View>
                <View style={styles.box}>
                    <TouchableOpacity 
                        style={{flexDirection: "column", width: '40%', marginRight: 40}}
                        key = {index +1}
                        onPress= {()=> {
                            setStylebox10(styles.onPress);
                            setStyletext10(styles.changtext);
                        }}
                    >
                        <View style={[styles.question, stylebox10 ]}>
                            <Text style={[styles.text, styletext10]} >{words[index + 1][0]}</Text>    
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{flexDirection: "column", width: '40%', marginRight: 40}}
                        key = {index +2}
                        onPress= {()=> {
                            setStylebox11(styles.onPress);
                            setStyletext11(styles.changtext);
                        }}
                    >
                        <View style={[styles.question, stylebox11 ]}>
                            <Text style={[styles.text, styletext11]} >{words[index +2][0]}</Text>    
                        </View>
                    </TouchableOpacity>
                    
                </View>
                <View style={styles.box}>
                    <TouchableOpacity 
                        style={{flexDirection: "column", width: '40%', marginRight: 40}}
                        key = {index +2}
                        onPress= {()=> {
                            setStylebox20(styles.onPress);
                            setStyletext20(styles.changtext);
                        }}
                    >
                        <View style={[styles.question, stylebox20 ]}>
                            <Text style={[styles.text, styletext20]} >{words[index +2][1]}</Text>    
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{flexDirection: "column", width: '40%', marginRight: 40}}
                        // key = {index}
                        onPress= {()=> {
                            setStylebox21(styles.onPress);
                            setStyletext21(styles.changtext);
                            // if(fisrt==-1) setFisrt(index);
                            // else if(second == -1) setSecond(index);
                            // if(checkTrue()) setStylebox00(styles.changebox)
                            // console.log(fisrt);
                            // console.log(second);
                        }}
                    >
                        <View style={[styles.question, stylebox21 ]}>
                            <Text style={[styles.text, styletext21]} >{words[index][1]}</Text>    
                        </View>
                    </TouchableOpacity>
                    
                </View>
                {/* <View style={styles.box}>
                    <TouchableOpacity style={{flexDirection: "column", width: '40%', marginRight: 40}}>
                        <BoxMatch value={words[index +1][0]} changebox={stylebox10} changtext={styletext10}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "column", width: '40%'}}>
                        <BoxMatch value={words[index + 2][0]} changebox={stylebox11} changtext={styletext11}/>
                    </TouchableOpacity>
                    
                </View>
                <View style={styles.box}>
                    <TouchableOpacity style={{flexDirection: "column", width: '40%', marginRight: 40}}>
                        <BoxMatch value={words[index +2 ][1]} changebox={stylebox20} changtext={styletext20}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "column", width: '40%'}}>
                        <BoxMatch value={words[index][1]} changebox={stylebox21} changtext={styletext21}/>
                    </TouchableOpacity>
                    
                </View> */}
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
        marginTop: 10,
    },
    scrollView: {
        padding: 20,
    },
    question: {
        flex: 1,
        borderWidth: 2,
        borderColor: "#8E8888",
        borderRadius: 10,
        width: '100%',
        height: 120,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        // backgroundColor: "#987",
        // marginRight: 30,
    },
    text: {
        textAlign: 'center',
        marginTop: 30,
        fontSize: 20,
        
        fontWeight: 'bold',
        color: '#2D2727',
    },
    nomalbox :{
        borderWidth: 2,
        backgroundColor: "#999",
    },
    onPress: {
        borderWidth: 2,
        borderColor: "#111",
        backgroundColor: "#84D037",
    },
    changebox :{
        borderWidth: 0,
        borderColor: "#fff",
        backgroundColor: "#fff",
    },
    nomaltext: {
        // color: '#2D2727',
    },
    changtext: {
        color: "#fff",
    }
    
})