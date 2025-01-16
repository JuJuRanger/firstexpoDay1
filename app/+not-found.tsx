import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'

export default function NotFoundScreen() {
    return (
        <View style={styles.container}>
            {/* <Link href="">Go to home screen</Link> */}
            <Button title='Go to Notfound' onPress={() => router.push('/')} />
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