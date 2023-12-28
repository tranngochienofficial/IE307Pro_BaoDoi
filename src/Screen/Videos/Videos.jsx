import React, { useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import VideoComponent from '../../components/VideoComponent/VideoComponent';
import Swiper from 'react-native-swiper';

const Videos = () => {
  const datas = [
    { url: require('../../assets/1.mp4'), like: 10, comment: 5, share: 30, title: 'Video 1'},
    { url: require('../../assets/2.mp4'), like: 100, comment: 50, share: 30, title: 'Video 2'},
    { url: require('../../assets/3.mp4'), like: 1000, comment: 50, share: 30, title: 'Video 3'},
    { url: require('../../assets/4.mp4'), like: 10000, comment: 50, share: 300, title: 'Video 4'},

    // Add more videos as needed
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const onIndexChanged = (index) => {
    setActiveIndex(index);
  };

  return (
    <Swiper style={styles.wrapper} loop={false} showsPagination={false} horizontal={false} onIndexChanged={onIndexChanged}>
      {datas.map((video, index) => (
        <VideoComponent key={index} video={video} isActive={index === activeIndex}/>
      ))}
    </Swiper>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    flex: 1,
    width: Dimensions.get('window').width, // Set width to the screen width
    height: '100%', // Set height to the screen height
  },
});

export default Videos;
