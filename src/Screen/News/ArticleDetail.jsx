import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getArticleByCategory } from './../../services/articleService';
import ArticleMiniComponent from '../../components/ArticleMiniComponent/ArticleMiniComponent';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useAuth } from '../../../AuthContext';

const ArticleDetail = ({ route }) => {
  const { article, item } = route.params;
  const articleDetail = article ? article : item

  const [like, setLike] = useState(false)
  const handleLike = () => {
    setLike(!like)
  }

  const { setRecentlyClickedArticles, recentlyClickedArticles } = useAuth();

  const [articleData, setArticleData] = useState([{}]);

  const getArticleData = async () => {
    try {
      const res = await getArticleByCategory(articleDetail.category);
      // Assuming articleDetail._id is the ID to be excluded
      const filteredData = res.data.filter(article => article._id !== articleDetail._id);

      setArticleData(res.data);
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    getArticleData()
  },[])

  const [visibleArticles, setVisibleArticles] = useState(5); // Number of articles to display initially

  useFocusEffect(
    React.useCallback(() => {
      setVisibleArticles(5);
      return () => {
      };
    }, [])
  );


   const loadMoreArticles = () => {
    // Increase the number of visible articles by a certain amount (e.g., 10)
    setVisibleArticles((prevVisibleArticles) => prevVisibleArticles + 5);
  };

  const navigation = useNavigation()

  const handleArticlePress = (article) => {
    // Check if the article._id is already in RecentlyClickedArticles
    const isArticleClicked = recentlyClickedArticles.some((clickedArticle) => clickedArticle._id === article._id);

    if (!isArticleClicked) {
      // Update recently clicked articles
      setRecentlyClickedArticles((prevArticles) => {
        const newArticles = [article, ...prevArticles.slice(0, 9)];
        return newArticles;
      });
    }

    // Navigate to ArticleDetail screen with the selected article
    navigation.navigate('ArticleDetail', { article });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{padding: 15}}>
        <View style={styles.iconContainer}>
          <View style={{marginLeft: 10}}>
            <TouchableOpacity onPress={handleLike}> 
              <Icon name="heart" size={30} color={like ? 'red' : '#b6c2b9'} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: 150, marginRight: 10}}>
            <Icon name="comment" size={30} color="#33B5FF" style={styles.icon} />
            <Icon name="share" size={30} color="#33FF49" style={styles.icon} />
            <Icon name="user-plus" size={30} color="#337CFF" style={styles.icon} />
          </View>
        </View>
        <Text style={styles.title}>{articleDetail.title}</Text>
        <View>
          <Text>{articleDetail.content}</Text>
        </View>
        <Text style={{fontSize: 25, fontWeight: 'bold', top: 20}}>Tin khác</Text> 
      </View>
      <View style={{height: '100%'}}>
          {articleData.slice(0, visibleArticles).map((article) => (
            <TouchableOpacity key={article._id} onPress={() => handleArticlePress(article)}>
                <ArticleMiniComponent article={article} />
            </TouchableOpacity>
          ))}
          {visibleArticles < articleData.length && (
                <TouchableOpacity onPress={loadMoreArticles} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <View style={styles.loadMoreButton}>
                    <Text style={styles.loadMoreButtonText}>Xem thêm</Text>
                  </View>
                </TouchableOpacity>
              )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  title: {
    fontSize: 40,
    color: '#000',
    fontWeight: '400',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  text: {
    color: 'red', 
    fontSize: 22,
    fontWeight: 'bold', 
    marginLeft: 20,
    marginTop: 10
  },
  loadMoreButton: {
    backgroundColor: '#3498db',
    padding: 10,
    alignItems: 'center',
    marginVertical: 10,
    width: 100,
    borderRadius: 5,
  },
  loadMoreButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ArticleDetail;
