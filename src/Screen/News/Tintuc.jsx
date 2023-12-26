import React, { useEffect, useState } from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';

const Item = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const Tintuc = ({ navigation, route }) => {
  const ChuyenMucEvents = () => {
    navigation.navigate('ChuyenMuc');
  };

  let getCategory = ''
  if (route.params) {
    getCategory = route.params.getCategory;
  }

  const {articleMiniStyleNew} = route.params || ''
  const [category, setCategory] = useState(getCategory ? getCategory : 'Nóng')
  useEffect(() => {
    if (getCategory) {
      setCategory(getCategory);
    }
  }, [getCategory]);


  const handleItemPress = (item) => {
    setCategory(item.title)
  };

  const [articleMiniStyle, setArticleMiniStyle] = useState('small');

  useEffect(() => {
    const loadArticleMiniStyle = async () => {
      try {
        const storedStyle = await AsyncStorage.getItem('articleMiniStyle');
        if (storedStyle === null) {
          await AsyncStorage.setItem('articleMiniStyle', articleMiniStyle);
        } else {
          setArticleMiniStyle(storedStyle);
        }
      } catch (error) {
        console.error('Error loading articleMiniStyle:', error);
      }
    };

    loadArticleMiniStyle();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  const navigateToUser = () => {
    navigation.navigate('User')
  }
  return (
    <View style={styles.container}>
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

          <TouchableOpacity style={styles.imgAvatar} onPress={navigateToUser}>
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

      </ImageBackground>
      <ScrollView style={{marginBottom: 100}}>
        <ArticleList category={category} articleMiniStyle={articleMiniStyleNew ? articleMiniStyleNew : articleMiniStyle}/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    display: 'flex'
  },
  IBTop: {
    flexDirection: 'column',
    resizeMode: 'center',
    paddingBottom: 15
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
