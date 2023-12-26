import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import FCItem from "./FCItem";

const ForeignCurrency = ({ title, time, date, source }) => {
   return (
      <View style={styles.container}>
         <Text style={styles.txtTitle}>
            {title}
         </Text>
         <View style={styles.view}>
            <View style={styles.viewMiddle}>
               <FCItem
                  imageFlag={require('../../assets/usd.png')}
                  typeOfCurrency={"USD"}
                  giaMua={"22.222.22"}
                  giaBan={"22.222"}
                  iconChange={require('../../assets/triangle_tang.png')}
               />
            </View>
            <View style={styles.line}></View>
            <View style={styles.txtUpdate}>
               <Text>Nguồn: {source}</Text>
               <Text>Cập nhật: {time} {date}</Text>
            </View>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
   },
   txtTitle: {
      marginTop: 15,
      fontSize: 16,
      fontWeight: 'bold',
   },
   view: {
      //alignItems: 'center',
      width: '100%',
      height: 160,
      borderRadius: 10,
      marginVertical: 10,
      //backgroundColor: 'red',
      borderColor: '#e6e6e6',
      borderWidth: 1,
   },
   viewSoLuong: {
      justifyContent: 'center',
      paddingLeft: 10,
      height: 30,
      width: '100%',
      backgroundColor: '#e6b800',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
   },
   txtSoLuong: {
      fontSize: 15,
      color: 'white',
   },
   line: {
      //marginTop: ,
      height: 1,
      width: '95%',
      backgroundColor: '#e6e6e6',
      marginLeft: 10,
   },
   txtUpdate: {
      padding: 10,
   },
   viewMiddle: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      height: 100,
      //backgroundColor: 'red',
   },
});

export default ForeignCurrency;