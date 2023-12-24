import React, { useState } from 'react';
import {
   StyleSheet,
   Text,
   View,
} from 'react-native';
import { Switch } from 'react-native-gesture-handler';

export default function ChuyenMuc(){
   const [isSimpleMode, setIsSimpleMode] = useState(false);

  const toggleSimpleMode = () => {
    setIsSimpleMode((prevMode) => !prevMode);
  };

   return (
      <View style = {styles.container}>
         <View>
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
               <View style={styles.nomalOptions}>
                  <Text style={{color: 'white', fontSize: 18}}>Danh sách to</Text>
               </View>
               <View style={styles.nomalOptions1}>
                  <Text style={{color: '#000', fontSize: 18}}>Danh sách to</Text>
               </View>
            </View>
         </View>

         <View style={{top: 80}}>
            <Text>Thay đổi</Text>
         </View>
      </View>
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
      width: 180,
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
      width: 180,
      backgroundColor: '#e1e7e8',
      top: 60,
      borderRadius: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
   }
});