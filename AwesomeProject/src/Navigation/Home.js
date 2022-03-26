import { View, Text, Image } from 'react-native'
import React ,{useState , useEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screen/HomeScreen/index"
import SearchScreen from '../screen/SearchScreen/index'
import SearchResults from '../screen/SearchResults/index';
import ConfimScreen from '../screen/ConfimScreen/index'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconi from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RoomSearch from '../screen/RoomSearch';
import ScheduleSearch from '../screen/SearchScreen/ScheduleSearch';
import DisplayRoom from '../screen/DisplayRoom';
import RoomDetails from '../screen/RoomDetails';
import ChatList from '../screen/ChatScreen/ChatList';
import Inbox from '../screen/ChatScreen/Inbox';
import Payment from '../screen/Payment';
import Now from '../screen/FinalScreen/Now';
import Schedule from '../screen/FinalScreen/Schedule';
import TripDetails from '../screen/DrawerScreen/YourTrip';
import { Auth , graphqlOperation } from 'aws-amplify';
import { API } from 'aws-amplify';

const Stack = createNativeStackNavigator();

const myIcon = <Icon name="message-text-outline" size={30} color="black" />;
const myIconi = <Iconi name="menu" size={30} color="black" />;


const Home = () => {

  const [name, setName] = useState('')


  const onSubmit = async () => {

  try {
    const user = await Auth.currentAuthenticatedUser();
const name = user.username
console.log(name)
    setName(name)

} catch (err) { console.log('error fetching actors') }
  }




  useEffect(() => {
    onSubmit()

}, [])
 
  return (

    <Stack.Navigator>

      <Stack.Screen name="HomeScreen" component={HomeScreen} 
      
        options={({navigation})=>({
        headerTitleAlign:'center',
        headerStyle:{
          backgroundColor:'#FAFAFA'
        },
        headerTitle:props=><Text  style={{fontWeight:"bold",fontSize:18}}> Hello, {name}
        </Text>,
        headerRight:()=>
        <TouchableOpacity onPress={()=> navigation.navigate('ChatList')} style={{height:35,width:50,alignItems:'center'}}>
   <Text style={{fontWeight:"bold"}}>{myIcon}</Text>
        </TouchableOpacity>,
      headerLeft:()=>
      <TouchableOpacity onPress={()=> navigation.openDrawer()} style={{height:35,width:50,alignItems:'center'}}>
      <Text style={{fontWeight:"bold"}}>{myIconi}</Text>
           </TouchableOpacity>,
      })}
      />

<Stack.Screen name="SearchScreen" component={SearchScreen}
  options={{
    headerShown: false,
  }}

/>
<Stack.Screen name="SearchResults" component={SearchResults}

options={{
  headerShown: false,
}}
/>
<Stack.Screen name="ConfimScreen" component={ConfimScreen}

options={{
  headerShadowVisible: false,
  headerTitleAlign:'center',
headerStyle:{
  backgroundColor:'white'

},
headerTitle:props=><Text  style={{fontWeight:"bold",fontSize:18}}>    </Text>,

}}

/>

<Stack.Screen name="RoomSearch" component={RoomSearch}

options={{
  headerShown: false,
}}
/>

<Stack.Screen name="ScheduleSearch" component={ScheduleSearch}

options={{
  headerShown: false,
}}
/>

<Stack.Screen name="DisplayRoom" component={DisplayRoom}

options={{
  headerShown: false,
}}
/>


<Stack.Screen name="RoomDetails" component={RoomDetails}

options={{
  headerShown: false,
}}
/>

<Stack.Screen name="ChatList" component={ChatList}

options={{
  title:"Messages",
  headerTitleAlign:'center',
}}
/>


<Stack.Screen name="Inbox" component={Inbox}

options={({route})=>({
 


  headerRight:()=>
        <View style={{height:35,width:50,alignItems:'center',flexDirection:'row'}}>
     
   <Text style={{fontWeight:"bold"}}>{route.params.detail}</Text>
        </View>,
 headerTitle:props=>
 
 <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between', width:150}}>
         <Image style={{   width:40,
   height:40,
   borderRadius:50,}} source={route.params.image} />
    <Text  style={{fontWeight:"bold",fontSize:18}}>{route.params.name}</Text>
 </View>
,
})

}

/>

<Stack.Screen name="Payment" component={Payment}

options={{
  headerStyle:{
    backgroundColor:'#eee'
  },
  headerTitleAlign:'center',
  headerShadowVisible: false,
  headerTitle:props=><Text  style={{fontWeight:"bold",fontSize:18}}> Payment Information</Text>,
}}
/>

<Stack.Screen name="Now" component={Now}

options={{
  headerShown: false,
}}
/>


<Stack.Screen name="Schedule" component={Schedule}

options={{
  headerStyle:{
    backgroundColor:'white'
  },
  headerTitleAlign:'center',
  headerShadowVisible: false,
  headerTitle:props=><Text  style={{fontWeight:"bold",fontSize:18}}>Your Delivery</Text>,
}}
/>

<Stack.Screen name="TripDetails" component={TripDetails}

options={{
  headerStyle:{
    backgroundColor:'#eee'
  },
  headerTitleAlign:'center',
  headerShadowVisible: false,
  headerTitle:props=><Text  style={{fontWeight:"bold",fontSize:18}}>Your Delivery</Text>,
}}
/>



    </Stack.Navigator>
  
  )
}

export default Home