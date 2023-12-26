import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

const Weather = ({title, image}) => {
   return(
      <View style={styles.view}>
         <Text style={styles.txtTitle}>{title}</Text>
         <ImageBackground
            source={image}
            style={styles.image}
            imageStyle={{borderRadius: 10}}>
            <Text>no</Text>
         </ImageBackground>
      </View>      
   );
};

const styles = StyleSheet.create({
   view:{
      marginTop: 15,
   },
   txtTitle: {
      fontSize: 16,
      fontWeight: 'bold',
   },
   image: {
      width: '100%',
      height: 230,
      borderRadius: 10,
      marginVertical: 10,
   },
});

export default Weather;