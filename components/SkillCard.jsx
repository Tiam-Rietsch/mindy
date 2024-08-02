import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import PrimaryButton from './Buttons/PrimaryButton'
import { router } from 'expo-router'
import { useGlobalContext } from '../context/GlobalProvider'
import { getChapters, getLoessons } from '../app/api/fetch'



const SkillCard = ({ skill, src }) => {
  const { id, name, description } = skill
  const { isTablet, setUnits, setCurSkill } = useGlobalContext()
  const [loadingSkills, setLoadingSkills] = useState(false)

  const formatTitle = (title) => {
    return `${title ?? 'NO TITLE'}`.toUpperCase()
  }


  const loadUnits = async () => {
    try {
      console.log(id)
      let loadedUnits = await getChapters(id)
      if (!loadedUnits) throw Error("units could not be loaded")
  
      let newUnits = await Promise.all([...loadedUnits].map(async(chapter, index) => { 
        if (index == 0) {
          let lessons = await getLoessons(chapter.id)
          return { ...chapter,
            unitId: index + 1,
            isCurrent: true,
            lessons: [...lessons].map((lesson, index) => ({...lesson, lessonId: index+1}))
          }
        } else {
          return { ...chapter, 
            unitId: index + 1,
            isCurrent: false,
            lessons: []
          }
        }
      }))

      setUnits(newUnits)
    } catch(error) {
      console.error(error)
    }

  }

  const goToSkill = async () => {
    try {
      setLoadingSkills(true)
      setCurSkill(skill)
      await loadUnits()
      router.push('/chaptersMap')
    } catch (error) {
      console.error(error)
    } finally {
      setLoadingSkills(false)
    }
  }


  return (
    <View className={`w-full ${!isTablet ? 'h-[300px]' : 'h-[400px]'} rounded-2xl bg-thickViolet p-10 mb-[30px]`}>
      <View className={`w-full h-[20%] items-start justify-center`}>
        <Text className={` ${!isTablet ? 'text-[22px]' : 'text-[40px]'} font-dBold text-white`}>{formatTitle(name)}</Text>
      </View>
      <View className={`w-full h-[80%] flex flex-row justify-between items-start`}>
        <View className="w-[60%] justify-around h-full">
          <View className={`w-full h-fit flex-row`}>
            <Text className={`${!isTablet ? 'text-[15px] leading-5' : 'text-3xl'} font-dRegular text-white w-full`}>
              {description ?? 'no description'}
            </Text>
          </View>
          <View className={`h-[20%] w-full`}>
            <PrimaryButton
              containerStyles={!isTablet ? 'rounded-xl border-b-[6px] active:border-b-[2px] h-[50px]' : ''} 
              textStyles={!isTablet ? 'text-[20px]' : ''}
              text={'CONTINUE'}
              loading={loadingSkills}
              handlePress={goToSkill} />
          </View>

        </View>
        <View className="w-[30%] h-full">
          <Image 
            source={src}
            className="h-full w-full"
            resizeMode='contain'          
          />
        </View>
      </View>

    </View>
  )
}

export default SkillCard