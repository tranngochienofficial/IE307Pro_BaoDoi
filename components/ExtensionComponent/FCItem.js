import { StyleSheet, Text, View, Image } from "react-native";

const FCItem = ({ imageFlag, typeOfCurrency, giaMua, giaBan, iconChange }) => {
   return (
      <View style={styles.view0}>
         {/* <View style={styles.viewLineLeft}></View> */}
            <View style={styles.view1}>
               <View style={styles.view2}>
                  <Image
                     source={imageFlag}
                     style={styles.imgFlag}
                  />
                  <Text style={styles.txtType}>{typeOfCurrency}</Text>
               </View>
               <View style={styles.view2}>
                  <Text>Mua:</Text>
                  <Text style={styles.txtGia}>{giaMua}</Text>
                  <Image
                     source={iconChange}
                     style={styles.imgIcon}
                  />
               </View>
               <View style={styles.view2}>
                  <Text>Bán: </Text>
                  <Text style={styles.txtGia}>{giaBan}</Text>
                  <Image
                     source={iconChange}
                     style={styles.imgIcon}
                  />
               </View>
            </View>
      </View>

   );
};

const styles = StyleSheet.create({
   view0: {
      flexDirection: 'row',
      justifyContent: 'center',
   },
   view1: {
      flexDirection: 'column',
      //padding: 5,
   },
   imgFlag: {
      height: 20,
      width: 30,
      borderRadius: 5,
      marginRight: 7,
   },
   view2: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 3,
   },
   txtType: {
      color: 'black',
   },
   txtGia: {
      color: 'black',
      marginLeft: 15,
      marginRight: 7,
   },
   imgIcon: {
      height: 10,
      width: 10,
   },
   viewLineLeft: {
      backgroundColor: 'red',
      height: 1,
      width: 20,
      margin: 10,
   },
});

export default FCItem;