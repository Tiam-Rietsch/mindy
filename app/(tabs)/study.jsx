import { SafeAreaView, ScrollView, Text } from 'react-native'
import React from 'react'
import SkillCard from '../../components/SkillCard'
import images from '../../constants/images'
import TabHeader from '../../components/TabHeader'
import { useDimensionContext } from '../../context/DimensionProvider'


const study = () => {
  const { isTablet } = useDimensionContext()

  return (
    <SafeAreaView className="bg-lightGray">
      <TabHeader />
      <ScrollView 
        className={`h-full ${isTablet() ? 'p-10' : 'p-2'}`}
        contentContainerStyle={{
          justifyContent: 'start',
          alignItems: 'center',
          gap: 20
        }}
      >
        <SkillCard
          title="communication verbale"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium laboriosam mod"
          src={images.handShake}
        />
        <SkillCard
          title="communication non verbale"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium laboriosam modi"
          src={images.Hearing}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default study