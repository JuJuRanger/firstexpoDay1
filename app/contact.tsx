import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'

export default function Contact() {

    const router = useRouter()

    // รับค่าผ่าน URL
    const { name, email, tel, company } = useLocalSearchParams()

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 50, textAlign: 'center' }}>Contact Page</Text>
            <Text style={{ fontSize: 20, textAlign: 'center' }}>Name: {name}</Text>
            <Text style={{ fontSize: 20, textAlign: 'center' }}>Email: {email}</Text>
            <Text style={{ fontSize: 20, textAlign: 'center' }}>Tel: {tel}</Text>
            <Text style={{ fontSize: 20, textAlign: 'center' }}>Company: {company}</Text>

            <Button title='Go Back' onPress={() => router.back()} />
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