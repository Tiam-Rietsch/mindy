import { View, Text, FlatList } from 'react-native'
import React, { createContext, useState } from 'react'
import PrimaryButton from './Buttons/PrimaryButton'
import LevelButton from './Buttons/LevelButton'
import { useLessonContext } from '../context/LessonProvider'
import DetailPopupProvider from '../context/DetailPopupProvider'


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
]


const UnitHeader = ({ id, title }) => {
  return (
    <View className="w-full h-[150px] bg-thickViolet mb-10 flex-row justify-between items-center overflow-hidden">
        <View className=" h-full w-[50%] justify-around items-start px-10 py-5">
          <Text className="text-white font-dBold text-4xl">Unit {id}</Text>
          <Text className="text-white font-dBold text-3xl">{title}</Text>
        </View>
        <View className="h-full w-[50%] justify-center items-center">
          <PrimaryButton 
            containerStyles={"w-[60%] h-[70px]"}
            textStyles={"text-3xl"}
            text={"DETAILS..."}
          />
        </View>
    </View>
  )
}

const UnitContainer = ({ unit: { unitId, name, description, objective, currentUnit }}) => {

  const { curLesson, setCurLesson } = useLessonContext()

  const shiftRatio = (index) => {
    let value = index % 6
    const step = 70

    switch(value) {
      case 0: return step * 0
      case 1: return step * -1
      case 2: return step * -2
      case 3: return step * 0
      case 4: return step * 1
      case 5: return step * 2
    }


  }

  return (
    <View className="w-full flex items-center">
      <View className="w-full">
        <UnitHeader 
          id={unitId}
          title={name}
        />
        <View className="w-full items-center justify-start">
          <FlatList 
            className="w-full"
            data={lessons}
            keyExtractor={(lesson) => lesson.lessonId}
            renderItem={({ item }) => (
              <DetailPopupProvider>
                <LevelButton 
                  containerStyles={`${item.active && currentUnit ? 'w-[180px]' : 'w-[150px]'} mb-10`}
                  shift={shiftRatio(item.lessonId - 1)}
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