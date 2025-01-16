import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function UserByID() {

    const { id } = useLocalSearchParams()
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 24 }}>UserByID : {id}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})