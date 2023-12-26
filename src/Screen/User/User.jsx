import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const User = ({navigation}) => {
  const clickLogin = () => {
    navigation.navigate('Login')
  }

  const [isLoggedIn, setIsLoggedIn] = useState(null)
  const checkLoginStatus = async () => {
    try {
      const access_token = await AsyncStorage.getItem('access_token');
      if (access_token) {
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }}
    catch (error) { 
      console.error("Error checking login status:", error);
    }
  };

  useEffect(()=> {
    checkLoginStatus()
  },[])

  console.log(isLoggedIn)
  return (
    <ScrollView style={styles.container}>
      <View style={styles.userInfoContainer}>
        <Image style={styles.avatar} source={{uri: 'https://i.pinimg.com/564x/29/b8/d2/29b8d250380266eb04be05fe21ef19a7.jpg'}} />
        <TouchableOpacity onPress={clickLogin}>
          {isLoggedIn ? (
            <Text style={styles.title}>{`Xin chào ${isLoggedIn}`}</Text>
          ) : 
          (
          <Text style={styles.title}>Đăng nhập</Text>
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.menuContainer}>
        <View style={styles.menuRow}>
          <Image source={require('../../assets/icons8-save.gif')} style={styles.icon}/>
          <Text style={styles.menuItem}>Đã lưu</Text>
          <Image source={require('../../assets/icons8-follow.gif')} style={styles.icon}/>
          <Text style={styles.menuItem}>Đang theo dõi</Text>
        </View>
        <View style={styles.menuRow}>
          <Image source={require('../../assets/icons8-download.gif')} style={styles.icon}/>
          <Text style={styles.menuItem}>Tin đã tải</Text>
          <Image source={require('../../assets/icons8-time-machine.gif')} style={styles.icon}/>
          <Text style={styles.menuItem}>Đọc gần đây</Text>
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Cài đặt</Text>
        <Text style={styles.item}>Chế độ đọc</Text>
        <Text style={styles.item}>Cỡ chữ</Text>
        <Text style={styles.item}>Giao diện</Text>
        <Text style={styles.item}>Giọng đọc</Text>
        <Text style={styles.item}>Tin địa phương</Text>
        <Text style={styles.item}>Nâng cao</Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Tiện ích</Text>
        <Text style={styles.item}>Lịch việt</Text>
        <Text style={styles.item}>Thời tiết</Text>
        <Text style={styles.item}>Kết quả xổ số</Text>
        <Text style={styles.item}>Gía vàng & ngoại tệ</Text>
        <Text style={styles.item}>Tỷ số bóng đá</Text>
        <Text style={styles.item}>Tiết kiệm 3G/4G truy cập</Text>
        <Text style={styles.item}>Tiện ích khác</Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Sản phẩm</Text>
        <Text style={styles.item}>Liên hệ</Text>
        <Text style={styles.item}>Đối tác chính thức</Text>
        <Text style={styles.item}>Kiểm tra phiên bản mới</Text>
        <Text style={styles.item}>Điều khoản sử dụng</Text>
        <Text style={styles.item}>Chính sách bảo mật</Text>
        <Text style={styles.item}>Bình chọn cho báo mới</Text>
        <Text style={styles.item}>Email góp ý, báo lỗi</Text>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 20,
  },
  menuContainer: {
    paddingLeft: 10,
  },
  menuRow: {
    flexDirection: 'row',
    paddingLeft: 20,
    marginBottom: 20,
  },
  menuItem: {
    fontSize: 20,
    flex: 1,
  },
  icon: {
    height: 30,
    width: 30,
    marginRight: 5
  },
  sectionContainer: {
    borderTopWidth: 3,
    borderTopColor: '#c5cbd4',
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#c5cbd4',
  },
  sectionTitle: {
    fontSize: 26,
    color: '#77cce6',
    marginBottom: 14,
    fontWeight: 'bold'
  },
  item: {
    fontSize: 22,
    marginBottom: 16
  },
});

export default User;
