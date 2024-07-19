import { View, Text, TextInput } from 'react-native'
import React from 'react'

const Input = ({ label, labelText, handleChangeText, containerStyles, inputStyles}) => {
  return (
    <View className={`w-[70%] h-fit rounded-2xl items-start justify-center p-2 ${containerStyles}`}>
      <Text className="font-dBold text-3xl mb-2">{labelText}</Text>
      <TextInput 
        className={`bg-white w-full h-[80px] text-3xl px-5 font-dRegular rounded-2xl border-[3px] border-lightViolet ${inputStyles}`}
        onChangeText={handleChangeText}
      />
    </View>
  )
}

export default Input