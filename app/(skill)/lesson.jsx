import { View, Text, ActivityIndicator, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import OpenImageGuess from '../../components/Exercises/OpenImageGuess'
import { useLessonContext } from '../../context/LessonProvider'
import { getGames } from '../api/fetch'
import { useGlobalContext } from '../../context/GlobalProvider'

const lesson = () => {
  const { curExerciseIndex, setCurExerciseIndex, exercises, setExercises } = useLessonContext()
  const { curLesson, isTablet } = useGlobalContext()
  const [loadingExercises, setLoadingExercises] = useState(false)

  const loadExercises = async () => {
    try {
      setLoadingExercises(true)

      let lessonExercises = await getGames(curLesson.id)
      console.log("the loaded exercises are", lessonExercises)
      if (!lessonExercises) throw Error("the games could not be loaded")
      setExercises(lessonExercises)

    } catch(error) {
      console.error(error)
    } finally {
      setLoadingExercises(false)
    }
  }

  const correctExercise = () => {
    setCurExerciseIndex(curExerciseIndex+1)
  }

  const ready = () => {
    console.log("exercises ", exercises)
    return exercises.length > 0
  }

  const renderExercise = () => {
    const gameType = exercises[curExerciseIndex].type
    if (gameType == "SCENARIO") {
      return <OpenImageGuess lesson={curLesson} handleCorrectExercise={correctExercise} exercise={exercises[curExerciseIndex]}/>
    }
  }

  const renderLoading = () => (
    <>
      <ActivityIndicator size="large" color="black"/>
      <Text className={`${isTablet ? 'text-[18px]' : 'text-xl'}`}>Loading exercises...</Text>
    </>
  )

  useEffect(() => {
    loadExercises()
  }, [])

  return (
    <SafeAreaView className="flex-col items-center justify-center h-full">
      {ready() ? (
        renderExercise()
      ) : (
        renderLoading()
      )}
    </SafeAreaView>
  )
}

export default lesson