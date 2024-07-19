import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress'
import { FontAwesome } from '@expo/vector-icons'
import images from '../../constants/images'
import Input from '../Input'
import { router } from 'expo-router'

const OpenImageGuess = () => {
  return (
    <View className="h-full w-full bg-orange-400">
      <View className="h-[20%] w-full bg-orange-200">
        <View className="flex-1 bg-white justify-center items-center">
          <Text className="text-5xl font-dBold">Tittle of the exercise</Text>
          <TouchableOpacity 
            onPress={() => router.back()}
            activeOpacity={1}
            className="h-[80px] w-[80px] bg-lightGray rounded-full absolute left-5 flex items-center justify-center"
          >
            <FontAwesome name="chevron-left" size={40} color="#4D0DA8" />
          </TouchableOpacity>
        </View>
        <View className="flex-1 bg-black items-center justify-around px-10 flex-row">
          <Progress.Bar 
            width={750}
            height={25}
            strokeCap={'rounded'}
            progress={0.5}
            borderRadius={50}
            unfilledColor='#CECECE'
            color="#8A46EA"
            borderWidth={0}
          />
          <FontAwesome name="heart" size={60} color={"red"} />
        </View>
      </View>
      <View className="h-[45%] w-full bg-blue-500 items-center justify-center">
        <Text className="text-4xl mb-3 font-dBold text-center">what are you seeing here ?</Text>
        <Image 
          className="h-[80%] w-[95%]"
          source={images.TestQuestion}
          resizeMode='contain'
        />
      </View>
      <View className="h-[35%] w-full bg-green-400">
        <Input 
        
        />
      </View>
    </View>
  )
}

export default OpenImageGuess