import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Dimensions, TouchableOpacity, Text, View, Image, Animated } from 'react-native';
import Video from 'react-native-video';
import Icon  from 'react-native-vector-icons/FontAwesome';
import CommentListComponent from '../CommentListComponent/CommentListComponent';

const VideoComponent = ({video, isActive }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [like, setLike] = useState(video.like)
  const [isClickComment, setIsClickComment] = useState(false)
  const [isClickShare, setIsClickShare] = useState(false)

  const numOfComments = (video.comments && video.comments.length) || 0;
  const clickLike = () => {
    setIsLiked(!isLiked)
  }

  useEffect(() => {
    if (isLiked) {
          setLike(like + 1)
        } else {
          setLike(video.like)
        }
  },[isLiked])
  const clickComment = () => {
    setIsClickComment(!isClickComment)
  }
  const clickShare = () => {
    setIsClickShare(!isClickShare)
  }
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    setIsClickComment(false)
    setIsClickShare(false)
  };

  const videoRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
      // Pause the video when it is not active
      videoRef.current?.seek(0);
    }
  }, [isActive]);

  const translateY = useRef(new Animated.Value(1000)).current;

  useEffect(() => {
      Animated.timing(translateY, {
        toValue: isClickComment ? 0 : 1000,
        duration: 500, // Điều chỉnh thời gian hiệu ứng
        useNativeDriver: false, // Cần thiết khi sử dụng Animated.View
      }).start();
    }, [isClickComment]);

  return (
    <View style={styles.container} >
      <TouchableOpacity onPress={togglePlayPause} style={styles.container}>
        <Video
          ref={videoRef}
          source={video.url}
          style={styles.video}
          paused={!isPlaying}
          repeat={true}
          resizeMode="cover"
          />
      </TouchableOpacity> 
      <View style={styles.overlay}>
        <View style={{display: 'flex', marginLeft: 310, marginBottom: 30}}>
            <View style={styles.iconContainer}>
              <View style={styles.avatar}>
                <View>
                  <Text style={{color: '#000'}}>User avatar</Text>
                </View>
              </View>
            </View>

            <TouchableOpacity style={styles.iconContainer} onPress={clickLike}>
              <Icon name="heart" size={40} color={isLiked ? 'red' : 'white'} style={styles.icon} />
              <Text style={styles.iconText}>{like}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} onPress={clickComment}>
              <Icon name="comment" size={40} color="white" style={styles.icon} />
              <Text style={styles.iconText}>{numOfComments}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} onPress={clickShare}>
              <Icon name="share" size={40} color="white" style={styles.icon} />
              <Text style={styles.iconText}>{video.share}</Text>
            </TouchableOpacity>
            <View style={styles.iconContainer}>
              <Icon name="ellipsis-h" size={40} color="white" style={styles.icon} />
            </View>
        </View>
        <Text style={styles.title}>{video.title}</Text>

        <Animated.View style={[styles.commentContainer, { transform: [{ translateY }] }]}>
          {isClickComment && 
            <CommentListComponent comments={video.comments} onPress={clickComment} />}
        </Animated.View>
     
      </View>
    </View>
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
    justifyContent: 'center'    
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
    display: 'flex', 
    alignItems: 'center',
    justifyContent: 'center'
  },
  commentContainer: {
    width: '100%',
    height: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    margin: 15,
    position: 'absolute',
  },
  userComment: {
    fontSize: 18,
}
});

export default VideoComponent;
