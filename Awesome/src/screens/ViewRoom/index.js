import { View, Text,TextInput,TouchableOpacity,Image,
    Animated, 
    Dimensions,
    FlatList,
    SafeAreaView,
    ScrollView,
    RefreshControl, 
    Pressable,
    Alert
  } from 'react-native'
  import React,{useState , useEffect} from 'react'
  import styles from './styles'
  import Iconi from 'react-native-vector-icons/Feather';
  import hotels from '../../assets/data/hotel';
  import Icon from 'react-native-vector-icons/MaterialIcons';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import { useNavigation } from '@react-navigation/native';
  import Amplify, { API, graphqlOperation } from 'aws-amplify'
  import {Storage} from 'aws-amplify'
  import { listProducts } from '../../graphql/queries'
  import { deleteProduct } from "../../graphql/mutations";

  const {width} = Dimensions.get('screen');
  const cardWidth = width ;
  
  const myIcon = <Iconi name="search" size={30} color="#AAAAAA" />;
  
  const ViewRoom = () => {
    


  
    const [todos, setTodos] = useState([])



    // async function onDeleteTodo({ id })

    const onDeleteTodo = async ({ id }) =>  {
      try {
        const newTodoArray = todos.filter((todo) => todo.id !== id);
        setTodos(newTodoArray);
        await API.graphql(graphqlOperation(deleteProduct, { input: { id } }));
      } catch (e) {
        console.log(e);
      }
    }
  

    const  alertMessage =(ty)=>{

      Alert.alert(
        'DELETE',
    
        'are you sure you want to DELETE a room',
    
        [
          {text:'NO',
          onPress:() => console.log(''),
          style:'cancel'
        },
          {text:'YES',
          onPress:() => onDeleteTodo(ty)
        }
        ]
    
      
      )
    }


    const fetchTodos = async () => {
    try {
      //fetch the recipes from the server
      const todoData = await API.graphql(graphqlOperation(listProducts));
      let todos = todoData.data.listProducts.items

      // for all todos get the pre-signURL and store in images field

      todos = await Promise.all(todos.map(async (todo) =>{
        const imageKey = await Storage.get(todo.image, { level: 'private' })
        console.log(imageKey)
        todo.image = imageKey;
        return todo;
      }));
      setTodos(todos)
    } catch (err) { console.log('error fetching todos ') + err }
  }


  useEffect(() => {
    fetchTodos()
  }, [])
  

console.log(todos[1])



const [refreshing, setRefreshing] = useState(false);
  

const onRefresh = async () => {
  setRefreshing(true);
  await fetchTodos();
  setRefreshing(false);
};

 



     const navigation = useNavigation();
    
    const Card = ({ty, index,}) => {
    
       return (
      <Pressable
      
      onPress={() => {
        alertMessage(ty);
      }}
       
      >
     <Animated.View style={styles.card}
     
    
     >

  <View style={styles.priceTag}>
              <Text
                style={{color: "#eee", fontSize: 20, fontWeight: 'bold'}}>
                R{ty.price}
              </Text>
            </View>
  
       
         <Image source={{uri:ty.image}} style={styles.cardImage}/> 
  
  
         <View style={styles.cardDetails}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text style={{fontWeight: 'bold', fontSize: 17}}>
                    {ty.roomName}
                  </Text>
                  <Text style={{color:'grey', fontSize: 12}}>
                  {ty.province} {ty.location} 
                  </Text>
                </View>
                <Icon name="bookmark-border" size={26} color={"black"} />
              </View>
              <Text style={{fontSize: 11, color:'black'}}>{ty.roomType} </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Icon name="star" size={15} color='orange' />
                  <Icon name="star" size={15} color='orange' />
                  <Icon name="star" size={15} color='orange' />
                  <Icon name="star" size={15} color='orange' />
                  <Icon name="star" size={15} color='grey' />
                </View>
                <Text style={{fontSize: 10, color:'grey'}}>365 reviews</Text>
              </View>
            </View>
     </Animated.View>
     </Pressable>
      );
    };
  
  
  

  
  
  
  
  
    return (
      <View style={{backgroundColor:'white',height:'100%'}}>



<View style={styles.search}>
  <TouchableOpacity onPress={()=>navigation.navigate("AddRoom")}
          style={{flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
  <Text style={{fontSize:25,color:'#4caf50'}}> add room</Text>
  {<Ionicons name="add-circle-outline" size={25} color="#4caf50" />}
  </TouchableOpacity>
        
          </View>
          
          <View style={styles.search}>
          <Text style={styles.text}> your rooms or houses </Text>
          </View>
         
     

         
            <FlatList
              data={todos}
              keyExtractor={({ id }) => id}
              renderItem={({item, index}) => <Card  ty={item} index={index} />}
             
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
            />


       
      </View>
    )
  }
  
  export default  ViewRoom;