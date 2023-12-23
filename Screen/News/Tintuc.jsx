import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  FlatList,
} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Nóng',
  },
  {
    id: '2',
    title: 'Mới',
  },
  {
    id: '3',
    title: 'Bóng đá VN',
  },
  {
    id: '4',
    title: 'Bóng đá QT',
  },
  {
    id: '5',
    title: 'Độc & Lạ',
  },
  {
    id: '6',
    title: 'Tình yêu',
  },
  {
    id: '8',
    title: 'Giải trí',
  },
  {
    id: '9',
    title: 'Thế giới',
  },
  {
    id: '10',
    title: 'Pháp luật',
  },
  {
    id: '11',
    title: 'Xe 360',
  },
  {
    id: '12',
    title: 'Công Nghệ',
  },
  {
    id: '13',
    title: 'Ẩm thực',
  },
  {
    id: '14',
    title: 'Làm đẹp',
  },
  {
    id: '15',
    title: 'Sức khỏe',
  },
  {
    id: '16',
    title: 'Du lịch',
  },
];

const Item = ({title}) => (
  <View style={myStyles.item}>
    <Text style={myStyles.title}>{title}</Text>
  </View>
);

const Tintuc = ({navigation}) => {
  const ChuyenMucEvents = () => {
    navigation.navigate('ChuyenMuc');
  };

  return (
    <SafeAreaView style={myStyles.container}>
      <ImageBackground
        style={myStyles.IBTop}
        source={require('./assets/header.png')}>
        <View style={myStyles.topSection}>
          <StatusBar translucent={true} backgroundColor="transparent" />
          <TouchableOpacity style={myStyles.imgList} onPress={ChuyenMucEvents}>
            <Image
              style={myStyles.imgList}
              source={require('./assets/list.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={myStyles.imgSearch}>
            <Image
              style={myStyles.imgSearch}
              source={require('./assets/search.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={myStyles.imgAvatar}>
            <Image
              style={myStyles.imgAvatar}
              source={require('./assets/avatar.png')}
            />
          </TouchableOpacity>
          <View style={myStyles.viewFlatList}>
            <FlatList
              horizontal={true}
              data={DATA}
              renderItem={({item}) => <Item title={item.title} />}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
        <View style={myStyles.topSection2}>
          <Text style={myStyles.txtWeather}>Weather | Time</Text>
        </View>
      </ImageBackground>
      <View style={myStyles.bottomSection1}>
        <View style={myStyles.bottomSection2}>
          <Image
            style={myStyles.imgContent}
            source={require('./assets/header.png')}
          />
          <View style={myStyles.rightContent}>
            <Text style={myStyles.txtContent}>
              Công Nghệ Lập Trình Đa Nền Tảng Trên Ứng Dụng Di Động
            </Text>
            <View style={myStyles.viewPublisher}>
              <Image
                style={myStyles.imgPublisher}
                source={require('./assets/vnexpress.png')}
              />
              <Text style={myStyles.txtTimeContent}>· 1 giờ</Text>
              <TouchableOpacity  style={myStyles.touchImgHide}>
                <Image
                  style={myStyles.imgHide}
                  source={require('./assets/hide.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={myStyles.viewLine}></View>
      </View>
    </SafeAreaView>
  );
};

const myStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  IBTop: {
    height: '37%',
    flexDirection: 'column',
    resizeMode: 'center',
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 34,
    marginTop: 35,
  },
  topSection2: {
    backgroundColor: 'yellow',
    left: '5%',
    //marginTop: 18,
  },
  txtWeather:{
    fontSize: 16,
    color: 'white',
  },
  imgList: {
    height: 22,
    width: 22,
    position: 'absolute',
    left: '5%',
    tintColor: 'white',
  },
  imgSearch: {
    height: 22,
    width: 22,
    position: 'absolute',
    right: '16%',
    tintColor: 'white',
  },
  imgAvatar: {
    height: 27,
    width: 27,
    position: 'absolute',
    right: '5%',
    tintColor: 'white',
    borderRadius: 50,
    resizeMode: 'center',
  },
  bottomSection1: {
    flexDirection: 'column',
    padding: 15,
    //backgroundColor: 'tomato',
    paddingBottom: 0,
  },

  bottomSection2: {
    flexDirection: 'row',
  },
  viewFlatList: {
    width: '60%',
    right: '70%',
  },
  item: {
    //backgroundColor: 'red',
    marginHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 17.5,
    color: 'white',
  },
  imgContent: {
    width: 140,
    height: 120,
    borderRadius: 5,
    marginRight: 13,
    resizeMode: 'center',
  },
  rightContent: {
    //backgroundColor: 'orange',
    flex: 4,
    flexDirection: 'column',
  },
  txtContent: {
    flex: 3.3,
    fontSize: 20,
    color: 'black',
    //backgroundColor: 'pink'
  },
  viewPublisher: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgPublisher: {
    //backgroundColor: 'yellow',
    width: 70,
    height: 20,
    marginRight: 5,
  },
  imgHide:{
    tintColor: '#d9d9d9',
    left: '300%',
    width: 17,
    height: 17,
  },
  touchImgHide:{
    left: '150%',
  },
  txtTimeContent: {
    color: '#8c8c8c',
    fontSize: 16,
  },
  viewLine: {
    backgroundColor: '#f2f2f2',
    height: 1,
    marginTop: 15,
  },

});

export default Tintuc;
