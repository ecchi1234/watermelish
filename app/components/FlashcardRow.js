import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function FlashcardRow(props) {
    return (
        <View style={styles.container}>
            <Text style={{fontWeight: "bold"}}>{props.name}</Text>
            <Image resizeMode="cover" source={require("../img/autumn.png")} style={{}}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 20
    }
})