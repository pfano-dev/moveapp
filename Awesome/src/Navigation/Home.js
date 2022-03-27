import { View, Text,TouchableOpacity  } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import AddRoom from '../screens/AddRoom'
import AddVehicle from '../screens/AddVehicle'
import ViewRoom from '../screens/ViewRoom'
import DriverMap from '../screens/DriverMap'
import Notification from '../screens/Notification'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconi from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Stack = createNativeStackNavigator();

const myIcon = <Icon name="car-repair" size={30} color="black" />;
const myIconi = <Iconi name="menu" size={30} color="black" />;
const myIconm = <AntDesign name="message1" size={30} color="black" />;



const Home = () => {
  return (
  
    
        <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen}
options={({navigation})=>({
  headerShadowVisible: false,
  title:" MoveIT Admin App",
  headerTitleAlign:'center',

  headerLeft:()=>
  <TouchableOpacity onPress={()=> navigation.openDrawer()}  style={{height:35,width:50,alignItems:'center'}}>
  <Text style={{fontWeight:"bold"}}>{myIconi}</Text>
       </TouchableOpacity>,

})}/>


<Stack.Screen name="AddVehicle" component={AddVehicle}
options={{
  headerShadowVisible: false,
  title:"Register vehicle",
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
<Text style={{fontWeight:"bold"}}>{myIconm}</Text>
  </TouchableOpacity>,

})}


/>

<Stack.Screen name="AddRoom" component={AddRoom}
options={{
  headerShadowVisible: false,
  title:"POST A ROOM",
  headerTitleAlign:'center',
}}/>
<Stack.Screen name="DriverMap" component={DriverMap}
options={{
  headerShown: false,
}}/>

<Stack.Screen name="Notification" component={Notification}
options={({navigation})=>({
  headerShadowVisible: false,
  title:"Notification",
  headerTitleAlign:'center',

  headerRight:()=>
  <TouchableOpacity onPress={()=> navigation.navigate('AddVehicle')} style={{height:35,width:50,alignItems:'center'}}>
<Text style={{fontWeight:"bold"}}>{myIcon}</Text>
  </TouchableOpacity>,
})}/>





      </Stack.Navigator>
     
  )
}

export default Home







