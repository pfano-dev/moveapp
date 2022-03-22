import { View, Text,TouchableOpacity  } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import AddRoom from '../screens/AddRoom'
import AddVehicle from '../screens/AddVehicle'
import ViewRoom from '../screens/ViewRoom'
import DriverMap from '../screens/DriverMap'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconi from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();

const myIcon = <Icon name="message-text-outline" size={30} color="black" />;
const myIconi = <Iconi name="menu" size={30} color="black" />;

const Home = () => {
  return (
  
    
        <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen}
options={({navigation})=>({
  headerShadowVisible: false,
  title:"Drivers App",
  headerTitleAlign:'center',

  headerLeft:()=>
  <TouchableOpacity onPress={()=> navigation.openDrawer()}  style={{height:35,width:50,alignItems:'center'}}>
  <Text style={{fontWeight:"bold"}}>{myIconi}</Text>
       </TouchableOpacity>,

})}/>


<Stack.Screen name="AddVehicle" component={AddVehicle}
options={{
  headerShadowVisible: false,
  title:"Regisger vehicle",
  headerTitleAlign:'center',
}}/>

<Stack.Screen name="ViewRoom" component={ViewRoom}

options={({navigation})=>({
  headerTitleAlign:'center',
  headerStyle:{
    backgroundColor:'#FAFAFA'
  },
  headerTitle:props=><Text  style={{fontWeight:"bold",fontSize:18}}> Hello, Muleya</Text>,
  headerRight:()=>
  <TouchableOpacity  style={{height:35,width:50,alignItems:'center'}}>
<Text style={{fontWeight:"bold"}}>{myIcon}</Text>
  </TouchableOpacity>,

})}


/>

<Stack.Screen name="AddRoom" component={AddRoom}
options={{
  headerShadowVisible: false,
  title:"POST A ROOM",
  headerTitleAlign:'center',
}}/>



      </Stack.Navigator>
     
  )
}

export default Home







