import { View, Text } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'


const index = () => {

  return <Redirect href="/study" />

  return (
    <View className="h-full w-full flex justify-center items-center font-dBold">
      <Text className="font-dBold text-5xl">index</Text>
    </View>
  )
}

export default index