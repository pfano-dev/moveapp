import { View, Text,ImageBackground,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import styles from './styles'
import Icon from 'react-native-vector-icons/Feather';
import Iconi from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconio from 'react-native-vector-icons/MaterialIcons';
import RoomSearch from '../../screen/RoomSearch';



const myIconiou = <Iconio name="house" size={100} color="white" />;
const myIconio = <Iconi name="calendar-check-outline" size={70} color="white" />;
const myIconi = <Icon name="arrow-right" size={30} color="white" />;
const myIcon = <Icon name="clock" size={55} color="white" />;

const CovidMessage = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Covid-19 regulations must be  followed when using our service!!</Text>
      <View style={styles.inContainer}>

<View style={styles.deliveryView}>

<TouchableOpacity 
 onPress={()=>navigation.navigate("SearchScreen")}
style={styles.deliveryCard} >
    
<ImageBackground source={require('../../assets/images/watch2.jpg')}  imageStyle={{borderRadius: 20}} style={styles.image}>
     

     <View style={styles.deliveryCards}>
          <View style={styles.parcent}>
              <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>15% OFF</Text>
          </View>
          <View style={styles.now}>
      <Text>{myIcon}</Text>
      <Text  style={{fontSize:22,fontWeight:'bold',color:'white', width:100, marginLeft:10}}>same day delivery</Text>
      
          </View>
          <View style={styles.go}>
      <Text style={{fontSize:18,fontWeight:'bold',color:'#eceff1'}}>Now</Text>
      <Text>{myIconi}</Text>
          </View>
          
          </View> 
      
      
          </ImageBackground>
     
     
  
  
  </TouchableOpacity>


        
<TouchableOpacity 
 onPress={()=>navigation.navigate("ScheduleSearch")}
style={styles.deliveryCard} >
        
    <ImageBackground source={require('../../assets/images/calender.jpg')} style={styles.image}   imageStyle={{borderRadius: 20}}>
    
   <View style={[styles.deliveryCards,{backgroundColor:'rgba(00,00,00,0.7)'}]}>


<View style={styles.Schedule}>

<Text  style={{fontSize:22,fontWeight:'bold',color:'white',  margin:10}}>Schedule your delivery</Text>
<Text>{myIconio}</Text>
    </View>
    
<View style={styles.go}>
<Text style={{fontSize:18,fontWeight:'bold',color:'#eceff1'}}>Schedule</Text>
<Text>{myIconi}</Text>
    </View>
    </View>
  
    </ImageBackground>
        
    </TouchableOpacity>
       
    


</View>

<View style={styles.roomView}>
<TouchableOpacity 
 onPress={()=>navigation.navigate("RoomSearch")}
 style={styles.roomCard}
 >
<ImageBackground source={require('../../assets/images/house2.jpg')}
 style={styles.images}   imageStyle={{borderRadius: 20}}>

<View style={styles.roomCards}>
    
<View style={styles.rent}>
<Text>{myIconiou}</Text>
<Text  style={{fontSize:30,fontWeight:'bold'
,color:'white', width:180, marginLeft:20}}>House & Rooms to Rent</Text>
<Text>{myIconi}</Text>
    </View>
    
    </View>
    

     
     
     </ImageBackground>


</TouchableOpacity>
</View>



      </View>
    </View>
  )
}

export default CovidMessage