import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native'
import GoalInput from './components/GoalInput'
import GoalItem from './components/GoalItem'

export interface goal {
  id: string
  value: string
}

const App = () => {
  const [courseGoals, setCourseGoals] = useState<goal[]>([])
  const [isAddMode, setIsAddMode] = useState<boolean>(false)

  const addGoalHandler = (goalTitle: string): void => {
    setCourseGoals([
      ...courseGoals,
      { id: Math.random().toString(), value: goalTitle }
    ])
    setIsAddMode(false)
  }

  const removeGoalHandler = (goalId: string): void => {
    setCourseGoals(courseGoals.filter((goal: goal) => goal.id !== goalId))
  }

  return (
    <View style={styles.container}>
      <Button title='Add new goal' onPress={() => setIsAddMode(true)} />
      <GoalInput
        setIsAddMode={setIsAddMode}
        visible={isAddMode}
        addGoalHandler={addGoalHandler}
      />
      <FlatList
        keyExtractor={(item) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem removeGoalHandler={removeGoalHandler} itemData={itemData} />
        )}
      />
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  }
})

export default App
