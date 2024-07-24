import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDimensionContext } from '../../context/DimensionProvider'


const PrimaryButton = ({ text, containerStyles, textStyles, handlePress }) => {
  const { isTablet } = useDimensionContext()

  return (
    <TouchableOpacity
      activeOpacity={1}
      className={`border-[2px] ${!isTablet() ? 'h-[60px] border-b-[5px]' : 'h-[90px] border-b-[8px]'} w-full bg-white rounded-3xl   border-regularViolet flex justify-center items-center active:border-b-[2px] ${isTablet() ? 'active:border-[3px]' : 'active:border-[2px]'} active:transform active:translate-y-[6px] ${containerStyles}`}
      onPress={handlePress}
    >
      <Text className={`${!isTablet() ? 'text-2xl' : 'text-4xl'}  font-dBold text-regularViolet ${textStyles}`}>{text}</Text>
    </TouchableOpacity>
  )
}

export default PrimaryButton
