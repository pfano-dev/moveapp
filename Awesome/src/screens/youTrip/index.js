import { StyleSheet, Text, View, FlatList, TouchableOpacity,RefreshControl } from 'react-native'
import React,{useState , useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { listNows } from '../../graphql/queries'
import { listSchedules } from '../../graphql/queries'
import { ScrollView } from 'react-native-gesture-handler';

const YouTrip  = () => {
  
  const navigation = useNavigation();

  const [refreshing, setRefreshing] = useState(false);
  

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchRooms();
    await fetchSchedule();
    setRefreshing(false);
  };

  const [oders, setOders] = useState([])
  

  const [schedule, setSchedule] = useState([])


console.log('schedule',schedule)
  const fetchRooms = async () => {
    
    try {
        const listData = await API.graphql(graphqlOperation(listNows))
        const oders = listData.data.listNows.items
     console.log(oders)
   setOders(oders)

  } catch (err) { console.log('error fetching actors') }

}



const fetchSchedule = async () => {
    
  try {
      const listData = await API.graphql(graphqlOperation(listSchedules))
      const schedule = listData.data.listSchedules.items
   console.log(schedule)
 setSchedule(schedule)

} catch (err) { console.log('error fetching actors') }

}



   
useEffect(() => {
  fetchRooms();
  fetchSchedule()
}, [])





const ScheduleDis = ({typ}) => {

  const date = typ.createdAt
const date_in_desired_format = date.split("T")[0]; 

console.log(date_in_desired_format); // 2021-02-23
   
  return (
   <TouchableOpacity
   >
       <View style={[styles.container,{width:'100%'}]}>
           <View style={[styles.inner,{width:'100%'}]}>

          

<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<Text style={styles.message}>{date_in_desired_format}</Text>
           <View style={[styles.containers,{}]}>
<Text style={[styles.message,{}]}>schedule</Text>
</View>

</View>
  
<Text style={styles.name}> From : {typ.origins} </Text>

<Text style={styles.name}>To : {typ.destinations}</Text>
<Text style={styles.name}>Date : {typ.date}</Text>

</View>


          
       </View>
 
</TouchableOpacity>
  
 );
};





  const List = ({type}) => {
   

    const date = type.createdAt
    const date_in_desired_format = date.split("T")[0]; 
    
    console.log(date_in_desired_format); // 2021-02-23
       

    return (
     <TouchableOpacity
     onPress={()=>navigation.navigate('TripInfo')}
     >  
         <View style={styles.container}>
             <View style={styles.inner}>

            
<View>
<Text style={styles.message}>{date_in_desired_format}</Text>
<Text style={styles.name}> From : {type.origins} </Text>

<Text style={styles.name}>To : {type.destinations}</Text>

</View>
</View>
<View>
<View style={[styles.containers]}>
<Text style={[styles.message,{}]}>Now</Text>
</View>   

</View>
         </View>

  </TouchableOpacity>
    
   );
 };



  return (

    <ScrollView    refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }>
    <View>




{oders.map((row) => (
     <List
          type={row}
          key={row?.id}
       
        />
    
      ))}




{schedule.map((row) => (

     <ScheduleDis
          typ={row}
          key={row?.id}
       
        />
        
      ))}








{/*   

{oders.map((row) => (



<View key={row?.id}>
    <Text>
        {row?.destinations}
    </Text>
  

</View>
))} */}


{/* <FlatList
              data={Historys}
              renderItem={({item, index}) => <List Chat={item} index={index} />}
             
            /> */}
    </View>
    </ScrollView>
  )
}

export default YouTrip 

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
       fontSize:15,
       fontWeight:'bold',
       padding:10,
       width:250
   },
 
   message:{
 color:'#07744A'
   }
 ,
   
   textMessage:{
     padding:10
   },
 
  
  





})