import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import VideoComponent from '../../components/VideoComponent/VideoComponent';
import Swiper from 'react-native-swiper';

const Videos = () => {
  const datas = [
    { url: require('../../assets/1.mp4'), like: 10, comment: 5, share: 3, title: 'Video 1' },
    { url: require('../../assets/2.mp4'), like: 10, comment: 5, share: 3, title: 'Video 2' },
    // Add more videos as needed
  ];

  return (
    <Swiper style={styles.wrapper} loop={false} showsPagination={false} horizontal={false}>
      {datas.map((video, index) => (
        <VideoComponent key={index} video={video} />
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
