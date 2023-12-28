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
        source={{uri: 'data:image/png;base64,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'}}
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
      holder='Nhập password'
      setData={(text)=>setPassword(text)}
    />
    <InputComponent
      pass={true}
      imgUrl='https://www.shutterstock.com/image-vector/lock-icon-vector-trendy-flat-260nw-1224673801.jpg'
      holder='Nhập lại password'
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