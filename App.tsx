import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Button, Text, StyleSheet, TextInput, View } from 'react-native'

const App = () => {
  const [enteredGoal, setEnteredGoal] = useState<string>('')
  const [courseGoals, setCourseGoals] = useState<string[]>([])
  const goalInputHandler = (enteredText: string): void => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = (): void => {
    setCourseGoals([...courseGoals, enteredGoal])
  }

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <TextInput
          placeholder='Course Goal'
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title='ADD' onPress={addGoalHandler} />
      </View>

      <View>
        {courseGoals.map((goal) => (
          <View style={styles.listItem}>
            <Text key={goal}>{goal}</Text>
          </View>
        ))}
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
  },
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
})

export default App
