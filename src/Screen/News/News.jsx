import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

import ArticleList from './ArticleList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import  Header  from './Header'
import { ScrollView } from 'react-native-gesture-handler';

const News = ({ route }) => {

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

//press category
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

  return (
    <View style={styles.container}>
      <Header category={category} handleItemPress={handleItemPress} />
      <ScrollView style={{marginBottom: 100}}>
        <ArticleList category={category} articleMiniStyle={articleMiniStyleNew ? articleMiniStyleNew : articleMiniStyle}/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    display: 'flex',
  },
  IBTop: {
    flexDirection: 'column',
    resizeMode: 'center',
    paddingBottom: 15,
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
    top: 15
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
  tintColor: 'white',
  },
  searchContainer: {
    height: 40, 
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', 
    borderRadius: 20,
    paddingHorizontal: 10, 
  },
  inputSearch: {
    flex: 1,
    marginLeft: 10, // Adjust the margin as needed
    color: 'black', // Adjust the text color as needed
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
    display: 'flex',
    height: 50,
    top: 15
  },
  item: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
    color: 'white',
    fontWeight: '600'
  },
  textTitle: {
    color: 'red', 
    fontSize: 22,
    fontWeight: 'bold', 
    marginLeft: 20,
    marginTop: 10
  },
});

export default News;
