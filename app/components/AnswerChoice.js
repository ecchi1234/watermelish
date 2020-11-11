import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function AnswerChoice(props) {
// class AnswerChoice extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             key: false
//         };

//         var taskToDo = () =>{
//             this.setState(previousState => {
//                 return {
//                     key : !previousState
//                 };
//             });
//         };


    
//     }

//     render(){
//         let 

        return (
            <View style={styles.box}>
                <View style={{flex: 1}, styles.stt}>
                    <Text style={styles.text} >{props.stt}</Text>  
                </View>
                <View style={{flex: 1},styles.answer, props.changeStyle}>
                    <Text style={styles.text} >{props.answer}</Text>  
                </View>
            </View>
        );
    
}

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: "#8E8888",
        borderRadius: 10,
        marginBottom: 30,
    },
    stt: {
        // flex: 1,
        borderWidth: 1,
        width: 50,
        borderColor: "#8E8888",
        backgroundColor: "#A09E9E",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    answer: {
        // flex: 5,
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
    }
})

