import React, { useState } from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import InputComponent from '../../components/InputComponent/InputComponent'
// import { useAuth } from '../../AuthContext'
import { Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
//Pham Van Hieu
//21520857
import { loginUser } from '../../services/userService'

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//   const { login, isLoggedIn } = useAuth(); 

  const handleEmailChange = (text) => {
    setEmail(text);
  }
  const handlePasswordChange = (text) => {
    setPassword(text);
  }

  const handleLogin = async () => {
  try {
    const data = { username: email, password };
    const result = await loginUser(data);
    if (result.access_token) {
      await AsyncStorage.setItem('access_token', result.access_token)
      navigation.navigate('Tabs');
      Alert.alert('Thành công');
      setEmail('');
      setPassword('');
    } else if (result.status === 'ERROR') {
      Alert.alert(result.message);
    }
  } catch (error) {
    Alert.alert('An error occurred while logging in');
    console.error(error);
  }
  };

  return (
    <View style={loginStyle.container}>
        <Image 
            source={{uri: 'data:image/png;base64,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'}}
            style={{height: 100, width: 100, borderRadius: 50}} 
        />
        <Text style={loginStyle.text}>Xin chào</Text>
        
        <InputComponent setData={handleEmailChange} text={email} holder='Email' imgUrl='https://t4.ftcdn.net/jpg/05/25/22/63/360_F_525226337_x7lLRcnU08vDLkijRwgcbaIs8zCfDktC.jpg'/>
        <InputComponent setData={handlePasswordChange} pass={true} holder='Mật khẩu' imgUrl='https://www.shutterstock.com/image-vector/lock-icon-vector-trendy-flat-260nw-1224673801.jpg'/>

        <TouchableOpacity style={{marginTop: 10, marginLeft: 150}}>
          <Text style={{color: '#ed5595'}}>Quên mật khẩu</Text>
        </TouchableOpacity> 

        <View style={{ width: 300, marginTop: 20,backgroundColor: '#c46f00', borderRadius: 10, height: 40, alignItems: 'center', justifyContent: 'center' }}>
          <ButtonComponent onPress={handleLogin}  name='Đăng nhập' width={300}/>
        </View>

        <Text style={{marginTop: 20, fontSize: 20, fontWeight: 'bold'}}>Hoặc đăng nhập với</Text>
        
        <View style={{display: 'flex', flexDirection: 'row', marginTop: 20}}>
          <ButtonComponent buttonStyle={[loginStyle.logoLogin,{marginRight: 20}]} imgUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png'/>
          <ButtonComponent buttonStyle={loginStyle.logoLogin} imgUrl='data:image/png;base64,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'/>
        </View>

        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
          <Text style={{fontSize: 15}}>Chưa có tài khoản   </Text>
          <ButtonComponent name='Đăng ký ngay!' buttonText={loginStyle.signUp} onPress={() => navigation.navigate('SignUp')}/>
        </View>
    </View>
  )
}
const loginStyle=StyleSheet.create({
    container: {
        display: 'flex', 
        alignItems: 'center', 
        top: 80
    },
    text: {
        fontSize: 30, 
        fontWeight: 'bold', 
        marginTop: 10,
        marginBottom: 20,
    },
    inputContainer: {
        height: 45,
        width: 300,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
    },
    buttonContainer: {
        width: 300,
    },
    logoLogin: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    signUp: {
        color: 'blue',
        fontWeight: 'bold',
    },
})  
export default Login