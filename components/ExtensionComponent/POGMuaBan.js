import { Text, View } from "react-native";

const POGMuaBan = ({title, price, change}) => {
   return (
      <View>
         <Text>{title}</Text>
         <Text>{price}</Text>
         <Text>{change}</Text>
      </View>
   );
};

export default POGMuaBan;