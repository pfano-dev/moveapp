import { View, Text,ImageBackground,TouchableOpacity } from 'react-native'
import React,{useState , useEffect} from 'react'
import styles from './styles'
import Iconi from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {



  
  const navigation = useNavigation();

  return (
    <View style={{paddingHorizontal:15, backgroundColor:'white',height:'100%'}}>



        <View style={styles.headerView}>
        <Text style={[styles.header,{color:'gray',marginVertical:0}]}>Who you are?</Text>  
        <Text style={[styles.header,{color:'gray',marginVertical:0}]}>Driver or Landlord!!!</Text> 
        <Text style={[styles.header,{marginVertical:30}]}>You can select Driver or  landlord card to register</Text> 
        </View>
        <TouchableOpacity
         onPress={()=>navigation.navigate("Notification")}
        >
      <ImageBackground source={require('../../assets/Driver.jpg')}  imageStyle={{borderRadius: 10}} style={styles.cardView}>
     <View style={styles.card}>
       <View >
       {<Iconi name="car-key" size={130} color="white" />}
       </View>
  <View>
    <Text style={styles.cardText}>Driver</Text>
    <Text style={styles.cardText}> Be A Delivery Driver</Text>
  </View>
  <View>
  <Icon name="arrow-right" size={30} color="white" />
  </View>


     </View>
      </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity
       onPress={()=>navigation.navigate("ViewRoom")}
      >
      <ImageBackground source={require('../../assets/house.jpg')}  imageStyle={{borderRadius: 10}} style={styles.cardView}>
     <View style={{height:'100%',width:'100%',backgroundColor:'#000000aa',borderRadius:10}}>

     <View style={styles.card}>
       <View >
       {<Iconi name="home-outline" size={130} color="white" />}
       </View>
  <View>
    <Text style={styles.cardText}>Landlord</Text>
    <Text style={[styles.cardText,{width:200}]}>  Share your Room or House</Text>
  </View>
  <View>
  <Icon name="arrow-right" size={30} color="white" />
  </View>


     </View>


     </View>
     </ImageBackground>
     </TouchableOpacity>
      
    </View>
  )
}

export default HomeScreen