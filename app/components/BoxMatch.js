import React from 'react';
import {StyleSheet, View, Text } from 'react-native';

export default function BoxMatch(props){
    return (
      <View >
        <Text style={styles.title}>Ghép từ</Text>
        <View style={styles.game}>
          <View >
            <Image style={styles.image} source={ImgGame} />
          </View>
          <View >
            <Text style={styles.textScore}>Điểm cao</Text>
            <Text style={styles.textScore}>{props.score}</Text>
          </View>
        </View>
      </View>
    );
        
}

const styles = StyleSheet.create({
    // box: {
    //     border: 1px solid #000000;
    //     boxSizing: borderBox;
    //     border-radius: 20px;
    // },
});
