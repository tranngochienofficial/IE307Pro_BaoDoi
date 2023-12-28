import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import BottomTabs from './BottomTabs'
import Splash from './Splash'
import Categories from '../Screen/News/Categories';
import ArticleDetail from '../Screen/News/ArticleDetail'
import { ImageBackground } from 'react-native';
import User from '../Screen/User/User'
import Login from '../Screen/Login/Login'
import SignUp from '../Screen/Login/SignUp'

const Stack = createStackNavigator()
const AuthStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
          <Stack.Screen name="Tabs" component={BottomTabs} options={{headerShown: false}}/> 
          <Stack.Screen 
            name="Categories"
            component={Categories} 
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
                  ? route.params.article.title
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
            <Stack.Screen
              name="User"
              component={User}
              options={{ 
                headerTitle: 'Cá nhân', 
                headerShown: true ,
                headerTitleStyle: {
                  fontSize: 25
                },
                headerTitleAlign: 'center' // Đưa title chính giữa
              }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ 
                headerTitle: 'Đăng nhập', 
                headerShown: true ,
                headerTitleStyle: {
                  fontSize: 25
                },
                headerTitleAlign: 'center' // Đưa title chính giữa
              }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ 
                headerTitle: 'Đăng ký', 
                headerShown: true ,
                headerTitleStyle: {
                  fontSize: 25
                },
                headerTitleAlign: 'center' // Đưa title chính giữa
              }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthStack