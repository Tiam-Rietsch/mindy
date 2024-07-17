import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const SkillLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="chaptersMap" options={{ headerShown: false}} />
      <Stack.Screen name="lesson" options={{ headerShown: false}} />
    </Stack>
  )
}

export default SkillLayout