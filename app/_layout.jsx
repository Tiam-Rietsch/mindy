import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'

SplashScreen.preventAutoHideAsync()

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    'D-DIN-Bold': require('../assets/fonts/D-DIN-Bold.otf'),
    'D-DIN-Italic': require('../assets/fonts/D-DIN-Italic.otf'),
    'D-DIN': require('../assets/fonts/D-DIN.otf') 
  })

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded, error])

  if (!fontsLoaded && !error) {
    return null
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
      <Stack.Screen name="index" options={{ headerShown: false }}/>
    </Stack>
  )
}

export default RootLayout