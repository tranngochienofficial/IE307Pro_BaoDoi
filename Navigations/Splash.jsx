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
      <Image
         source={require('../assets/logo.png')}
         style={{width: '60%', resizeMode: 'contain', margin: 30}}
      />
         <ActivityIndicator
            animating={animating}
            color="#e60000" 
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
      backgroundColor: 'white',
   },
   activityIndicator: {
      alignItems: 'center',
      height: 80,
   },
});
