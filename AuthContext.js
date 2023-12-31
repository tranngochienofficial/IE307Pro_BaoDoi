import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { decode as base64Decode } from 'base-64';
import { Alert } from 'react-native';
import { getDetailUser, loginUser, signUpUser, updateUser } from './src/services/userService';

//Pham Van Hieu
//21520857
const AuthContext = createContext();
export const AuthProvider = ({ children, navigation }) => { // Pass navigation as a prop

  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add state for isLoggedIn  
  const [recentlyClickedArticles, setRecentlyClickedArticles] = useState([]);

  const checkLoginStatus = async () => {
    const access_token = await AsyncStorage.getItem('access_token');
    const userId = await AsyncStorage.getItem('userId');
    try {
      if (access_token && userId) {
        setIsLoggedIn(true);
        await getUserInfo();

      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error("Error checking login status:", error);
    }
  };

  useEffect(() => {
    checkLoginStatus()
  },[isLoggedIn])

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
    const token = await AsyncStorage.getItem('access_token')
    const userId = await AsyncStorage.getItem('userId')
    try {
      const user = await getDetailUser(userId, token); // Corrected function call
      setUser(user.data);
    } catch (error) {
      console.error('error while getting user info', error);
    }
  };

  const logout = async () => {
    setUser(null)
    setIsLoggedIn(false); // Update isLoggedIn state
    await AsyncStorage.removeItem('access_token');
    await AsyncStorage.removeItem('userId');

  };
  
 const login = async (data) => {
  try {
    const result = await loginUser(data);
    if (result.access_token) {
      await AsyncStorage.setItem('access_token', result.access_token)
      await AsyncStorage.setItem('userId', decodedToken(result.access_token))
      setIsLoggedIn(true)
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
        if (result.data) {
            return true
        } else if (result.status === 'ERR') {
            Alert.alert(result.message);
        }
    } catch (error) {
        Alert.alert('An error occurred while sign up');
        console.error(error);
    }
    };



    const updateRecentlyReadArticle = async () => {
      if (user) {
        const updateData = { 
          ...user,
          recently_read_articles: [...user.recently_read_articles, ...recentlyClickedArticles]
        }; 
      try {
          const res = await updateUser(user._id, updateData)
        } catch(error) {
          console.error(error)
        }
      }
  }

  useEffect(()=> {
    updateRecentlyReadArticle()
  }, [recentlyClickedArticles])

  return (
    <AuthContext.Provider value={{ login, logout, user, checkLoginStatus, isLoggedIn, signUp, setRecentlyClickedArticles, recentlyClickedArticles }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
