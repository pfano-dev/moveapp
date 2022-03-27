import { View, Text,ImageBackground,TouchableOpacity, Alert,Image } from 'react-native'
import React,{useState , useEffect} from 'react'
import styles from './styles'
import Iconi from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { listNows } from '../../graphql/queries'
// import {Storage} from 'aws-amplify'
// import { listProducts } from '../../graphql/queries'

const Notification = () => {


  const [show, setShow] = useState(true)


  
//   const [todos, setTodos] = useState([])



//     const fetchTodos = async () => {
//     try {
//       //fetch the recipes from the server
//       const todoData = await API.graphql(graphqlOperation(listProducts));
//       let todos = todoData.data.listProducts.items

//       // for all todos get the pre-signURL and store in images field

//       todos = await Promise.all(todos.map(async (todo) =>{
//         const imageKey = await Storage.get(todo.image, { level: 'private' })
//         console.log(imageKey)
//         todo.image = imageKey;
//         return todo;
//       }));
//       setTodos(todos)
//     } catch (err) { console.log('error fetching todos ') + err }
//   }


//   useEffect(() => {
//     fetchTodos
//   }, [])
  

// console.log(todos[1])





  const  alertMessage =()=>{

    Alert.alert(
      'Decline',
  
      'Decline Delivery',
  
      [
        {text:'NO',
        onPress:() => console.log(''),
        style:'cancel'
      },
        {text:'YES',
        onPress:() => setShow(false)
      }
      ]
  
    
    )
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
<View style={{flexDirection:'row', justifyContent:'space-between',width:'100%',padding:10,paddingHorizontal:20}}>

<TouchableOpacity
onPress={()=>alertMessage()}
>

<Text style={{fontSize:20 ,color:'red'}}>Decline</Text>
</TouchableOpacity>

<TouchableOpacity
onPress={()=> navigation.navigate('DriverMap',{type})}
>

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



  
{show?
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
:null
}

 


    </View>
  )
}

export default Notification;