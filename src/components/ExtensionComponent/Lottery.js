import { Image, StyleSheet, Text, View } from "react-native";


const Lottery = ({title, image}) => {
   return(
      <View style={styles.view}>
         <Text style={styles.txtTitle}>{title}</Text>
         <Image 
            source={image}
            style={styles.image}
         />
      </View>      
   );
};

const styles = StyleSheet.create({
   view:{
      marginTop: 15,
      marginBottom: 25,
   },
   txtTitle: {
      fontSize: 16,
      fontWeight: 'bold',
   },
   image: {
      width: '100%',
      height: 130,
      borderRadius: 10,
      marginVertical: 10,
   },
});

export default Lottery;