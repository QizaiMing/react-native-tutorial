import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <TextInput placeholder='Course Goal' style={styles.textInput} />
        <Button title='ADD' onPress={() => null} />
      </View>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
  textInput: {
    borderColor: 'black',
    width: '80%',
    borderWidth: 1,
    padding: 10
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})
