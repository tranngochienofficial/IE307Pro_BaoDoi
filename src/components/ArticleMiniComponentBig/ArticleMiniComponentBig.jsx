import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ArticleMiniComponentBig = ({ article }) => {
  return (
    <View style={styles.container}>
        <View>
            {article.imgUrl && article.imgUrl.trim() !== '' ? (
                <Image source={{ uri: article.imgUrl }} style={styles.img}/>
            ) : (
                <View style={styles.img}>
                    {/* Nội dung hoặc kiểu gì đó khi không có hình ảnh */}
                </View>
            )}
        </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{article.title}</Text>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: 250 }}>
          <Text>{`Tác giả: ${article.author}`}</Text>
          <Text>{formatDateTime(article.createdAt)}</Text>
        </View>
      </View>
    </View>
  );
};

const formatDateTime = (dateTimeString) => {
  const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  const dateTime = new Date(dateTimeString);
  return dateTime.toLocaleString('en-US', options);
};

const styles = StyleSheet.create({
  container: {
    height: 350,
    width: '100%',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
  },
  img: {
    height: 240,
    width: '100%',
    borderRadius: 10,
    bottom: 5,
  },
  title: {
    fontSize: 22,
    color: '#000',
  },
  textContainer: {
    marginLeft: 10,
    height: '100%',
    width: '100%',
  },
});

export default ArticleMiniComponentBig;
