import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const MovieCard = (props) => {

    return (
        <View style={styles.container}>
            <Text> Title: {props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default MovieCard

