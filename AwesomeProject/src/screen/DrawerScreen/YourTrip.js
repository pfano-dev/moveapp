import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const YourTrip  = () => {
  
  const navigation = useNavigation();

  const Historys = [
    {
      id: '0',
      location: 'mamelodi TO thembisa',
      day: '20-08-2022',
      duration: '15 days left',
    },
    {
      id: '1',
      location: 'Limpopo TO Gauteng',
      day: '10-01-2022',
      duration: '7 days left',
    },
   
  ];




  const List = ({Chat, index}) => {
   
    return (
     <TouchableOpacity
     onPress={() => navigation.navigate('TripDetails', Chat)}
     >
         <View style={styles.container}>
             <View style={styles.inner}>

            
<View>

<Text style={styles.name}>{Chat.location} </Text>

<Text style={styles.textMessage}>{Chat.day}</Text>

</View>
</View>

<View style={styles.containers}>
<Text style={styles.message}>{Chat.duration}</Text>
</View>
           
         </View>
   
  </TouchableOpacity>
    
   );
 };



  return (
    <View>
<FlatList
              data={Historys}
              renderItem={({item, index}) => <List Chat={item} index={index} />}
             
            />
    </View>
  )
}

export default YourTrip 

const styles = StyleSheet.create({

  container: {
    flexDirection:'row',
    padding:15,
    justifyContent:"space-between",
    borderBottomColor:'#eeeeee',
    borderBottomWidth:1,
    backgroundColor:'white',
    margin:5
   }, 

   containers:{
 backgroundColor:'#EDFCF7',
 alignItems:'center',
width:80,
borderRadius:20,
justifyContent:'center',
height:40
   },
   
   name:{
       fontSize:20,
       fontWeight:'bold',
       padding:10
   },
 
   message:{
 color:'#07744A'
   }
 ,
   
   textMessage:{
     padding:10
   },
 
  
  





})