// rnfs
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MyStyles from './constants/Style'
import About from './components/About'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { fontSize: 80, fontWeight: 'bold' }]}>Hello Expo App</Text>
      <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, aspernatur!</Text>
      <Text style={MyStyles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ab consectetur sequi quaerat tenetur cum.</Text>

      {/* Load Componnent About */}
      <About />
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