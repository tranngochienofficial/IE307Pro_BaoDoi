import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import BottomTabs from './BottomTabs'
import Splash from './Splash'
import ChuyenMuc from './../Screen/News/ChuyenMuc';

const Stack = createStackNavigator()
const AuthStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
          <Stack.Screen name="Tabs" component={BottomTabs} options={{headerShown: false}}/> 
          <Stack.Screen name="ChuyenMuc" component={ChuyenMuc} options={{headerShown: true}}/> 
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthStack