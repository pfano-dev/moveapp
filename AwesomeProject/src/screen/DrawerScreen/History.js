import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

const History = () => {

  const Historys = [
    {
      id: '0',
      location: 'mamelodi TO thembisa',
      day: '20-08-2022',
      duration: '15 days ago',
    },
    {
      id: '1',
      location: 'Limpopo TO Gauteng',
      day: '10-01-2022',
      duration: '7 days ago',
    },
    {
      id: '2',
      location: 'pretoria TO mabopane',
      day: '10-01-2022',
      duration: '7 days ago',
    },
   
  ];



  
  const Rooms = [
    {
      id: '0',
      name: 'malebo sishoka',
     location: 'Thohoyandou',
      day: '10-01-2022',
      type: 'single',
      Province: 'Limpopo',
      duration: 'Owenr',
    },
    {
      id: '1',
     name: 'malebo sishoka',
     location: 'mamelodi',
      day: '10-01-2022',
      type: 'Family',
      Province: 'Gauteng',
      duration: 'Owenr',
    },
   
  ];




  const List = ({Chat, index}) => {
   
    return (
     <TouchableOpacity
 
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




 const Lists = ({Chat, index}) => {
   
  return (
   <TouchableOpacity

   >
       <View style={styles.container}>
           <View style={styles.inner}>      
<View>

<Text style={styles.text}>{Chat.location}</Text>
<Text style={styles.text}>{Chat.day}</Text>
<Text style={styles.text}>{Chat.type}</Text>
<Text style={styles.text}>{Chat.Province}</Text>

</View>
</View>

<View style={{alignItems:'center'}}>
<Text style={styles.name}>{Chat.name} </Text>
<Text>{Chat.duration}</Text>
</View>
         
       </View>
 
</TouchableOpacity>
  
 );
};



  return (
    <View>
      
      <View style={styles.main}>
<Text style={styles.messages} >Your Delivery</Text>
      <FlatList
              data={Historys}
              renderItem={({item, index}) => <List Chat={item} index={index} />}
             
            />
      </View>

      <View  style={styles.mainV}>
<Text style={styles.messages} >Your Rooms</Text>
      <FlatList
              data={Rooms}
              renderItem={({item, index}) => <Lists Chat={item} index={index} />}
             
            />
      </View>


  

    </View>
  )
}

export default History

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
 color:'#740719'
   }
 ,
   
   textMessage:{
     padding:10
   },
   messages:{
    color:'black',
    fontSize:20,
    fontWeight:'bold',
    padding:10,
    textAlign:'center',
    marginTop:10
      }
  ,
  main:{
    height:400,
    marginTop:10,
 
  }
  ,
  mainV:{
    height:300,
    marginTop:10,
  borderTopWidth:2,
  borderColor:"gray",
  },
  
  text:{
    marginTop:2,
marginLeft:20,
fontWeight:'bold'
  },




})