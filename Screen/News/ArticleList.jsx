import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DATA } from '../../datas/datas';
import ArticleMiniComponent from '../../components/ArticleMiniComponent/ArticleMiniComponent';

const ArticleList = ({ category }) => {

  const categoryData = DATA.find(item => item.title === category);

  if (!categoryData) {
    return (
      <View>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Không có dữ liệu cho danh mục "{category}"</Text>
      </View>
    );
  }
  const navigation = useNavigation();

  const handleArticlePress = (article) => {
    // Navigate to ArticleDetail screen with the selected article
    navigation.navigate('ArticleDetail', { article });
  };

  return (
    <View key={categoryData.id} style={{ marginTop: 20 }}>
      {categoryData.articles.map(article => (
        <TouchableOpacity key={article.articleId} onPress={() => handleArticlePress(article)}>
          <View>
            <ArticleMiniComponent article={article} />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ArticleList;
