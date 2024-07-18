import { View, Text, Image } from 'react-native'
import React from 'react'
import PrimaryButton from './Buttons/PrimaryButton'
import { router } from 'expo-router'
import { useDimensionContext } from '../context/DimensionProvider'

const SkillCard = ({ title, description, handleContinue, src }) => {
  const { isTablet } = useDimensionContext()


  const formatTitle = (title) => {
    return `${title ?? 'NO TITLE'}`.toUpperCase()
  }

  return (
    <View className={`w-full ${!isTablet() ? 'h-[300px]': 'h-[500px]'} rounded-2xl bg-thickViolet p-10`}>
      <View className={`w-[70%] h-full flex flex-col justify-between items-start`}>
        <View className={`w-full h-[20%] items-start justify-center`}>
          <Text className={` ${!isTablet() ? 'text-[22px]' : 'text-[40px]'} font-dBold text-white`}>{formatTitle(title)}</Text>
        </View>
        <View className={`w-full h-[50%] flex-row`}>
          <Text className={`${!isTablet() ? 'text-[18px]' : 'text-3xl'} font-dRegular text-white w-full`}>
            {description ?? 'no description'}
          </Text>
        </View>
        <View className={`h-[20%] w-full`}>
          <PrimaryButton text="CONTINUE" handlePress={() => router.push('/chaptersMap')}/>
        </View>
      </View>
      <View>

      </View>
    </View>
  )
}

export default SkillCard