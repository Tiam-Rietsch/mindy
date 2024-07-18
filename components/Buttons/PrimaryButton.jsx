import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

const PrimaryButton = ({ text, containerStyles, textStyles, handlePress }) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      className={`h-[80px] w-full bg-white rounded-3xl border-[2px] border-b-[8px] border-regularViolet flex justify-center items-center active:border-b-[2px] active:border-[3px] active:transform active:translate-y-[6px] ${containerStyles}`}
      onPress={handlePress}
    >
      <Text className={`text-4xl font-dBold text-regularViolet ${textStyles}`}>{text}</Text>
    </TouchableOpacity>
  )
}

export default PrimaryButton