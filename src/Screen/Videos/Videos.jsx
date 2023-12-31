import React, { useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import VideoComponent from '../../components/VideoComponent/VideoComponent';
import Swiper from 'react-native-swiper';
import { datas } from '../../datas/videoData'
const Videos = () => {

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
