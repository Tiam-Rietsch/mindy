import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { Redirect, router } from 'expo-router'
import PrimaryButton from '../components/Buttons/PrimaryButton'


const index = () => {
  console.log(Dimensions.get('window').width)
  return (
    <View className="h-full w-full flex justify-center items-center font-dBold">
      <PrimaryButton 
        handlePress={() => router.push('/login')}
        containerStyles={'w-[80%] border-black '}
        textStyles={'text-black'}
        text="START"
      />
    </View>
  )
}

export default index