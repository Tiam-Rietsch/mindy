import { SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import SkillCard from '../../components/SkillCard'
import images from '../../constants/images'
import TabHeader from '../../components/TabHeader'
import { useGlobalContext } from '../../context/GlobalProvider'
import { getCompetences, getChapters, getLoessons } from '../api/fetch'
import { router } from 'expo-router'
const skills = [
  {
    skillId: 1,
    name: "VERBAL COMMUNICATION",
    description: "this is the description of the skill"
  },
  {
    skillId: 2,
    name: "VERBAL COMMUNICATION",
    description: "this is the description of the skill"
  },
  {
    skillId: 3,
    name: "VERBAL COMMUNICATION",
    description: "this is the description of the skill"
  },
  {
    skillId:4,
    name: "VERBAL COMMUNICATION",
    description: "this is the description of the skill"
  },
]

const study = () => {
  const { isTablet, setSkills,  selectedSkil, setSelectedSkill, units, setUnits } = useGlobalContext()
  const [isLoading, setIsLoading] = useState(false)

  const loadUnits = async (id) => {
    try {
      setIsLoading(true)
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
    } finally {
      setIsLoading(false)
    }

  }

  const loadSkills = async () => {
    try {
      let userSkills = await getCompetences()
      if (!userSkills) throw Error("user skills could not be found")

      // add skill Id
      setSkills([...userSkills].map((skill, index) => ({ ...skill, skillId: index })))
    } catch (error) {
      console.error(error)
    }
  }

  // useEffect(() => {
  //   loadSkills()
  // })

  const goToSkill = async (skill) => {
    // setSelectedSkill(skill)
    // await loadUnits(skill.id)
    router.push('/chaptersMap')
  }

  

  return (
    <SafeAreaView className="bg-lightGray h-full">
      <TabHeader />
      <ScrollView
        className={`h-full ${isTablet ? 'p-10' : 'p-2 pb-[300px]'}`}
        contentContainerStyle={{
          justifyContent: 'start',
          alignItems: 'center',
          flexGrow: 1,
          paddingBottom: 70
        }}
      >
        {[...skills].map((skill) => (
          <SkillCard
            key={skill.skillId}
            title={skill.name}
            description={skill.description}
            src={images.handShake}
            handleContinue={() => goToSkill(skill)}
            loading={isLoading}
          />
        ))}

        {/* <SkillCard
          title="communication non verbale"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium laboriosam modi"
          src={images.Hearing}
        /> */}
      </ScrollView>
    </SafeAreaView>
  )
}

export default study