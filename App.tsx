import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import GoalInput from './components/GoalInput'
import GoalItem from './components/GoalItem'

export interface goal {
  id: string
  value: string
}

const App = () => {
  const [courseGoals, setCourseGoals] = useState<goal[]>([])

  const addGoalHandler = (goalTitle: string): void => {
    setCourseGoals([
      ...courseGoals,
      { id: Math.random().toString(), value: goalTitle }
    ])
  }

  return (
    <View style={styles.container}>
      <GoalInput addGoalHandler={addGoalHandler} />
      <FlatList
        keyExtractor={(item) => item.id}
        data={courseGoals}
        renderItem={(itemData) => <GoalItem itemData={itemData} />}
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
