import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import Nong from '../Screens/News/Nong';
import Tintuc from '../Screens/News/Tintuc';
import Videos from '../Screens/Videos/Videos';
import Trends from '../Screens/Trends/Trends';
import Extensions from '../Screens/Extensions/Extensions';

const BottomTab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <BottomTab.Navigator
      style={myStyles.container}
      initialRouteName="Tintuc"
      screenOptions={{
        tabBarActiveTintColor: '#047c74',
        //tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: {fontSize: 13,},
        //tabBarStyle: myStyles.tabBarStyle,
        headerShown: false,
        
      }}>
      <BottomTab.Screen
        name="Tintuc"
        component={Tintuc}
        options={{
          tabBarLabel: 'Tin tức',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/news.png')}
              style={{tintColor: color, width: 23, height: 23}}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Videos"
        component={Videos}
        options={{
          tabBarLabel: 'Video',
          //tabBarBadge: '',
          tabBarBadgeStyle: {backgroundColor: 'red', fontSize: 1},
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/video.png')}
              style={{tintColor: color, width: 25, height: 27}}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Trends"
        component={Trends}
        options={{
          tabBarLabel: 'Xu hướng',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/trend.png')}
              style={{tintColor: color, width: 27, height: 27}}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Extension"
        component={Extensions}
        options={{
          tabBarLabel: 'Tiện ích',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/extension.png')}
              style={{tintColor: color, width: 25, height: 25}}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const myStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ' #f2f2f2',
  },
})

export default BottomTabs;