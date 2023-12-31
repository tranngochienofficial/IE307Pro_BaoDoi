import React, { useEffect, useState, useRef } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Animated, RefreshControl } from 'react-native';
import { getArticleByCategory, getArticleById } from '../../services/articleService';
import CarouselComponent from '../../components/CarouselComponent/CarouselComponent';
import { useAuth } from '../../../AuthContext';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import ArticleMiniComponent from '../../components/ArticleMiniComponent/ArticleMiniComponent';
import ArticleMiniComponentBig from '../../components/ArticleMiniComponentBig/ArticleMiniComponentBig';
import { useNavigation } from '@react-navigation/native';

const ArticleList = ({ category, articleMiniStyle }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [articleData, setArticleData] = useState([{}]);
  const { setRecentlyClickedArticles, recentlyClickedArticles } = useAuth();  

  const [new10Article, setNew10Article] = useState([{}])
 
  const { user } = useAuth()
  const [readArticles, setReadArticles] = useState([{}]) // initialize with an empty array
  const idList = user.recently_read_articles 
  const navigation = useNavigation()
  const [visibleArticles, setVisibleArticles] = useState(5); // Number of articles to display initially

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const data = await getArticleByCategory(category, 20);
        setArticleData(data.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    const fetchNewArticles = async () => {
      try {
        if (category === 'Nóng') {
          const newArticleData = await getArticleByCategory('Mới');
          const first10Articles = newArticleData.data.slice(0, 5);
          setNew10Article(first10Articles);
        }
      } catch (error) {
        console.error("Error fetching new articles:", error);
      }
    };

  const getRecentlyReadArticles = async () => {
    try {
      if (category === 'Nóng') {
        const articles = await Promise.all(
          idList.map(async (id) => {
            const article = await getArticleById(id);
            return article;
          })
        );

        setReadArticles(articles);
      }
    } catch (error) {
      console.error(error);
    }
  };

    getRecentlyReadArticles();
    fetchData();
    fetchNewArticles();
  }, [category]);



  const loadMoreArticles = () => {
    // Increase the number of visible articles by a certain amount (e.g., 10)
    setVisibleArticles((prevVisibleArticles) => prevVisibleArticles + 5);
  };

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
    <View style={{ marginBottom: 80, height: '100%'}}>
      {isLoading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <View>
          <View>  
            {category==='Nóng' && (
              <View>
                <Text style={styles.text}>Mới nhất</Text>
                <CarouselComponent aricles={new10Article}/>
                <Text style={styles.text}>Tin Nóng</Text>
              </View>
            )}
          </View>

          <View>
           <FlatList
              data={articleData.slice(0, visibleArticles)}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <TouchableOpacity onPress={() => handleArticlePress(item.data ? item.data : item)}>
                  {articleMiniStyle === 'small' ? (
                    <ArticleMiniComponent article={item.data ? item.data : item} />
                  ) : (
                    <ArticleMiniComponentBig article={item.data ? item.data : item} />
                  )}
                </TouchableOpacity>
              )}
            /> 
        
            {/* Load More Button */}
            {visibleArticles < articleData.length && (
            <TouchableOpacity onPress={loadMoreArticles} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.loadMoreButton}>
                <Text style={styles.loadMoreButtonText}>Xem thêm</Text>
                </View>
            </TouchableOpacity>
            )}
        </View>        
        <View>
           <Text style={styles.text}>Tin bạn vừa đọc</Text>
           <FlatList
              data={readArticles.slice(0, visibleArticles)}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <TouchableOpacity onPress={() => handleArticlePress(item.data ? item.data : item)}>
                  {articleMiniStyle === 'small' ? (
                    <ArticleMiniComponent article={item.data ? item.data : item} />
                  ) : (
                    <ArticleMiniComponentBig article={item.data ? item.data : item} />
                  )}
                </TouchableOpacity>
              )}
            /> 
        
            {/* Load More Button */}
            {visibleArticles < readArticles.length && (
            <TouchableOpacity onPress={loadMoreArticles} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.loadMoreButton}>
                <Text style={styles.loadMoreButtonText}>Xem thêm</Text>
                </View>
            </TouchableOpacity>
            )}
        </View>        
      </View>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
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
export default ArticleList;
