import { View, Text,ImageBackground,TouchableOpacity, Alert,Image } from 'react-native'
import React,{useState , useEffect} from 'react'
import styles from './styles'
import Iconi from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { listNows } from '../../graphql/queries' 
import { listSchedules } from '../../graphql/queries'
// import {Storage} from 'aws-amplify'
// import { listProducts } from '../../graphql/queries'
import { deleteNow } from "../../graphql/mutations";
import { deleteSchedule } from "../../graphql/mutations";

const Notification = () => {


  const [show, setShow] = useState(true)



// console.log(todos[1])


  const  alertMessage =(type)=>{

    Alert.alert(
      'Decline',
  
      'Decline Delivery',
  
      [
        {text:'NO',
        onPress:() => console.log(''),
        style:'cancel'
      },
        {text:'YES',
        onPress:() => onDeleteTodo(type)
      }
      ]
  
    
    )
  }



  const  alertMessages =(typ)=>{

    Alert.alert(
      'Decline',
  
      'Decline Delivery',
  
      [
        {text:'NO',
        onPress:() => console.log(''),
        style:'cancel'
      },
        {text:'YES',
        onPress:() => onDeleteTodos(typ)
      }
      ]
  
    
    )
  }





  const onDeleteTodos = async ({ id }) =>  {
    try {
      const newTodoArray = schedule.filter((todo) => todo.id !== id);
      setSchedule(newTodoArray);
      await API.graphql(graphqlOperation(deleteSchedule, { input: { id } }));
    } catch (e) {
      console.log(e);
    }
  }






  const onDeleteTodo = async ({ id }) =>  {
    try {
      const newTodoArray = oders.filter((todo) => todo.id !== id);
      setOders(newTodoArray);
      await API.graphql(graphqlOperation(deleteNow, { input: { id } }));
    } catch (e) {
      console.log(e);
    }
  }









  const navigation = useNavigation();

  const [oders, setOders] = useState([])
  
  const fetchRooms = async () => {
    
    try {
        const listData = await API.graphql(graphqlOperation(listNows))
        const oders = listData.data.listNows.items
   setOders(oders)

  } catch (err) { console.log('error fetching actors') }

}



const [schedule, setSchedule] = useState([])


const schedules = async () => {
  
  try {
      const listData = await API.graphql(graphqlOperation(listSchedules))
      const schedule = listData.data.listSchedules.items
      setSchedule(schedule)

} catch (err) { console.log('error fetching actors') }

}






useEffect(() => {
  fetchRooms();
  schedules();
}, [])









const Lis = ({typ}) => {
   
  return (
   <TouchableOpacity
   >
       <View style={styles.container}>
           <View style={styles.inner}>    
<View>
  <View style={{flexDirection:'row', justifyContent:'space-between',width:'100%',paddingHorizontal:10}}>

  <View style={[styles.containers,{}]}>
<Text style={[styles.message,{fontWeight:'bold',fontSize:18,color:'orange'}]}>Schedule</Text>
</View>   

<View style={styles.containers}>
<Text style={styles.message}>{typ.createdAt}</Text>
</View>

  </View>

<Text style={styles.name}> From : {typ.origins} </Text>

<Text style={styles.name}>To : {typ.destinations}</Text>

</View>
<View style={{flexDirection:'row', justifyContent:'space-between',width:'100%',padding:10,paddingHorizontal:20}}>

<TouchableOpacity
onPress={()=>alertMessages(typ)}>
<Text style={{fontSize:20 ,color:'red'}}>Decline</Text>
</TouchableOpacity>

<TouchableOpacity
onPress={()=> navigation.navigate('DriverMap',{type})}>
<Text style={{fontSize:20,color:'green'}} >Accept</Text>
</TouchableOpacity>
</View>
</View>
       </View>
 
</TouchableOpacity>
  
 );
};














const List = ({type}) => {
   
  return (
   <TouchableOpacity
   >
       <View style={styles.container}>
           <View style={styles.inner}>    
<View>
  <View style={{flexDirection:'row', justifyContent:'space-between',width:'100%',paddingHorizontal:10}}>

  <View style={[styles.containers,{}]}>
<Text style={[styles.message,{fontWeight:'bold',fontSize:18,color:'orange'}]}>Now</Text>
</View>   

<View style={styles.containers}>
<Text style={styles.message}>{type.createdAt}</Text>
</View>

  </View>

<Text style={styles.name}> From : {type.origins} </Text>

<Text style={styles.name}>To : {type.destinations}</Text>

</View>
<View style={{flexDirection:'row', justifyContent:'space-between',width:'100%',padding:10,paddingHorizontal:20}}>

<TouchableOpacity
onPress={()=>alertMessage(type)}>
<Text style={{fontSize:20 ,color:'red'}}>Decline</Text>
</TouchableOpacity>

<TouchableOpacity
onPress={()=> navigation.navigate('DriverMap',{type})}>
<Text style={{fontSize:20,color:'green'}} >Accept</Text>
</TouchableOpacity>
</View>
</View>
       </View>
 
</TouchableOpacity>
  
 );
};

  return (
  
  <View>



  

<View>
{oders.map((row) => (

<TouchableOpacity
key={row?.id}>  

     <List
          type={row}
          key={row?.id}
       
        />
         </TouchableOpacity>
      ))}
      </View>

 

      {schedule.map((row) => (

<Lis
     typ={row}
     key={row?.id}
  
   />
   
 ))}




    </View>
  )
}

export default Notification;