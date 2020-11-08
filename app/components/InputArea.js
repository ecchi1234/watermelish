import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

const InputArea = () => {
  const [value, onChangeText] = React.useState('Spring');

  return (
    <TextInput
      style={styles.inputField}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
  );
}

const styles = StyleSheet.create({
  inputField: {
    height: 40, 
    backgroundColor: '#f1f1f1',
    borderRadius: 5, 
    marginBottom: 10, 
    padding: 5,
    fontSize: 15
  }
})

export default InputArea;

