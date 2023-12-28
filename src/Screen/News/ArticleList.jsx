import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DATA } from '../../datas/datas';
import ArticleMiniComponent from '../../components/ArticleMiniComponent/ArticleMiniComponent';
import ArticleMiniComponentBig from '../../components/ArticleMiniComponentBig/ArticleMiniComponentBig';
import { getArticleByCategory } from '../../services/articleService';

const ArticleList = ({ category, articleMiniStyle }) => {

  // const categoryData = DATA.find(item => item.title === category);

  // if (!categoryData) {
  //   return (
  //     <View>
  //       <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Không có dữ liệu cho danh mục "{category}"</Text>
  //     </View>
  //   );
  // }

  const [isLoading, setIsLoading] = useState(true); // Step 1

  const [articleData, setArticleData] = useState([{}]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getArticleByCategory(category);
        setArticleData(data.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000); 
      } catch (error) {
        // Handle the error
        console.error("Error fetching articles:", error);
      }
    };

    fetchData();
}, [category]); 


  const navigation = useNavigation();

  const handleArticlePress = (article) => {
    // Navigate to ArticleDetail screen with the selected article
    navigation.navigate('ArticleDetail', { article });
  };

 return (
    <View style={{ marginBottom: 50, height: '100%'}}>
      {isLoading ? (
        // Render loading indicator if isLoading is true
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        // Render articles once loading is complete
        <View>
          {articleData.map((article) => (
            <TouchableOpacity key={article.id} onPress={() => handleArticlePress(article)}>
              {articleMiniStyle === 'small' ? (
                <ArticleMiniComponent article={article} />
              ) : (
                <ArticleMiniComponentBig article={article} />
              )}
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default ArticleList;
