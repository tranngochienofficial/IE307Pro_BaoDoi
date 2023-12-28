import React from 'react'
import { ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'

const Trends = () => {
  return (
    <View>
      <ImageBackground
        style={styles.IBTop}
        source={require('../../assets/header.png')}>
        <View style={styles.topSection}>
          <StatusBar translucent={true} backgroundColor="transparent" />
          <Text style={styles.txtHeader}>Xu hướng</Text>
          {/* <Image></Image> */}
        </View>
      </ImageBackground>
      <Text>Đang được quan tâm</Text>

      <Text>Nóng 24h</Text>
    </View>  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  IBTop: {
    //height: '37%',
    flexDirection: 'column',
    resizeMode: 'center',
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 34,
    marginTop: 35,
    paddingHorizontal: 10,

    //backgroundColor: 'red',
  },
  txtHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
})
export default Trends