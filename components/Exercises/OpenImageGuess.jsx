import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import * as Progress from 'react-native-progress'
import { FontAwesome, FontAwesome5, FontAwesome6 } from '@expo/vector-icons'
import images from '../../constants/images'
import Input from '../Input'
import { router } from 'expo-router'
import PrimaryButton from '../Buttons/PrimaryButton'
import ReturnHeader from '../ReturnHeader'

const OpenImageGuess = () => {

  const [answer, setAnswer] = useState('')
  const [questionPassed, setQuestionPassed] = useState(false)
  const [showResult, setShowResult] = useState(true)

  return (
    <View className="h-full w-full bg-white">
      <View className="h-[20%] w-full">
        <ReturnHeader title={"This is the title of the exercise"}/>
        <View className="flex-1 items-center justify-around px-10 flex-row">
          <Progress.Bar
            width={750}
            height={25}
            strokeCap={'rounded'}
            progress={0.5}
            borderRadius={50}
            unfilledColor='#CECECE'
            color="#8A46EA"
            borderWidth={0}
          />
          <FontAwesome name="heart" size={60} color={"red"} />
        </View>
      </View>
      <View className="h-[45%] w-full items-center justify-center">
        <Text className="text-4xl mb-3 font-dBold text-center">what are you seeing here ?</Text>
        <Image
          className="h-[80%] w-[95%]"
          source={images.TestQuestion}
          resizeMode='contain'
        />
      </View>
      <View className="h-[35%] w-full items-center justify-around">
        <Input
          labelText={"here is the text of the label"}
          containerStyles={`w-[90%]`}
          handleChangeText={(text) => setAnswer(text)}
          inputStyles={`border-[2px] border-regularGray`}
        />
        <PrimaryButton
          containerStyles={`w-[80%]`}
          text={'CONTINUE'}
        />

        {/* result section for passed questions */}
        {(showResult && questionPassed) && (
          <View className="bg-green-100 h-full w-full absolute top-0 left-0 p-5 pl-10 items-center justify-around">
            <View className="w-full items-center flex-row justify-start">
              <View className="bg-white h-[80px] aspect-square rounded-full items-center justify-center mr-4">
                <FontAwesome name="check" size={50} color={"#16a341"} />
              </View>
              <Text className="text-5xl font-dBold text-green-600">Bien Joue</Text>
            </View>
            <View className="w-full">
              <Text className="text-4xl text-green-600 font-dBold">Reponse:</Text>
              <Text className="text-3xl font-dBold">this is the correct response to the answer</Text>
            </View>
            <View className="w-full">
              <Text className="text-4xl text-green-600 font-dBold">Analyse:</Text>
              <Text className="text-3xl font-dBold">this is the analysis to the answer</Text>
            </View>
            <PrimaryButton
              containerStyles={`w-[70%] border-green-600`}
              textStyles={`text-green-600`}
              text={"CONTINUE"}
            />
          </View>
        )}

        {/* result section for failed questions */}
        {(showResult && !questionPassed) && (
          <View className="bg-red-100 h-full w-full absolute top-0 left-0 p-5 pl-10 items-center justify-around">
            <View className="w-full items-center flex-row justify-start">
              <View className="bg-white h-[80px] aspect-square rounded-full items-center justify-center mr-4">
                <FontAwesome name="times" size={50} color={"#dc2626"} />
              </View>
              <Text className="text-5xl font-dBold text-red-600">Incorrect</Text>
            </View>
            <View className="w-full">
              <Text className="text-4xl text-red-600 font-dBold">Reponse:</Text>
              <Text className="text-3xl font-dBold">this is the correct response to the answer</Text>
            </View>
            <View className="w-full">
              <Text className="text-4xl text-red-600 font-dBold">Analyse:</Text>
              <Text className="text-3xl font-dBold">this is the analysis to the answer</Text>
            </View>
            <PrimaryButton
              containerStyles={`w-[70%] border-red-600`}
              textStyles={`text-red-600`}
              text={"COMPRIS"}
            />
          </View>
        )}

      </View>

    </View>
  )
}

export default OpenImageGuess