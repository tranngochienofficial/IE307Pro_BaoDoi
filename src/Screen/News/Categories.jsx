import React, { useEffect, useState } from 'react';
import {
   StyleSheet,
   Text,
   TouchableOpacity,
   View,
   Image,
} from 'react-native';
import { FlatList, ScrollView, Switch } from 'react-native-gesture-handler';
import { DATA } from '../../datas/datas'
import AsyncStorage from '@react-native-async-storage/async-storage';
// import DraggableFlatList, {
//   ScaleDecorator,
// } from "react-native-draggable-flatlist";

const  Categories = ({navigation}) => {
  const [isSimpleMode, setIsSimpleMode] = useState(false);

  const toggleSimpleMode = () => {
    setIsSimpleMode((prevMode) => !prevMode);
  };

  const Item = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const clickCategory = (getCategory) => {
   navigation.navigate('News', {getCategory})
}

const renderRow = ({ item, index }) => (
  <View style={styles.row}>
    <Item title={item[0].title} onPress={() => clickCategory(item[0].title)} />
    {item[1] && <Item title={item[1].title} onPress={() => clickCategory(item[1].title)} />}
  </View>
);

const formatData = (data) => {
  const formattedData = [];
  for (let i = 0; i < data.length; i += 2) {
    const row = [data[i]];
    if (i + 1 < data.length) {
      row.push(data[i + 1]);
    }
    formattedData.push(row);
  }
  return formattedData;
};

const ColumnItem = ({ title, onPress, index }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.columnItem}>
      <Text style={styles.columnIndex}>{index}</Text>
      <Text style={styles.columnTitle}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const renderColumnItem = ({ item, index }) => (
  <ColumnItem title={item.title} onPress={() => clickCategory(item.title)} index={index + 1} />
);

const [isColumnStyle, setIsColumnStyle] = useState(false)
const setColumnStyle = () => {
   setIsColumnStyle(!isColumnStyle)
}

const [articleMiniStyle, setArticleMiniStyle] = useState('');

useEffect(() => {
    const loadArticleMiniStyle = async () => {
      try {
        const storedStyle = await AsyncStorage.getItem('articleMiniStyle');
        setArticleMiniStyle(storedStyle);
      } catch (error) {
        console.error('Error loading articleMiniStyle:', error);
      }
    };

    loadArticleMiniStyle();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

useEffect(() => {
  const saveArticleMiniStyle = async () => {
    try {
      await AsyncStorage.setItem('articleMiniStyle', articleMiniStyle);
    } catch (error) {
      console.error('Error saving articleMiniStyle:', error);
    }
  };

  saveArticleMiniStyle();
}, [articleMiniStyle]);

   const setArticleStyleBig = (articleMiniStyleNew) => {
      setArticleMiniStyle('big')
      navigation.navigate('News', {articleMiniStyleNew})
   }
   const setArticleStyleSmall = (articleMiniStyleNew) => {
      setArticleMiniStyle('small')
      navigation.navigate('News', {articleMiniStyleNew})
   }

  const [data, setData] = useState(DATA);

   return (
      <ScrollView style = {styles.container}>
         <View style={{height: 230}}>
            <Text style={styles.title}>CHỌN CHẾ ĐỘ ĐỌC</Text>
            <View style={styles.optionsContainer}>
               <Text  style={styles.options}>Chế độ đơn giản</Text>
               <Switch
                     value={isSimpleMode}
                     onValueChange={toggleSimpleMode}
                     />
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
               <Text  style={styles.options}>Chế độ thường</Text>
               <TouchableOpacity style={articleMiniStyle==='big' ? styles.nomalOptions : styles.nomalOptions1} onPress={() => setArticleStyleBig('big')}>
                  <Text style={{ color: articleMiniStyle === 'big' ? 'white' : 'black', fontSize: 18 }}>Danh sách to</Text>
               </TouchableOpacity>
               <TouchableOpacity style={articleMiniStyle==='small' ? styles.nomalOptions : styles.nomalOptions1} onPress={() => setArticleStyleSmall('small')}>
                  <Text style={{ color: articleMiniStyle === 'small' ? 'white' : 'black', fontSize: 18 }}>Danh sách nhỏ</Text>
               </TouchableOpacity>
            </View>
            <View style={{top: 80,display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}> 
                  <TouchableOpacity style={{ marginRight: 10 }} onPress={setColumnStyle}>
                  {!isColumnStyle ? (
                     <Image
                        style={{ height: 25, width: 25 }}
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/82/82122.png' }}
                     />
                  ) : (
                     <Image
                        style={{ height: 25, width: 25 }}
                        source={{ uri: 'https://cdn.icon-icons.com/icons2/2941/PNG/512/category_icon_183800.png' }} // Replace with the actual URL
                     />
                  )}
                  </TouchableOpacity>
            </View>
         </View>

         <View style={{borderTopWidth: 5, borderTopColor: '#dce3de', paddingTop: 20}}>
            {!isColumnStyle ? (
               <FlatList
                  data={formatData(data)}
                  renderItem={renderRow}
                  keyExtractor={(item, index) => index.toString()}
                  
               />
            ) : (
               <FlatList
                     data={DATA}
                     renderItem={renderColumnItem}
                     keyExtractor={(item, index) => index.toString()}
                  />
                  // <DraggableFlatList
                  //    data={data}
                  //    renderItem={renderColumnItem}
                  //    keyExtractor={(item, index) => index.toString()}
                  //    onDragEnd={({ data: newData }) => setData(newData)}
                  // />
            )}
         </View>

         <View style={{marginBottom: 30, marginTop: 20, borderTopWidth: 5, borderTopColor: '#dce3de'}}>
            <Text style={styles.bottomText}>Nguồn báo nổi bật</Text>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
               <View style={styles.sourceContainer}>
                  <Image style={styles.img} source={{uri: 'data:image/png;base64,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'}}/>
                  <Text>VietnamNet</Text>
               </View>
               <View style={styles.sourceContainer}>
                  <Image style={styles.img} source={{uri: 'https://dhtn.ttxvn.org.vn/Images/files/VNA.png'}}/>
                  <Text>TTXVN</Text>
               </View>
               <View style={styles.sourceContainer}>
                  <Image style={styles.img} source={{uri: 'data:image/png;base64,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'}}/>
                  <Text>VTC News</Text>
               </View>
               <View style={styles.sourceContainer}>
                  <Image style={styles.img} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Vovlogo_%28pre-2020%29.png'}}/>
                  <Text>VOV</Text>
               </View>
            </View>
         </View>
         <View style={{marginBottom: 30, marginTop: 20, borderTopWidth: 5, borderTopColor: '#dce3de'}}>
            <Text style={styles.bottomText}>Liên hệ</Text>
            <Text style={styles.bottomText}>Đối tác chính thức</Text>
            <Text style={styles.bottomText}>Điều khoản sử dụng</Text>
            <Text style={styles.bottomText}>Chính sách bảo mật</Text>
         </View>
      </ScrollView>
   );
}

const styles = StyleSheet.create({
   container: {
      display: 'flex',
      padding: 20,
      backgroundColor: 'white',
      height: 1000
   },
   title: {
      fontSize: 20,
      marginBottom: 15
   },
   options: {
      fontSize: 18,
      color: '#000',
      marginTop: 25,
      marginBottom: 10,
      position: 'absolute'
   },
   optionsContainer: {
      display: 'flex',
      justifyContent: 'center'   
   },
   nomalOptions: {
      height: 45,
      width: 170,
      backgroundColor: '#2f8c94',
      top: 60,
      borderRadius: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 15
   },
   nomalOptions1: {
      height: 45,
      width: 170,
      backgroundColor: '#e1e7e8',
      top: 60,
      borderRadius: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 15
   },
   item: {
      width: 175,
      height: 100,
      backgroundColor: '#f0f0f0',
      padding: 10,
      margin: 5,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
   },
   title: {
      fontSize: 20,
      color: '#000',
      fontWeight: '500',
   },
   row: {
      flexDirection: 'row',
   },
   columnItem: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#dce3de',
      padding: 5
   },
   columnIndex: {
      fontSize: 24,
      width: 30,
      height: 30,
      textAlign: 'center',
      backgroundColor: '#dce3de',
      borderRadius: 5,
      marginRight: 15
   },
   columnTitle: {
      fontSize: 24,
      color: '#000',

   },
   bottomText: {
      fontSize: 24, 
      marginLeft: 5,
      marginTop: 20
   },
   img: {
      height: 50,
      width: 50,
      borderRadius: 25
   },
   sourceContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
   }
});

export default Categories