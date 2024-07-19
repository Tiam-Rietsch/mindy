import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { router } from 'expo-router'

const ReturnHeader = ({ title }) => {
  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Text className="text-5xl font-dBold">{ title }</Text>
      <TouchableOpacity
        onPress={() => router.back()}
        activeOpacity={1}
        className="h-[80px] w-[80px] bg-lightGray rounded-full absolute left-5 flex items-center justify-center"
      >
        <FontAwesome name="chevron-left" size={40} color="#4D0DA8" />
      </TouchableOpacity>
    </View>
  )
}

export default ReturnHeader