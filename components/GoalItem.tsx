import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ListRenderItemInfo,
  TouchableOpacity
} from 'react-native'
import { goal } from '../App'

interface props {
  itemData: ListRenderItemInfo<goal>
  removeGoalHandler: (goalId: string) => void
}

const GoalItem = ({ itemData, removeGoalHandler }: props) => {
  return (
    <TouchableOpacity onPress={() => removeGoalHandler(itemData.item.id)}>
      <View style={styles.listItem}>
        <Text>{itemData.item.value}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
})

export default GoalItem
