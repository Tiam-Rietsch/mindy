import { View, Text, TouchableOpacity, Image , SafeAreaView} from 'react-native'
import React, { useState } from 'react'
import * as Progress from 'react-native-progress'
import { FontAwesome, FontAwesome5, FontAwesome6 } from '@expo/vector-icons'
import images from '../../constants/images'
import Input from '../Input'
import { router } from 'expo-router'
import PrimaryButton from '../Buttons/PrimaryButton'
import ReturnHeader from '../ReturnHeader'
import { useDimensionContext } from '../../context/DimensionProvider'

const OpenImageGuess = () => {

  const [answer, setAnswer] = useState('')
  const [questionPassed, setQuestionPassed] = useState(true)
  const [showResult, setShowResult] = useState(false)
  const { isTablet } = useDimensionContext()

  return (
    <SafeAreaView className="h-full w-full">
      <View className={`h-[20%] w-full`}>
        <ReturnHeader title={"This is the title of the exercise"}/>
        <View className="flex-1 items-center justify-around px-10 flex-row">
          <Progress.Bar
            width={isTablet() ? 750 : 300}
            height={isTablet() ? 25 : 10}
            strokeCap={'rounded'}
            progress={0.5}
            borderRadius={50}
            unfilledColor='#CECECE'
            color="#8A46EA"
            borderWidth={0}
          />
          <FontAwesome name="heart" size={isTablet() ? 60 : 30} color={"red"} />
        </View>
      </View>
      <View className={`${isTablet() ? 'h-[45%]' : 'h-[35%]'} w-full items-center justify-center`}>
        <Text className={`${isTablet() ? 'text-4xl' : 'text-2xl'} mb-3 font-dBold text-center`}>what are you seeing here ?</Text>
        <Image
          className={`w-[95%]`}
          source={images.TestQuestion}
          resizeMode='contain'
        />
      </View>
      <View className={`${isTablet() ? 'h-[35%]' : 'h-[45%]'} w-full items-center justify-around`}>
        <Input
          labelText={"here is the text of the label"}
          containerStyles={`w-[90%]`}
          handleChangeText={(text) => setAnswer(text)}
          inputStyles={`border-[2px] border-regularGray`}
        />
        <PrimaryButton
          containerStyles={`w-[80%]`}
          text={'SUBMIT'}
          handlePress={() => setShowResult(!showResult)}
        />

        {/* result section for passed questions */}
        {(showResult && questionPassed) && (
          <View className={`bg-green-100 justify-between items-center h-full w-full absolute top-0 left-0 ${isTablet() ? 'p-5 pl-10' : 'p-3'}`}>
            <View className="w-full items-center flex-row justify-start">
              <View className={`bg-white ${isTablet() ? 'h-[80px]' : 'h-[40px]'} aspect-square rounded-full items-center justify-center mr-4`}>
                <FontAwesome name="check" size={isTablet() ? 50 : 25} color={"#16a341"} />
              </View>
              <Text className={`${isTablet() ? 'text-5xl' : 'text-2xl'} font-dBold text-green-600`}>Bien Joue</Text>
            </View>
            <View className="w-full">
              <Text className={`${isTablet() ? 'text-4xl' : 'text-xl'} text-green-600 font-dBold`}>Reponse:</Text>
              <Text className={`${isTablet() ? 'text-3xl' : 'text-[16px]'} font-dBold`}>this is the correct response to the answer</Text>
            </View>
            <View className="w-full">
              <Text className={`${isTablet() ? 'text-4xl' : 'text-xl'} text-green-600 font-dBold`}>Analyse:</Text>
              <Text className={`${isTablet() ? 'text-3xl' : 'text-[16px]'} font-dBold`}>this is the analysis to the answer</Text>
            </View>
            <PrimaryButton
              containerStyles={`w-[70%] ${!isTablet() ? 'h-[50px] rounded-2xl' : ''} border-green-600`}
              textStyles={`text-green-600 ${!isTablet() ? 'text-xl' : ''}`}
              text={"CONTINUE"}
              handlePress={() => setShowResult(!showResult)}

            />
          </View>
        )}

        {/* result section for failed questions */}
        {(showResult && !questionPassed) && (
          <View className={`bg-red-100 h-full w-full absolute top-0 left-0 ${isTablet() ? 'p-5 pl-10' : 'p-3'} items-center justify-around`}>
            <View className="w-full items-center flex-row justify-start">
              <View className={`bg-white ${isTablet() ? 'h-[80px]' : 'h-[40px]'} aspect-square rounded-full items-center justify-center mr-4`}>
                <FontAwesome name="times" size={isTablet() ? 50 : 25} color={"#dc2626"} />
              </View>
              <Text className={`${isTablet() ? 'text-5xl' : 'text-2xl'} font-dBold text-red-600`}>Incorrect</Text>
            </View>
            <View className="w-full">
              <Text className={`${isTablet() ? 'text-4xl' : 'text-xl'} text-red-600 font-dBold`}>Reponse:</Text>
              <Text className={`${isTablet() ? 'text-3xl' : 'text-[16px]'} font-dBold`}>this is the correct response to the answer</Text>
            </View>
            <View className="w-full">
              <Text className={`${isTablet() ? 'text-4xl' : 'text-xl'} text-red-600 font-dBold`}>Analyse:</Text>
              <Text className={`${isTablet() ? 'text-3xl' : 'text-[16px]'} font-dBold`}>this is the analysis to the answer</Text>
            </View>
            <PrimaryButton
              containerStyles={`w-[70%] ${!isTablet() ? 'h-[50px] rounded-2xl' : ''} border-red-600`}
              textStyles={`text-red-600 ${!isTablet() ? 'text-xl' : ''}`}
              text={"COMPRIS"}
              handlePress={() => setShowResult(!showResult)}
            />
          </View>
        )}

      </View>

    </SafeAreaView>
  )
}

export default OpenImageGuess