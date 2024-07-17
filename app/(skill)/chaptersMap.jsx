import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import UnitContainer from '../../components/UnitContainer'

const units = [
  {
    unitId: 1,
    name: "this is the first chapter",
    description: "this is the description of the chapter",
    objective: "this is the objective of the th chapter",
    currentUnit: true
  },
  {
    unitId: 2,
    name: "this is the first chapter",
    description: "this is the description of the chapter",
    objective: "this is the objective of the th chapter",
    currentUnit: false
  },
  {
    unitId: 3,
    name: "this is the first chapter",
    description: "this is the description of the chapter",
    objective: "this is the objective of the th chapter",
    currentUnit: false
  }
]

const chaptersMap = () => {
  return (
    <SafeAreaView className="w-full h-full flex-col items-center">
      <FlatList 
        data={units}
        keyExtractor={(item) => item.unitId}
        renderItem={({ item }) => (
          <UnitContainer 
            unit={item}
          />
        )}
        className="w-full h-full"
      />
    </SafeAreaView>
  )
}

export default chaptersMap