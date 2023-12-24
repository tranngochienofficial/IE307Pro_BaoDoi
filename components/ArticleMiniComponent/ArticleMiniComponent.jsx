import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ArticleMiniComponent = ({ article }) => {
  return (
    <View style={styles.container}>
        <View>
            {article.imgUrl && article.imgUrl.trim() !== '' && (
                <Image source={{ uri: article.imgUrl }} style={styles.img}/>
            )}
        </View>

        <View style={styles.textContainer}>
            <Text style={styles.title}>{article.articleTitle}</Text>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: 250}}>
                <Text>Nguồn</Text>
                <Text>Thời gian đăng</Text>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        height: 150,
        width: '100%',
        padding: 15,
        borderRadius: 10,
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',

    },  
    img: {
        height: 130,
        width: 130,
        borderRadius: 10,
        bottom: 5
    },
    title: {
        fontSize: 22,
        color: '#000'
    },  
    textContainer: {
        marginLeft: 10,
        height: '100%',
        width: 240
    }
});

export default ArticleMiniComponent;
