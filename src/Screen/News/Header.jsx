import React from 'react'
import { Image, ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { DATA } from './../../datas/datas';
import { useNavigation } from '@react-navigation/native';

const Header = ({category, handleItemPress}) => {
  const navigation = useNavigation(0)
  const navigateToCategories = () => {
    navigation.navigate('Categories');
};


  const navigateToUser = () => {
    navigation.navigate('User')
  }

  const Item = ({ title, onPress, selected }) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.item}>
        <Text style={[styles.title, { borderBottomWidth: selected ? 3 : 0, borderBottomColor: 'yellow'}]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
        <ImageBackground
            style={styles.IBTop}
            source={require('./assets/header.png')}>
            <View style={styles.topSection}>
                <StatusBar translucent={true} backgroundColor="transparent" />
                <TouchableOpacity style={styles.imgList} onPress={navigateToCategories}>
                    <Image
                    style={styles.imgList}
                    source={require('./assets/list.png')}
                    />
                </TouchableOpacity> 
                
                <TouchableOpacity style={styles.searchContainer}>
                    <Image
                    style={styles.imgSearch}
                    source={require('./assets/search.png')}
                    />
                    <TextInput
                    placeholder='Nhập nội dung tìm kiếm'
                    style={styles.inputSearch}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.imgAvatar} onPress={navigateToUser}>
                    <Image
                    style={styles.imgAvatar}
                    source={require('./assets/avatar.png')}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.topSection2}>
            <Text style={styles.txtWeather}>Weather | Time</Text>
            </View>
            <View style={styles.viewFlatList}>
            <FlatList
                horizontal={true}
                data={DATA}
                renderItem={({ item }) => (
                <Item
                    title={item.title}
                    onPress={() => handleItemPress(item)}
                    selected={item.title === category} // Check if the title matches the selected category
                />
                )}
                keyExtractor={(item) => item._id}
            />
            </View>
        </ImageBackground> 
    </View>
    )
}
const styles = StyleSheet.create({
  IBTop: {
    paddingBottom: 15,
  },
  topSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 30,
    paddingLeft: 15,
    paddingRight: 50,
    paddingBottom: 35,
    alignItems: 'center',
  },
  topSection2: {
    left: 20,
    top: 15,
  },
  txtWeather: {
    fontSize: 16,
    color: 'white',
  },
  imgList: {
    height: 30,
    width: 30,
    position: 'absolute',
    tintColor: 'white',
  },
  imgSearch: {
    height: 22,
    width: 22,
    tintColor: 'white',
  },
  searchContainer: {
    height: 40,
    width: 250,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 20,
    paddingHorizontal: 10,
    top: 15
  },
  inputSearch: {
    flex: 1,
    marginLeft: 10,
    color: 'black',
  },
  imgAvatar: {
    height: 30,
    width: 30,
    position: 'absolute',
    tintColor: 'white',
    borderRadius: 50,
    resizeMode: 'center',
  },
  viewFlatList: {
    display: 'flex',
    height: 50,
    top: 15,
  },
  item: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
    color: 'white',
    fontWeight: '600',
  },
});
export default Header;
