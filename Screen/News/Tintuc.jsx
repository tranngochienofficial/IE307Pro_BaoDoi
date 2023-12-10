import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from 'react-native';


const Tintuc = () => {
  return (
    <SafeAreaView style={myStyles.container}>
      <ImageBackground style={myStyles.topSection} source={require('./assets/header.png')}>
        <StatusBar
          // backgroundColor="#459ead"
          
        />
        <TouchableOpacity style={myStyles.imgList}>
          <Image style={myStyles.imgList}
            source={require('./assets/list.png')}
          />    
        </TouchableOpacity>
        <TouchableOpacity style={myStyles.imgSearch}>
          <Image style={myStyles.imgSearch}
            source={require('./assets/search.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={myStyles.imgAvatar}>
          <Image style={myStyles.imgAvatar}
            source={require('./assets/avatar.png')}
          />
        </TouchableOpacity>
      </ImageBackground>
      <ImageBackground style={myStyles.topSection} source={require('./assets/header_bot.png')}>
        <View>
          <Text>hhhh</Text>
        </View>
      </ImageBackground>
      <View style={myStyles.bottomSection}>
          <ScrollView></ScrollView>
      </View>
    </SafeAreaView>
  );
};

const myStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
    topSection:{
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center', 
    height: 34,
  },
  imgList:{
    height: 22, 
    width: 22, 
    position: 'absolute', 
    left: '5%',
    tintColor: 'white',
  },
  imgSearch:{
    height: 22, 
    width: 22, 
    position: 'absolute', 
    right: '16%',
    tintColor: 'white',
  },
  imgAvatar:{
    height: 27, 
    width: 27, 
    position: 'absolute',
    right: '5%',
    tintColor: 'white',
    borderRadius: 50,
    resizeMode: 'center',
  },
  bottomSection:{

  },
});

export default Tintuc;
