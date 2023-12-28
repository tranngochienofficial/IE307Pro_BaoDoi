import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { decode as base64Decode } from 'base-64';
import { Alert } from 'react-native';
import { getDetailUser, loginUser, signUpUser } from './src/services/userService';

//Pham Van Hieu
//21520857
const AuthContext = createContext();
export const AuthProvider = ({ children, navigation }) => { // Pass navigation as a prop

  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add state for isLoggedIn
  const [userId, setUserId] = useState(null); // Add state for userId

  const checkLoginStatus = async () => {
    try {
      const access_token = await AsyncStorage.getItem('access_token');
      if (access_token) {
        setIsLoggedIn(true);
        setUserId(decodedToken(access_token));
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error("Error checking login status:", error);
    }
  };

 const decodedToken = (access_token) => {
    try {
      // Phân tích cú pháp JWT thành các phần: header, payload, signature
      const [header, payload, signature] = access_token.split('.');

      // Giải mã base64
      const decodedPayload = JSON.parse(base64Decode(payload));

      // Trích xuất thông tin ID từ payload của JWT
      const userId = decodedPayload.id;

      return userId;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  };

  const getUserInfo = async () => {
    const access_token = await AsyncStorage.getItem('access_token');
    if (access_token && userId) {
      try {
        const user = await getDetailUser(userId, access_token); // Corrected function call
        setUser(user.data);
      } catch (error) {
        console.error('error while getting user info', error);
      }
    }
  };

  useEffect(() => {
    checkLoginStatus(); // Call checkLoginStatus in useEffect
  }, [userId]); // Add userId as a dependency

  const logout = async () => {
    await AsyncStorage.removeItem('access_token');
    setIsLoggedIn(false); // Update isLoggedIn state
    setUser(null)
  };

 const login = async (data) => {
  try {
    const result = await loginUser(data);
    if (result.access_token) {
      await getUserInfo()
      await AsyncStorage.setItem('access_token', result.access_token)
      return true
    } else if (result.status === 'ERROR') {
      Alert.alert(result.message);
    }
  } catch (error) {
    Alert.alert('An error occurred while logging in');
    console.error(error);
  }
  };

  const signUp = async (data) => {
    try {
        const result = await signUpUser(data);
        console.log(result)
        if (result.data) {
            return true
        } else if (result.status === 'ERROR') {
            Alert.alert(result.message);
        }
    } catch (error) {
        Alert.alert('An error occurred while sign up');
        console.error(error);
    }
    };

  return (
    <AuthContext.Provider value={{ login, logout, user, checkLoginStatus, isLoggedIn, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
