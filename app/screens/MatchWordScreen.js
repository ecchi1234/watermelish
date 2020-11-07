import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MatchWordScreen() {
    return (
        <View style={styles.container}>
            <Text>Game ghép chữ</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    }
})