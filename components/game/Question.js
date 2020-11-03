import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function ScoreTime(props) {
  return (
    <View style={styles.box}>
        <Text style={styles.text}>Score: {props.title} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    height: 70,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  text: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    textAlign: 'center',
  }
});
