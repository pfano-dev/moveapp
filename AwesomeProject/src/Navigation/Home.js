import { View, Text } from 'react-native'
import React from 'react'
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

const Stack = createNativeStackNavigator();

const myIcon = <Icon name="message-text-outline" size={30} color="black" />;
const myIconi = <Iconi name="menu" size={30} color="black" />;


const Home = () => {
  return (

    <Stack.Navigator>

      <Stack.Screen name="HomeScreen" component={HomeScreen} 
      
        options={({navigation})=>({
        headerTitleAlign:'center',
        headerStyle:{
          backgroundColor:'#FAFAFA'
        },
        headerTitle:props=><Text  style={{fontWeight:"bold",fontSize:18}}> Hello, Muleya</Text>,
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
  headerShown: false,
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

options={{
 
  elevation:0,
  headerShadowVisible: false,
  headerTitleAlign:'center',
  backgroundColor:'#FAFAFA',
 
}}
/>


    </Stack.Navigator>
  
  )
}

export default Home