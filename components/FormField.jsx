import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { useDimensionContext } from '../context/DimensionProvider'


const FormField = ({ containerStyles }) => {
  const { isTablet } = useDimensionContext()
  return (
    <TextInput className={`w-[300px]  h-[50px] bg-lightGray rounded-xl border-2 border-regularGray p-3 ${containerStyles}`}
    placeholder="Email ou nom d'utilisateur">

    </TextInput>

  
  )
}

export default FormField