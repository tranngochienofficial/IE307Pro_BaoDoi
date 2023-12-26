import React from 'react'
import { Image, View, StyleSheet, TextInput } from 'react-native'
//Pham Van Hieu
//21520857
const InputComponent = ({imgUrl, holder,pass,text, setData}) => {
  return (
     <View style={style.inputContainer}>
          <Image 
            source={{uri: imgUrl}} 
            style={{ height: '80%' ,width: 35, marginLeft: 5}}/>
          <TextInput
            placeholder={holder}
            secureTextEntry={pass}
            value={text}
            onChangeText={(text) => setData(text)}
            style={{width: '80%'}}
          />
    </View>
  )
}

export default InputComponent

const style=StyleSheet.create({
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
})