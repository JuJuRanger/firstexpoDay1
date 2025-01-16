// rnfs
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import About from '@/components/About'
import MyStyles from '@/constants/Style'

import { Link, useRouter } from 'expo-router'

export default function Index() {

    // สร้างตัวแปร router โดยใช้ useRouter()
    const router = useRouter()

    return (
        <View style={styles.container}>
            <Text style={[styles.text, { fontSize: 80, fontWeight: 'bold' }]}>Hello Expo App</Text>
            <Text style={styles.text}>Lorem ipsum pernatur!</Text>


            {/* Load Componnent About */}
            <About />

            {/* Link ไปยังหน้า Contact */}
            <Link href='/contact?name=JuJuRanger&company=ITGenius' style={MyStyles.text}>Click to Contact</Link>

            <Button title='Click to Contact' onPress={() => router.push('/contact?name=JuJuRanger&company=ITGenius')} />
            <Text>&nbsp;</Text>
            <Button
                title='Click to Contact with Param'
                onPress={() => {
                    router.push({
                        pathname: '/contact',
                        params: {
                            name: 'JuJu',
                            email: 'big@hotmail.com',
                            tel: '0811234567',
                            company: 'IGGenius',
                        }
                    })
                }} />

            <Text>&nbsp;</Text>
            <Button title='Go to User ID 123' onPress={() => router.push('/user/123')} />
            <Text>&nbsp;</Text>
            <Button title='Go to User Profile' onPress={() => router.push('/user/profile')} />
            <Text>&nbsp;</Text>
            <Button title='Go to Notfound' onPress={() => router.push('/Notfound')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        fontSize: 24,
        color: '#ffffff',
        margin: 20
    }
})