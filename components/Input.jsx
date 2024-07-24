import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { useDimensionContext } from '../context/DimensionProvider'

const Input = ({ label, labelText, handleChangeText, containerStyles, inputStyles}) => {
  const { isTablet } = useDimensionContext()

  return (
    <View className={`w-[70%] h-fit rounded-2xl items-start justify-center p-2 ${containerStyles}`}>
      <Text className={`font-dBold ${isTablet() ? 'text-3xl' : 'text-xl'} mb-2`}>{labelText}</Text>
      <TextInput 
        className={`bg-white w-full ${isTablet() ? 'text-3xl h-[80px]' : 'text-xl h-[50px]'} px-5 font-dRegular rounded-2xl border-[3px] border-lightViolet ${inputStyles}`}
        onChangeText={handleChangeText}
      />
    </View>
  )
}

export default Input