import { View, Text, FlatList, Image } from 'react-native'
import React, { createContext, useState } from 'react'
import PrimaryButton from './Buttons/PrimaryButton'
import LevelButton from './Buttons/LevelButton'
import { useLessonContext } from '../context/LessonProvider'
import DetailPopupProvider from '../context/DetailPopupProvider'
import { useDimensionContext } from '../context/DimensionProvider'
import getPet from '../constants/pet'


const lessons = [
  {
    name: "this is the lesson namne",
    description: "this is the lesson description",
    lessonId: 1,
    passed: true,
    active: false,
    progress: 0,
    rating: 3,
  },
  {
    name: "this is the lesson namne",
    description: "this is the lesson description",
    lessonId: 2,
    passed: true,
    active: false,
    progress: 0.3,
    rating: 2,
  },
  {
    name: "this is the lesson namne",
    description: "this is the lesson description",
    lessonId: 3,
    passed: true,
    active: false,
    progress: 0,
    rating: 1,
  },
  {
    name: "this is the lesson namne",
    description: "this is the lesson description",
    lessonId: 4,
    passed: false,
    active: true,
    progress: 0.4,
    rating: 0,
  },
  {
    name: "this is the lesson namne",
    description: "this is the lesson description",
    lessonId: 5,
    passed: false,
    active: false,
    progress: 0,
    rating: 0,
  },
  {
    name: "this is the lesson namne",
    description: "this is the lesson description",
    lessonId: 6,
    passed: false,
    active: false,
    progress: 0,
    rating: 0,
  },
]


const UnitHeader = ({ id, title }) => {
  const { isTablet } = useDimensionContext()
  return (
    <View className={`w-full ${!isTablet() ? 'h-[120px] mb-2 mt-5' : 'h-[200px] mb-10' } bg-thickViolet  flex-row justify-between items-center overflow-hidden`}>
        <View className={`h-full ${!isTablet() ?'w-[60%] px-5' : 'w-[50%] px-10'} justify-around items-start py-5`}>
          <Text className= {`text-white font-dBold ${!isTablet() ?'text-3xl' : 'text-4xl'}`}>Unit {id}</Text>
          <Text className={`text-white font-dBold ${!isTablet() ?'text-[18px] w-full' : 'text-4xl'}`}>{title}</Text>
        </View>
        <View className={`h-full flex-1 justify-center items-end pr-5`}>
          <PrimaryButton 
            containerStyles={`${isTablet() ? 'w-[70%]' : 'w-[90%] h-[50px] rounded-xl'}`}
            textStyles={`${isTablet() ? '' : 'text-[18px]'}`}
            text={"DETAILS..."}
          />
        </View>
    </View>
  )
}

const UnitContainer = ({ unit: { unitId, name, description, objective, currentUnit }}) => {

  const { curLesson, setCurLesson } = useLessonContext()
  const { isTablet } = useDimensionContext()

  const shiftRatio = (index, unitId) => {
    let orientation = unitId % 2 == 0 ? 1 : -1
    let value = index % 6
    const step = isTablet() ? 100 *orientation : 38 *orientation

    switch(value) {
      case 0: return step * 0
      case 1: return step * -1
      case 2: return step * -2
      case 3: return step * -2
      case 4: return step * -1.15
      case 5: return step * -0.5
    }


  }

  return (
    <View className="w-full flex items-center">
      <View className="w-full">
        <UnitHeader 
          id={unitId}
          title={name}
        />
        <View className="relative w-full items-center justify-start">
          <View className={`${isTablet() ? 'h-[400px]' : 'h-[180px]'} aspect-square absolute top-[40%] ${unitId % 2 == 0 ? 'right-[5%]' :  'left-[5%]'}`}>
            <Image 
              source={getPet(unitId -1)}
              className="h-full w-full"
              resizeMode="contain"
            />
          </View>
          <FlatList 
            className="w-full"
            data={lessons}
            keyExtractor={(lesson) => lesson.lessonId}
            renderItem={({ item }) => (
              <DetailPopupProvider>
                <LevelButton 
                  containerStyles={`${item.active && currentUnit ? (isTablet() ? 'w-[150px] my-[50px]' : 'w-[80px] my-5') : (isTablet() ? 'w-[150px] mb-10' : 'w-[70px] mb-2')}`}
                  shift={shiftRatio(item.lessonId - 1, unitId)}
                  lesson={item}
                  current={item.active && currentUnit}
                />
              </DetailPopupProvider>
            )}
          />
        </View>
      </View>
    </View>
  )
}

export default UnitContainer