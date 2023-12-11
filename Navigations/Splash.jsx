import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet, Image, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({ navigation }) => {
   //State for ActivityIndicator animation
   const [animating, setAnimating] = useState(true);

   useEffect(() => {
      setTimeout(() => {
         setAnimating(false);
         //Check if user_id is set or not
         //If not then send for Authentication
         //else send to Home Screen
         // AsyncStorage.getItem('user_id').then(value =>
         //    navigation.replace(value === null ? 'Auth' : 'DrawerNavigationRoutes'),
         // );
         navigation.navigate('Tabs');
      }, 5000);
   }, []);

   return (
      <View style={styles.container}>
         <Text>Báo Đời</Text>
         <ActivityIndicator
            animating={animating}
            color="#FFFFFF" 
            size="large"
            style={styles.activityIndicator}
         />
      </View>
   );
};

export default SplashScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#307ecc',
   },
   activityIndicator: {
      alignItems: 'center',
      height: 80,
   },
});
