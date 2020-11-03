import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function ScoreTime(props) {
  return (
    <View style={styles.box}>
      <View style={{flex: 4}}>
        <Text>Score: {props.title} </Text>
      </View>
      <View style={{flex: 4}}>
        <Text>Time: {props.value} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 24,
//   },
  box: {
    flex: 4,
    flexDirection: 'row',
  }
});