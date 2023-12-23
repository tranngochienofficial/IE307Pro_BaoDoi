import React, { useState } from 'react';
import { StyleSheet, Dimensions, TouchableOpacity, Text, View } from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can choose a different icon library

const VideoComponent = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={togglePlayPause}>
      <Video
        source={require('../../assets/abc.mp4')} // Replace with the actual path to your video file
        style={styles.video}
        controls={false}
        resizeMode="cover" // Ensure the video covers the entire container
        paused={!isPlaying} // Set the paused prop based on the play/pause state
      />

      <View style={styles.overlay}>
        <View style={{display: 'flex', marginLeft: 300, marginBottom: 100}}>
            <View style={styles.iconContainer}>
            <Icon name="heart" size={30} color="white" />
            <Text style={styles.iconText}>Like</Text>
            </View>
            <View style={styles.iconContainer}>
            <Icon name="comment" size={30} color="white" />
            <Text style={styles.iconText}>Comment</Text>
            </View>
            <View style={styles.iconContainer}>
            <Icon name="share" size={30} color="white" />
            <Text style={styles.iconText}>Share</Text>
            </View>
        </View>
        <Text style={styles.title}>Your Video Title Here</Text>
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
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  iconText: {
    color: 'white',
    marginLeft: 8,
  },
});

export default VideoComponent;
