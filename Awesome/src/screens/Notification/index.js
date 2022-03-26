import { View, Text,ImageBackground,TouchableOpacity } from 'react-native'
import React,{useState , useEffect} from 'react'
import styles from './styles'
import Iconi from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { listNows } from '../../graphql/queries'

const Notification = () => {

  const navigation = useNavigation();

  const [oders, setOders] = useState([])
  
  const fetchRooms = async () => {
    
    try {
        const listData = await API.graphql(graphqlOperation(listNows))
        const oders = listData.data.listNows.items
   setOders(oders)

  } catch (err) { console.log('error fetching actors') }

}

useEffect(() => {
  fetchRooms();
}, [])


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
<View style={{flexDirection:'row', justifyContent:'space-between',width:'100%',padding:10}}>

<TouchableOpacity>
<Text style={{fontSize:25 ,color:'red'}}>Decline</Text>
</TouchableOpacity>

<TouchableOpacity
onPress={()=> navigation.navigate('DriverMap',{type})}
>

<Text style={{fontSize:25,color:'green'}} >Accept</Text>
</TouchableOpacity>
  

</View>

  

</View>






       </View>
 
</TouchableOpacity>
  
 );
};



  return (
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
  )
}

export default Notification;