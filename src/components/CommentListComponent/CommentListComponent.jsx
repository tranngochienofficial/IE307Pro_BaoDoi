import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const CommentListComponent = ({ comments, onPress }) => {
  const [isLiked, setIsLiked] = useState(false);
  const clickLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.iconn} >
        <Icon name="close" size={25} color="#000" />
      </TouchableOpacity>
      <ScrollView style={{marginTop: 15}}>
        <FlatList
          data={comments}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.commentContainer}>
              <View style={styles.authorAvatar}></View>
              <View style={styles.commentBox}>
                <Text style={styles.authorText}>{`${item.author}:  `}</Text>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                  <View style={{ width: '82%' }}>
                    <Text style={styles.commentText}>{item.text}</Text>
                  </View>
                  <TouchableOpacity onPress={clickLike} style={styles.icon}>
                    <Icon
                      name="heart"
                      size={30}
                      color={'red'}
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={styles.timestampText}>
                    {new Date(item.timestamp).toLocaleDateString()}
                  </Text>
                  <Text style={{ fontWeight: 'bold' }}>Reply</Text>
                </View>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 15,
  },
  commentContainer: {
    marginBottom: 16,
    display: 'flex',
    flexDirection: 'row',
  },
  commentText: {
    fontSize: 18,
    marginBottom: 8,
  },
  authorText: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
  timestampText: {
    fontSize: 12,
    color: 'gray',
    marginRight: 20
  },
  authorAvatar: {
    height: 40,
    width: 40,
    borderRadius: 25,
    backgroundColor: 'red',
    marginRight: 5
  },
  icon: {
    position: 'absolute',
    left: 220
  },
  iconn: {
    position: 'absolute',
    left: 300
  }
});

export default CommentListComponent;
