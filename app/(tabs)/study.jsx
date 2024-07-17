import { View, Text } from 'react-native'
import React from 'react'
import SkillCard from '../../components/SkillCard'

const study = () => {
  return (
    <View className="gap-5 justify-start items-center h-full p-10" style={{ gap: 20}}>
      <SkillCard
        title="communication verbale"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium laboriosam mod"
      />
      <SkillCard
        title="communication non verbale"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium laboriosam modi"
      />
    </View>
  )
}

export default study