import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import * as Progress from 'react-native-progress'
import { FontAwesome6, FontAwesome } from '@expo/vector-icons'
import PrimaryButton from './PrimaryButton'
import { DetailContext, useDetailPopupContext } from '../../context/DetailPopupProvider'
import { router } from 'expo-router'
import { useDimensionContext } from '../../context/DimensionProvider'

const LevelButton = ({ containerStyles, shift, lesson, current }) => {

  const { isTablet } = useDimensionContext()
  const { active, passed, progress, rating } = lesson
  const [yOffset, setYOffset] = useState(0)
  const [dimenssions, setDimensions] = useState({
    height: 0,
    width: 0
  })
  const {focusedDetailId, setFocusedDetailId} = useDetailPopupContext()

  const canShowDetail = () => focusedDetailId == lesson.lessonId
  const canShowStartHere = () => current && focusedDetailId == 0

  const showDetail = (event) => {
    setFocusedDetailId(focusedDetailId == 0 ? lesson.lessonId : 0)
  }

  const startLesson = () => {
    router.push('/lesson')
  }

  return (
    <View
      className={`relative items-center justify-center ml-5 ${isTablet() ? 'my-5' : 'my-0'} z-0 w-full h-fit`}
      onLayout={(event) => {
        setDimensions({ ...dimenssions, height: event.nativeEvent.layout.height, width: event.nativeEvent.layout.width })
      }}
    >
      {current && (
        <Progress.Circle
          animated={true}
          endAngle={0}
          unfilledColor='#CECECE'
          fill="white"
          progress={progress}
          thickness={15}
          borderWidth={0}
          size={isTablet() ? 220 : 160}
          color="#8A46EA"
          strokeCap='round'
          style={{
            position: 'absolute',
            top: 0,
            transform: [
              {
                translateX: shift - 1 ?? 0
              },
              {
                translateY: yOffset
              }
            ],

          }}

        />

      )}
      <TouchableOpacity
        activeOpacity={1}

        style={{
          top: 20,
          transform: [
            {
              translateX: shift ?? 0
            },
            {
              translateY: yOffset,
            }
          ],
        }}

        className={current || passed ? (
          `aspect-square bg-thickViolet rounded-full ${isTablet() ? 'border-[3px]border-b-[13px]' : 'border-[1px] border-b-[10px]'} border-regularViolet flex justify-center items-center ${isTablet() ? 'active:border-[2px] active: border-b-[3px]' : 'active:border-[1px] active:border-b-[1px]'} active:translate-y-[15px] ${containerStyles}`
        ) : (
          `aspect-square bg-regularGray rounded-full border-[3px] border-b-[13px] border-thickGray flex justify-center items-center active:border-b-[3px] active:border-[2px] active:translate-y-[15px] ${containerStyles}`
        )}
        onPressIn={() => setYOffset(10)}
        onPressOut={() => setYOffset(-10)}
        onPress={(event) => showDetail(event)}
      >
        {canShowStartHere() && (
          <View className={`absolute ${isTablet() ? 'w-[180px]' : 'w-[120px]'} top-[-60px] bg-white p-5 animate-bounce tracking-wide z-10 rounded-2xl border-regularViolet border-[3px]`}>
            <Text className={`${isTablet() ? 'text-2xl' : ''} font-dBold text-thickViolet`}>START HERE</Text>
            <View className={`absolute top-full left-0  border-x-transparent border-t-[15px] border-x-[15px] w-0 h-0 transform ${isTablet() ? 'translate-x-[70px]' : 'translate-x-[45px]'} translate-y-[40px] border-t-white`}>

            </View>
          </View>
        )}
        {passed ? (
          <FontAwesome6
            name="check"
            size={isTablet() ? 70 : 50}
            color={current || passed ? 'white' : '#777777'}
          />
        ) : (
          <FontAwesome6
            name="star"
            size={current ? (isTablet() ? 90 : 70) : (isTablet() ? 70 : 50)}
            color={current || passed ? 'white' : '#777777'}
          />
        )}

        {passed && (
          <View
            style={{
              position: 'absolute',
              bottom: -70,
              transform: [
                { translateY: isTablet() ? yOffset : yOffset + 10 },
              ]
            }}
            className="w-full h-[80px] flex-row justify-center"
          >
            {rating < 1 ? (
              <FontAwesome6
                name="star"
                size={isTablet() ? 50 : 25}
                color={'#777777'}
              />
            ) : (
              <FontAwesome
                name="star"
                size={isTablet() ? 50 : 25}
                color={'#e9d30e'}
              />
            )}
            {rating < 2 ? (
              <FontAwesome6
                name="star"
                size={isTablet() ? 80 : 45}
                color={'#777777'}
              />
            ) : (
              <FontAwesome
                name="star"
                size={isTablet() ? 80 : 45}
                color={'#e9d30e'}
              />
            )}
            {rating < 3 ? (
              <FontAwesome6
                name="star"
                size={isTablet() ? 50 : 25}
                color={'#777777'}
              />
            ) : (
              <FontAwesome
                name="star"
                size={isTablet() ? 50 : 25}
                color={'#e9d30e'}
              />
            )}
          </View>
        )}

      </TouchableOpacity>

      {canShowDetail() && (
        <View
          style={{
            // display: 'none',
            position: 'relative',
            transform: [
              { translateX: shift ?? 0 },
            ]
          }}
          className={`z-50 w-[60%] ${isTablet() ? 'h-[200px]' : 'h-[150px]'} bg-lightGray border-[2px] border-thickViolet p-5 flex-col items-center justify-between rounded-2xl z-50`}
        >
          <View className="absolute top-0 transform translate-y-[-60px] h-0 w-0 border-x-transparent border-t-transparent border-b-lightGray border-[30px]">

          </View>
          <Text className={`font-dBold ${isTablet() ? 'text-3xl' : 'text-[24px]'} text-thickViolet`}>ddddd</Text>
          <Text className={`font-dBold ${isTablet() ? 'text-2xl' : 'text-[18px]'} text-thickViolet`}>lesson d of 5</Text>
          <PrimaryButton
            text="START"
            handlePress={startLesson}
            containerStyles={`${isTablet() ? '' : 'h-[40px] rounded-xl'}`}
            textStyles={`${isTablet() ? '' : 'text-[18px]'}`}
          />
        </View>
      )}
    </View>

  )
}

export default LevelButton