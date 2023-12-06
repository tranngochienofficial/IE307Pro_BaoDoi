import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import News from '../Screen/News/News'
import Videos from '../Screen/Videos/Videos'
import Trends from '../Screen/Trends/Trends'
import Extensions from '../Screen/Extensions/Extensions'

const Tab = createBottomTabNavigator()
const BottomTabs = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="News" component={News} />
        <Tab.Screen name="Videos" component={Videos} />
        <Tab.Screen name="Trends" component={Trends} />
        <Tab.Screen name="Extension" component={Extensions} />
    </Tab.Navigator>
  )
}

export default BottomTabs