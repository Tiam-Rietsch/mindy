import { View, Text } from 'react-native'
import React from 'react'
import { faBacteria } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBrain } from '@fortawesome/free-solid-svg-icons'
import SkillCard from '../../components/SkillCard'

const study = () => {
  return (
    <View className="justify-start items-center h-full p-10">
      <SkillCard />
    </View>
  )
}

export default study