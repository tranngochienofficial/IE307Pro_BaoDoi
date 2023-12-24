import React, { useState } from 'react';
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
  FlatList,
} from 'react-native';

import { DATA } from '../../datas/datas'; 
import ArticleList from './ArticleList';

const Item = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const Tintuc = ({ navigation }) => {
  const ChuyenMucEvents = () => {
    navigation.navigate('ChuyenMuc');
  };

  const [category, setCategory] = useState('Nóng')
  const handleItemPress = (item) => {
    setCategory(item.title)
  };


  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.IBTop}
        source={require('./assets/header.png')}>
        <View style={styles.topSection}>
          <StatusBar translucent={true} backgroundColor="transparent" />

          <TouchableOpacity style={styles.imgList} onPress={ChuyenMucEvents}>
            <Image
              style={styles.imgList}
              source={require('./assets/list.png')}
            />
          </TouchableOpacity> 

          <TouchableOpacity style={styles.imgSearch}>
            <Image
              style={styles.imgSearch}
              source={require('./assets/search.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.imgAvatar}>
            <Image
              style={styles.imgAvatar}
              source={require('./assets/avatar.png')}
            />
          </TouchableOpacity>

          <View style={styles.viewFlatList}>
           <FlatList
              horizontal={true}
              data={DATA}
              renderItem={({ item }) => (
                <Item
                  title={item.title}
                  onPress={() => handleItemPress(item)}
                />
              )}
              keyExtractor={(item) => item.id}
            />  
          </View>
        </View>

        <View style={styles.topSection2}>
          <Text style={styles.txtWeather}>Weather | Time</Text>
        </View>

      <View>
        <ArticleList category={category} />
      </View>


      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  IBTop: {
    height: '37%',
    flexDirection: 'column',
    resizeMode: 'center',
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 34,
    marginTop: 35,
  },
  topSection2: {
    left: '5%',
  },
  txtWeather: {
    fontSize: 16,
    color: 'white',
  },
  imgList: {
    height: 22,
    width: 22,
    position: 'absolute',
    left: '5%',
    tintColor: 'white',
  },
  imgSearch: {
    height: 22,
    width: 22,
    position: 'absolute',
    right: '16%',
    tintColor: 'white',
  },
  imgAvatar: {
    height: 27,
    width: 27,
    position: 'absolute',
    right: '5%',
    tintColor: 'white',
    borderRadius: 50,
    resizeMode: 'center',
  },
  viewFlatList: {
    width: '60%',
    right: '70%',
  },
  item: {
    marginHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 17.5,
    color: 'white',
  },
});

export default Tintuc;
