import { View, Text, Image } from 'react-native'
import React from 'react'
import PrimaryButton from './Buttons/PrimaryButton'
import { router } from 'expo-router'
import { useGlobalContext } from '../context/GlobalProvider'

const SkillCard = ({ title, description, handleContinue, src, loading }) => {
  const { isTablet } = useGlobalContext()


  const formatTitle = (title) => {
    return `${title ?? 'NO TITLE'}`.toUpperCase()
  }

  return (
    <View className={`w-full ${!isTablet ? 'h-[300px]' : 'h-[400px]'} rounded-2xl bg-thickViolet p-10 mb-[30px]`}>
      <View className={`w-full h-[20%] items-start justify-center`}>
        <Text className={` ${!isTablet ? 'text-[22px]' : 'text-[40px]'} font-dBold text-white`}>{formatTitle(title)}</Text>
      </View>
      <View className={`w-full h-[80%] flex flex-row justify-between items-start`}>
        <View className="w-[60%] justify-around h-full">
          <View className={`w-full h-fit flex-row`}>
            <Text className={`${!isTablet ? 'text-[15px] leading-5' : 'text-3xl'} font-dRegular text-white w-full`}>
              {description ?? 'no description'}
            </Text>
          </View>
          <View className={`h-[20%] w-full`}>
            <PrimaryButton
              containerStyles={!isTablet ? 'rounded-xl border-b-[6px] h-[50px]' : ''} 
              textStyles={!isTablet ? 'text-[20px]' : ''}
              text={loading ? 'Loading...' : 'CONTINUE'}
              handlePress={handleContinue} />
          </View>

        </View>
        <View className="w-[30%] h-full">
          <Image 
            source={src}
            className="h-full w-full"
            resizeMode='contain'          
          />
        </View>
      </View>

    </View>
  )
}

export default SkillCard