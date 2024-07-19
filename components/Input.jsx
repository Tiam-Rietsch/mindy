import { View, Text, TextInput } from 'react-native'
import React from 'react'

const Input = ({ label, labelText, handleChangeText, containerStyles}) => {
  return (
    <View>
      <Text>Label of the input</Text>
      <TextInput />
    </View>
  )
}

export default Input