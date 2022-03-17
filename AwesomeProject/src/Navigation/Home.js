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
        <View style={{height:35,width:50,alignItems:'center'}}>
   <Text style={{fontWeight:"bold"}}>{myIcon}</Text>
        </View>,
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





    </Stack.Navigator>
  
  )
}

export default Home