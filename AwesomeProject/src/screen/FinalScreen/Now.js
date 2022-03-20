import { View, Text , Image, TouchableOpacity} from 'react-native';
import React from 'react';
import FinalMap from '../../component/FinalMap';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import Iconi from 'react-native-vector-icons/AntDesign';
import { useRoute } from "@react-navigation/native";

const Now = ({navigation}) => {

  const route = useRoute();

  const data = route.params;

  const types = data.types;
console.log(data)

  const origin = types.originLoc
  const destination =types.destinationLoc

  return (
    <View>
    <FinalMap origin={origin} destination={destination} />

    <View style={styles.container}>
<View style={styles.innerContainer}>
<Image style={styles.image} source={require('../../assets/images/profile2.jpg')} />
<Text style={{fontSize:18, fontWeight:'bold'}}>Muleya pfano</Text>
</View>
<Text style={styles.text}>Delivery type : Bakkie</Text>
<Text style={styles.text}>Bakkie Registration: XLM 789 L</Text>
<Text style={styles.text}>Bakkie model: Isuzu D-Max 250C Base 4x2</Text>
    </View>
    <View style={{padding:10}}>
        <TouchableOpacity  style={{flexDirection:'row',padding:10}}
      
        >
        <Icon name="phone-call" size={30} color="black"/>
        <Text style={{fontSize:18, fontWeight:'bold',marginLeft:10}}>Phone Call</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => navigation.navigate("ChatList")}
        style={{flexDirection:'row',padding:10}}>
        <Iconi name="message1" size={30} color="black"/>
        <Text style={{fontSize:18, fontWeight:'bold',marginLeft:10}}>Message</Text>
        </TouchableOpacity >
  
 
    </View>

    <TouchableOpacity  style={{flexDirection:'row',padding:10,justifyContent:'center',alignItems:"center"}}>
        <Iconi name="closecircleo" size={15} color="#ef5350"/>
        <Text style={{fontSize:15,marginLeft:10, color:'#ef5350'}}>cancel Delivery</Text>
        </TouchableOpacity >

    </View>
  )
}

export default Now