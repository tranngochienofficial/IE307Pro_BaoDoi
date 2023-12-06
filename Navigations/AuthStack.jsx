import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import BottomTabs from './BottomTabs'

const Stack = createStackNavigator()
const AuthStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Tabs" component={BottomTabs} options={{headerShown: false}}/>
            
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthStack