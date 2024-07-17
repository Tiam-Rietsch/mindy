import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Progress from 'react-native-progress'
import { FontAwesome6, FontAwesome } from '@expo/vector-icons'

const LevelButton = ({ text, containerStyles, textStyles, shift, active, passed, progress, rating, handleActive }) => {
  const [yOffset, setYOffset] = useState(0)
  const [yCoord, setYCoord] = useState(0)

  return (
    <View className="relative items-center justify-center m-5 z-0"
      onLayout={(event) => {
        setYCoord(event.nativeEvent.layout.y)
      }}
    >
      {active && (
        <Progress.Circle
          animated={true}
          endAngle={0}
          unfilledColor='#CECECE'
          fill="white"
          progress={progress}
          thickness={15}
          borderWidth={0}
          size={225}
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
          zIndex: 5
        }}

        className={active || passed ? (
          `aspect-square bg-thickViolet rounded-full border-[3px] border-b-[13px] border-regularViolet flex justify-center items-center active:border-b-[3px] active:border-[2px] active:translate-y-[15px] ${containerStyles}`
        ) : (
          `aspect-square bg-regularGray rounded-full border-[3px] border-b-[13px] border-thickGray flex justify-center items-center active:border-b-[3px] active:border-[2px] active:translate-y-[15px] ${containerStyles}`
        )}
        onPressIn={() => setYOffset(10)}
        onPressOut={() => setYOffset(-10)}
      >
        {active && (
          <View className="absolute top-[-60px] bg-white p-5 animate-bounce tracking-wide z-10 rounded-2xl border-regularViolet border-[3px]">
            <Text className="text-2xl font-dBold text-thickViolet">START HERE</Text>
            <View className=" absolute top-full left-0  border-x-transparent border-t-[15px] border-x-[15px] w-0 h-0 transform translate-y-[40px] translate-x-[70px] border-t-white">

            </View>
          </View>
        )}
        {passed ? (
          <FontAwesome
            name="star"
            size={active ? 90 : 70}
            color={active || passed ? 'white' : '#777777'}
          />
        ) : (
          <FontAwesome6
            name="star"
            size={active ? 90 : 70}
            color={active || passed ? 'white' : '#777777'}
          />
        )}


      </TouchableOpacity>
      {passed && (
        <View
          style={{
            position: 'absolute',
            bottom: -40,
            transform: [
              { translateY: yOffset },
              { translateX: shift }
            ]
          }}
          className="w-full h-[80px] flex-row justify-center"
        >
          {rating < 1 ? (
            <FontAwesome6
              name="star"
              size={50}
              color={'#777777'}
            />
          ) : (
            <FontAwesome
              name="star"
              size={50}
              color={'#e9d30e'}
            />
          )}
          {rating < 2 ? (
            <FontAwesome6
              name="star"
              size={80}
              color={'#777777'}
            />
          ) : (
            <FontAwesome
              name="star"
              size={80}
              color={'#e9d30e'}
            />
          )}
          {rating < 3 ? (
            <FontAwesome6
              name="star"
              size={50}
              color={'#777777'}
            />
          ) : (
            <FontAwesome
              name="star"
              size={50}
              color={'#e9d30e'}
            />
          )}
        </View>
      )}

      <View
        style={{
          position: 'absolute',
          top: '90%',
          transform: [
            { translateY: yOffset },
            { translateX: shift }
          ],
          zIndex: 200
        }} 
        className="absolute h-[100px] aspect-square bg-white border-thickViolet border-[2px] rounded-2xl z-50"
      >

      </View>

    </View>

  )
}

export default LevelButton