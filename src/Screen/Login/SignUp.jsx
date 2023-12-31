import React, { useState } from 'react'
import { Text, View, Image, StyleSheet, Alert } from 'react-native'
import InputComponent from './../../components/InputComponent/InputComponent';
import ButtonComponent from './../../components/ButtonComponent/ButtonComponent';
import { signUpUser } from '../../services/userService';
import { useAuth } from '../../../AuthContext';
//Pham Van Hieu
//21520857
const SignUp = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { signUp } = useAuth()

  const handleSignUp = async () => {
    const data = {username, password, re_password: confirmPassword, email}
    const result = await signUp(data)
    if (result === true) {
      Alert.alert('Thành công')
      navigation.navigate('Login')
    }
  }
  return (
  <View style={registerStyle.container}>
    <Image 
        source={require('../../assets/logo.png')}
        style={{height: 100, width: 100, borderRadius: 50}} 
    />
    <Text style={registerStyle.text}>Tạo tài khoản</Text>  
    <InputComponent 
      imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ20fJE-MhhNOJaAYsuTTeb2NcxP3ZII3OrJsq_W0qMhOKF0FeCdk-tFYA3wHxD6Cu3Jvs&usqp=CAU'
      holder='Nhập username'
      setData={(text)=>setUsername(text)}
    />
    <InputComponent 
      imgUrl='https://t4.ftcdn.net/jpg/05/25/22/63/360_F_525226337_x7lLRcnU08vDLkijRwgcbaIs8zCfDktC.jpg'
      holder='Nhập email'
      setData={(text)=>setEmail(text)}
    />
    <InputComponent 
      pass={true}
      imgUrl='https://www.shutterstock.com/image-vector/lock-icon-vector-trendy-flat-260nw-1224673801.jpg'
      holder='Nhập mật khẩu'
      setData={(text)=>setPassword(text)}
    />
    <InputComponent
      pass={true}
      imgUrl='https://www.shutterstock.com/image-vector/lock-icon-vector-trendy-flat-260nw-1224673801.jpg'
      holder='Nhập lại mật khẩu'
      setData={(text)=>setConfirmPassword(text)}
    />
    <View style={{ width: 300, marginTop: 20,backgroundColor: '#c46f00', borderRadius: 10, height: 40, alignItems: 'center', justifyContent: 'center' }}>
      <ButtonComponent onPress={handleSignUp} name='Tạo tài khoản' width={300}/>
    </View>  
    <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: 20}}>
      <Text style={{fontSize: 15}}>Đã có tài khoản  </Text>
      <ButtonComponent name='Đăng nhập ngay!' buttonText={registerStyle.signUp} onPress={() => navigation.navigate('Login')}/>
    </View>
  </View>
  )
}

const registerStyle=StyleSheet.create({
    text: {
        fontSize: 30, 
        fontWeight: 'bold', 
        marginTop: 10,
        marginBottom: 20,
    },
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
export default SignUp