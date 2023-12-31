import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import ArticleMiniComponentBig from './../ArticleMiniComponentBig/ArticleMiniComponentBig';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ArticleDetail from '../../Screen/News/ArticleDetail';
import { useNavigation } from '@react-navigation/native';
const { width } = Dimensions.get('window');

const CarouselComponent = ({aricles}) => {
  const navigation = useNavigation()
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.slide} onPress={() => navigation.navigate('ArticleDetail', {item})}>
      <ArticleMiniComponentBig article={item} />
    </TouchableOpacity>
  );

  return (
    <Carousel
      data={aricles}
      renderItem={renderItem}
      sliderWidth={width}
      itemWidth={width}
      autoplay={true}
      autoplayInterval={3000}
      loop={true} // Enable loop
    />
  );
};
const styles = StyleSheet.create({
  slide: {
    width: width,
    height: 380,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: '95%',
    height: 200, // Adjust the height as needed
    resizeMode: 'cover',
  },
});
export default CarouselComponent;
