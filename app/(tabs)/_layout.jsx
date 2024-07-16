import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBrain } from '@fortawesome/free-solid-svg-icons'
import { FontAwesome5, FontAwesome6  } from '@expo/vector-icons'

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#777777",
        tabBarStyle: {
          height: 100
        },
        tabBarIconStyle: {
          width: 100,
        },
        tabBarActiveBackgroundColor: "#8A46EA",
      }}
    >
      <Tabs.Screen 
        name="study"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="brain" size={50} color={color}/>
        }}
      />
      <Tabs.Screen 
        name="games"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="gamepad" size={50} color={color}/>
        }}
      />
      <Tabs.Screen 
        name="chat"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome6 name="message" size={50} color={color}/>
        }}
      />
      <Tabs.Screen 
        name="calendar"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome6 name="calendar-days" size={50} color={color}/>
        }}
      />
      <Tabs.Screen 
        name="stats"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome6 name="chart-line" size={50} color={color}/>
        }}
      />
      <Tabs.Screen 
        name="settings"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="cog" size={50} color={color}/>
        }}
      />
    </Tabs>
  )
}

export default TabLayout