import React, { useState } from 'react'
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native'

interface props {
  addGoalHandler: (goalTitle: string) => void
  visible: boolean
  setIsAddMode: React.Dispatch<React.SetStateAction<boolean>>
}

const GoalInput = ({ addGoalHandler, visible, setIsAddMode }: props) => {
  const [enteredGoal, setEnteredGoal] = useState<string>('')

  const goalInputHandler = (enteredText: string): void => {
    setEnteredGoal(enteredText)
  }

  const handleAdd = (): void => {
    addGoalHandler(enteredGoal)
    setEnteredGoal('')
  }

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.section}>
        <TextInput
          placeholder='Course Goal'
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title='CANCEL'
              color='red'
              onPress={() => setIsAddMode(false)}
            />
          </View>
          <View style={styles.button}>
            <Button title='ADD' onPress={handleAdd} />
          </View>
        </View>
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  textInput: {
    borderColor: 'black',
    width: '80%',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  },
  button: {
    width: '40%',
    borderRadius: 10,
    overflow: 'hidden'
  }
})
export default GoalInput
