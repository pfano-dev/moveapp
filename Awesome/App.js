import 'react-native-gesture-handler';


import { View, Text, PermissionsAndroid, Platform} from 'react-native'
import React,{useState, useEffect} from 'react';
import Home from './src/Navigation/Home';
// import YourTrip from './src/screen/DrawerScreen/YourTrip';
// import Setting from './src/screen/DrawerScreen/Setting';
// import History from './src/screen/DrawerScreen/History';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconi from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomDrawer from "./CustomDrawer";



const Drawer = createDrawerNavigator();
const myIcon = <Icon name="message-text-outline" size={30} color="black" />;
const myIconi = <Iconi name="menu" size={30} color="black" />;
const App = () => {

  
 

  return (
 
    <NavigationContainer>
    <Drawer.Navigator   
       drawerContent={
      (props) => (
        <CustomDrawer {...props} />)
    }
    
    >
    <Drawer.Screen name="Home" component={Home}
     

       options={{
        headerShown: false,
      }}
      
    />
    {/* <Drawer.Screen name="YourTrip" component={YourTrip} />
    <Drawer.Screen name="History" component={History} />
    <Drawer.Screen name="Setting" component={Setting} /> */}

  </Drawer.Navigator> 
  </NavigationContainer>
 

  )

}

export default App






















































































// import { View, Text,TouchableOpacity  } from 'react-native'
// import React from 'react'
// import HomeScreen from './src/screens/HomeScreen/HomeScreen'
// import AddRoom from './src/screens/AddRoom'
// import AddVehicle from './src/screens/AddVehicle'
// import ViewRoom from './src/screens/ViewRoom'
// import DriverMap from './src/screens/DriverMap'
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Iconi from 'react-native-vector-icons/MaterialCommunityIcons';

// const Stack = createNativeStackNavigator();

// const myIcon = <Icon name="message-text-outline" size={30} color="black" />;
// const myIconi = <Iconi name="menu" size={30} color="black" />;

// const App = () => {
//   return (
//     // <View>
//     //   {/* <AddVehicle/> */}
//     //  {/* <HomeScreen/> */}
//     //  {/* <AddRoom/> */}
//     //  {/* <ViewRoom/> */}
//     //  <DriverMap/>
//     // </View>
//     <NavigationContainer>
//         <Stack.Navigator>
//         <Stack.Screen name="HomeScreen" component={HomeScreen}
// options={{
//   headerShadowVisible: false,
//   title:"Drivers App",
//   headerTitleAlign:'center',

//   headerLeft:()=>
//   <TouchableOpacity  style={{height:35,width:50,alignItems:'center'}}>
//   <Text style={{fontWeight:"bold"}}>{myIconi}</Text>
//        </TouchableOpacity>,

// }}/>


// <Stack.Screen name="AddVehicle" component={AddVehicle}
// options={{
//   headerShadowVisible: false,
//   title:"Regisger vehicle",
//   headerTitleAlign:'center',
// }}/>

// <Stack.Screen name="ViewRoom" component={ViewRoom}

// options={({navigation})=>({
//   headerTitleAlign:'center',
//   headerStyle:{
//     backgroundColor:'#FAFAFA'
//   },
//   headerTitle:props=><Text  style={{fontWeight:"bold",fontSize:18}}> Hello, Muleya</Text>,
//   headerRight:()=>
//   <TouchableOpacity  style={{height:35,width:50,alignItems:'center'}}>
// <Text style={{fontWeight:"bold"}}>{myIcon}</Text>
//   </TouchableOpacity>,

// })}


// />

// <Stack.Screen name="AddRoom" component={AddRoom}
// options={{
//   headerShadowVisible: false,
//   title:"POST A ROOM",
//   headerTitleAlign:'center',
// }}/>



//       </Stack.Navigator>
     
//     </NavigationContainer>

//   )
// }

// export default App







