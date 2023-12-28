import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  ImageBackground,
  SafeAreaView,
  Text,
} from 'react-native';
import Lottery from '../../components/ExtensionComponent/Lottery';
import {ScrollView} from 'react-native-gesture-handler';
import PriceOfGold from '../../components/ExtensionComponent/PriceOfGold';
import Calendar from '../../components/ExtensionComponent/Calendar';
import Weather from '../../components/ExtensionComponent/Weather';
import ForeignCurrency from '../../components/ExtensionComponent/ForeignCurrency';
import XoSo from '../../components/ExtensionComponent/XoSo';

const Extensions = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.IBTop}
        source={require('../../assets/header.png')}>
        <View style={styles.topSection}>
          <StatusBar translucent={true} backgroundColor="transparent" />
          <Text style={styles.txtHeader}>Tiện ích</Text>
          {/* <Image></Image> */}
        </View>
      </ImageBackground>
      <ScrollView style={styles.botSection}>
        <XoSo title={'XỔ SỐ'} image={require('../../assets/xoso.png')} />
        <Calendar
          title={'LỊCH VIỆT'}
          image={require('../../assets/header.png')}
        />
        <Weather
          title={'THỜI TIẾT'}
          image={require('../../assets/sky.gif')}
        />
        <PriceOfGold 
          title={'GIÁ VÀNG'} 
          time={'time | date'}
        />
        <ForeignCurrency 
          title={'NGOẠI TỆ'}
          source={"VIETCOMBANK"}
          time={'time | date'} 
        />
        <Lottery
          title={'VIETLOTTE'}
          image={require('../../assets/lotte.png')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  IBTop: {
    //height: '37%',
    flexDirection: 'column',
    resizeMode: 'center',
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 34,
    marginTop: 35,
    paddingHorizontal: 10,
    //backgroundColor: 'red',
  },
  txtHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white'
  },
  botSection: {
    padding: 15,
    //paddingBottom: 30,
    //justifyContent: 'center',
    //alignItems: 'center',
  },
});

export default Extensions;
