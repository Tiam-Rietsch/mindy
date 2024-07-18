import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, router } from 'expo-router'
import PrimaryButton from '../components/Buttons/PrimaryButton'


const index = () => {
  return (
    <View className="h-full w-full flex justify-center items-center font-dBold">
      <PrimaryButton 
        handlePress={() => router.push('/lesson')}
        containerStyles={"w-[70%] border-black"}
        textStyles={"text-black"}
        text="START"
      />
    </View>
  )
}

export default index