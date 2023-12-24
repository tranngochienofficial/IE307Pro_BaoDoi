import React, { useState } from 'react';
import { StyleSheet, Dimensions, TouchableOpacity, Text, View, Image } from 'react-native';
import Video from 'react-native-video';

const VideoComponent = ({video}) => {
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={togglePlayPause}>
      <Video
        source={video.url} // Replace with the actual path to your video file
        style={styles.video}
        controls={false}
        resizeMode="cover" // Ensure the video covers the entire container
        paused={!isPlaying} // Set the paused prop based on the play/pause state
      />

      <View style={styles.overlay}>
        <View style={{display: 'flex', marginLeft: 310, marginBottom: 30}}>
            <View style={styles.iconContainer}>
              <View style={styles.avatar}>

              </View>
            </View>
            <View style={styles.iconContainer}>
              <Image source={require('../../assets/icons8-like-50.png')} style={{height: 40, width: 40}}/>
              <Text style={styles.iconText}>{video.like}</Text>
            </View>
            <View style={styles.iconContainer}>
              <Image source={require('../../assets/icons8-comment-50.png')} style={{height: 40, width: 40}}/>
              <Text style={styles.iconText}>{video.comment}</Text>
            </View>
            <View style={styles.iconContainer}>
              <Image source={require('../../assets/icons8-share-50.png')} style={{height: 40, width: 40}}/>
              <Text style={styles.iconText}>{video.share}</Text>
            </View>
            <View style={styles.iconContainer}>
              <Image source={require('../../assets/icons8-more-30.png')} style={{height: 40, width: 40}}/>
            </View>
        </View>
        <Text style={styles.title}>{video.title}</Text>
      </View>
    </TouchableOpacity>
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
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: 16,
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 8,
    alignItems: 'center',
  },
  iconText: {
    color: 'white',
    marginLeft: 8,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'yellow',
  }
});

export default VideoComponent;
