import React from 'react'
import { View, Text, StyleSheet, ListRenderItemInfo } from 'react-native'
import { goal } from '../App'

interface props {
  itemData: ListRenderItemInfo<goal>
}

const GoalItem = ({ itemData }: props) => {
  return (
    <View style={styles.listItem}>
      <Text>{itemData.item.value}</Text>
    </View>
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
