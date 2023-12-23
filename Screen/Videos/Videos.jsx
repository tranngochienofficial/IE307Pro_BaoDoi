import React from 'react';
import {  StyleSheet, Dimensions } from 'react-native';
import Video from 'react-native-video';
import VideoComponent from '../../components/VideoComponent/VideoComponent';

const Videos = () => {
  return (
    <VideoComponent />
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
