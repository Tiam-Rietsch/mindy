import { SafeAreaView, ScrollView, Text } from 'react-native'
import React from 'react'
import SkillCard from '../../components/SkillCard'
import HandShake from '../../assets/images/handShake.svg'
import Hearing from '../../assets/images/Hearing.svg'


const study = () => {
  return (
    <SafeAreaView >
      <ScrollView 
        className="h-full p-10"
        contentContainerStyle={{
          justifyContent: 'start',
          alignItems: 'center',
          gap: 20
        }}
      >
        <SkillCard
          title="communication verbale"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium laboriosam mod"
          SVG={() => <HandShake size={200}/>}
        />
        <SkillCard
          title="communication non verbale"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium laboriosam modi"
          SVG={() => <Hearing height={'100%'} width={'100%'}/>}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default study