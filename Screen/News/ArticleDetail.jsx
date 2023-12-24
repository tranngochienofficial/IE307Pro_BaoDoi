import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ArticleDetail = ({ route }) => {
  const { article } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{article.articleTitle}</Text>
      {/* Add more details or components to display other article properties */}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: 'white'
    },
    title: {
        fontSize: 40,
        color: '#000',
        fontWeight: '400'
    }    
})
export default ArticleDetail;
