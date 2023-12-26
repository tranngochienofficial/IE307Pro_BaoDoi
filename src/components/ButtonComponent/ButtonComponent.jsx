import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
//Pham Van Hieu
//21520857
const ButtonComponent = ({name, onPress, imgUrl, buttonStyle, width, buttonText}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={{width: width}}
      >
        <Image 
        source={{uri: imgUrl}}
        style={buttonStyle}
        />  
        <Text style={[{ color: 'white', textAlign: 'center', fontSize: 20}, buttonText]}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonComponent;
