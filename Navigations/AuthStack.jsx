import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import BottomTabs from './BottomTabs'
import Splash from './Splash'
import ChuyenMuc from './../Screen/News/ChuyenMuc';
import ArticleDetail from '../Screen/News/ArticleDetail'
import { ImageBackground } from 'react-native';

const Stack = createStackNavigator()
const AuthStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
          <Stack.Screen name="Tabs" component={BottomTabs} options={{headerShown: false}}/> 
<Stack.Screen 
  name="ChuyenMuc"
  component={ChuyenMuc} 
  options={({ route }) => ({
    title: 'Chuyên mục',
    headerShown: true,
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: 'transparent', // Đặt màu nền là transparent để hiển thị background image
    },
    headerTitleStyle: {
      fontSize: 25,
      color: 'white',
    },
    headerBackground: () => (
      <ImageBackground
        source={require('../Screen/News/assets/header.png')} // Đường dẫn của background image
        style={{ flex: 1, width: '100%' }}
      />
    ),
  })}
/>
            <Stack.Screen
              name="ArticleDetail"
              component={ArticleDetail}
              options={({ route }) => ({
                title: route.params && route.params.article
                  ? route.params.article.articleTitle
                  : 'Default Title', // Sử dụng articleTitle từ tham số route.params.article nếu có, ngược lại sử dụng Default Title
                headerShown: true,
                headerTitleAlign: 'center',
                headerStyle: {
                  backgroundColor: 'white',
                },
                headerTitleStyle: {
                  fontSize: 20,
                  color: 'black',
                },
              })}
            />

        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthStack