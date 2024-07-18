import { View, Text } from 'react-native'
import React from 'react'
import OpenImageGuess from '../../components/Exercises/OpenImageGuess'

const lesson = () => {
  return (
    <View className="flex-col items-center">
      <OpenImageGuess />
    </View>
  )
}

export default lesson