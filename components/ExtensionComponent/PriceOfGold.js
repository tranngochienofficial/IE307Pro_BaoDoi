import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import POGMuaBan from "./POGMuaBan";

const PriceOfGold = ({title, time, date}) => {
   return(
      <View style={styles.container}>
         <Text style={styles.txtTitle}>
            {title}
         </Text>
         <View style={styles.view}>
            <View style={styles.viewSoLuong}> 
               <Text style={styles.txtSoLuong}>SJC 1L, 10L, 1KG</Text>
            </View>
            <View style={styles.viewMiddle}>
               <POGMuaBan
                  title={"Mua"}
                  price={1}
                  change={"tang"}
               />
               <POGMuaBan
                  title={"Bán"}
                  price={2}
                  change={"giam"}
               />
            </View>
            <View style={styles.line}></View>
            <Text style={styles.txtUpdate}>Cập nhật: {time} {date}</Text>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   container:{
      flex: 1,
      justifyContent: 'center',
   },
   txtTitle: {
      marginTop: 15,
      fontSize: 16,
      fontWeight: 'bold',
   },
   view:{
      //alignItems: 'center',
      width: '100%',
      height: 160,
      borderRadius: 10,
      marginVertical: 10,
      //backgroundColor: 'red',
      borderColor: '#e6e6e6',
      borderWidth: 1,
   },
   viewSoLuong:{
      justifyContent: 'center',
      paddingLeft: 10,
      height: 30,
      width: '100%',
      backgroundColor: '#e6b800',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
   },
   txtSoLuong:{
      fontSize: 15,
      color: 'white',
   },
   line:{
      //marginTop: ,
      height: 1,
      width: '95%',
      backgroundColor: '#e6e6e6',
      marginLeft: 10,
   },
   txtUpdate: {
      padding: 10,
   },
   viewMiddle:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 90,
      padding: 10,
      //backgroundColor: 'red',
      paddingRight: 170,
   },
});

export default PriceOfGold;