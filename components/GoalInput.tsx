import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

interface props {
  addGoalHandler: (goalTitle: string) => void
}

const GoalInput = ({ addGoalHandler }: props) => {
  const [enteredGoal, setEnteredGoal] = useState<string>('')

  const goalInputHandler = (enteredText: string): void => {
    setEnteredGoal(enteredText)
  }

  return (
    <View style={styles.section}>
      <TextInput
        placeholder='Course Goal'
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title='ADD' onPress={() => addGoalHandler(enteredGoal)} />
    </View>
  )
}
const styles = StyleSheet.create({
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
export default GoalInput
