import { View, Text,TextInput,TouchableOpacity,Image,Animated, Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView ,
  RefreshControl } from 'react-native'
import React,{useState, useEffect} from 'react'
import styles from './styles'
import Iconi from 'react-native-vector-icons/Feather';
import hotels from '../../assets/data/hotels';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import {Storage} from 'aws-amplify'
import { listProducts } from '../../graphql/queries'


const {width} = Dimensions.get('screen');
const cardWidth = width / 1.8;

const myIcon = <Iconi name="search" size={30} color="#AAAAAA"/>;
const myIconi = <Icon name="keyboard-arrow-right" size={30} color="black"/>;
const myIconoi = <Icon name="keyboard-arrow-right" size={16} color="#AAAAAA"/>;
const SearchBar = () => {

  const navigation = useNavigation();

  const categories = ['All', 'Single', 'Family', 'Sharing'];
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const scrollX = React.useRef(new Animated.Value(0)).current;

  const CategoryList = ({navigation}) => {
    return (
      <View style={styles.categoryListContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}
            >
            <View>
              <Text
              
              style={{
                ...styles.categoryListText,
                color:
                  selectedCategoryIndex == index
                    ? '#eee'
                    : 'black'
              }}
              
              >
                {item}
              </Text>
      
              {selectedCategoryIndex == index && (
                <View
                  style={{
                    height: 3,
                    width: 30,
                    backgroundColor: '#eee',
                    marginTop: 2,
                  }}
                />
              )}

            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };







  const TopHotelCard = ({hotel}) => {
    return (
      <TouchableOpacity
      >
      <View style={styles.topHotelCard}>
        <View
          style={{
            position: 'absolute',
            top: 5,
            right: 5,
            zIndex: 1,
            flexDirection: 'row',
          }}>
          <Icon name="star" size={15} color={'orange'} />
          <Text style={{color: "#eee", fontWeight: 'bold', fontSize: 15}}>
            5.0
          </Text>
        </View>
        <Image style={styles.topHotelCardImage} source={hotel.image} />
        <View style={{paddingVertical: 5, paddingHorizontal: 10}}>
          <Text style={{fontSize: 10, fontWeight: 'bold'}}>{hotel.name}</Text>
          <Text style={{fontSize: 7, fontWeight: 'bold', color:'grey'}}>
            {hotel.location}
          </Text>
        </View>
      </View>
      </TouchableOpacity>
    );
  };




const [todos, setTodos] = useState([])



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



const search = todos;
console.log("this is search.........................",search)



const searchName =(input)=>{

let sData = search 
  let data = todos
  let searchData = data.filter((item)=>{
    return item.province.toLowerCase().includes(input.toLowerCase())
  });

{ input?
setTodos(searchData):
setTodos(sData)
}
}













const Card = ({ty, index,}) => {

return (

<TouchableOpacity
onPress={() => navigation.navigate('RoomDetails',ty)}
 style={styles.card}>

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
</TouchableOpacity>

);
};



  return (
    <View style={{backgroundColor:'white',height:'100%'}}>
        <View style={styles.search}>
        <Text style={styles.text}>Find your room or house to rent</Text>
        <View style={styles.inputView}>
      
{myIcon}
<TextInput
        style={styles.input}
        placeholder="Search Location"
    onChangeText={(input)=>{
searchName(input)

    }}

      />
        </View>
        </View>
        <CategoryList />
   
        <View>
          <FlatList
            horizontal
            data={todos}
            contentContainerStyle={{
              paddingVertical: 30,
              paddingLeft: 20,
            }}
           
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => <Card ty={item} index={index} />}
            keyExtractor={(item, index) =>index.toString()} 

     
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }


          />
          <TouchableOpacity style={{flexDirection:'row', justifyContent:"center",alignItems:'center',paddingBottom:20}}
          onPress={() => navigation.navigate("DisplayRoom")}
          >
          <Text style={{color:'black',textAlign:'center', fontSize:20, fontWeight:'bold'}}>Show all</Text>
          {myIconi}
          </TouchableOpacity>
      
        </View>
  
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <Text style={{fontWeight: 'bold', color:'grey'}}>
          Suggestions
          </Text>
          <TouchableOpacity 
          style={{flexDirection:'row', justifyContent:"center",alignItems:'center'}}
           onPress={() => navigation.navigate("DisplayRoom")}
          >
          <Text style={{color:'grey'}}>Show all</Text>
          { myIconoi }
          </TouchableOpacity>
        </View>
        <FlatList
          data={hotels}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 20,
            marginTop: 20,
            paddingBottom: 30,
          }}
          renderItem={({item}) => <TopHotelCard hotel={item} />}
        />

    </View>
  )
}

export default SearchBar