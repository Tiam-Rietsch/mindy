import { SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect  } from 'react'
import SkillCard from '../../components/SkillCard'
import images from '../../constants/images'
import TabHeader from '../../components/TabHeader'
import { useGlobalContext } from '../../context/GlobalProvider'
import { getCompetences } from '../api/fetch'

const skillsList = [
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
  const { isTablet, setSkills, skills, selectedSkil, setSelectedSkill, units, setUnits } = useGlobalContext()

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

  useEffect(() => {
    loadSkills()
  }, [])
  

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
            skill={skill}
            src={images.handShake}
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