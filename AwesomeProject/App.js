import 'react-native-gesture-handler';


import { View, Text, PermissionsAndroid, Platform} from 'react-native'
import React,{   useEffect } from 'react';
import Home from './src/Navigation/Home';
import YourTrip from './src/screen/DrawerScreen/YourTrip';
import Setting from './src/screen/DrawerScreen/Setting';
import History from './src/screen/DrawerScreen/History';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconi from 'react-native-vector-icons/MaterialCommunityIcons';
import Geolocation from 'react-native-geolocation-service';
import CustomDrawer from "./CustomDrawer";
// import Geolocation from '@react-native-community/geolocation';


// navigator.geolocation = require('@react-native-community/geolocation');

navigator.geolocation = require('react-native-geolocation-service');

const Drawer = createDrawerNavigator();



const myIcon = <Icon name="message-text-outline" size={30} color="black" />;
const myIconi = <Iconi name="menu" size={30} color="black" />;


const App = () => {




  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: " moveit App  location Permission",
          message:
            "moveit App needs access to your location " +
            "so you can take awesome delevery.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }


  useEffect(() => {
   
    if (Platform.OS === 'android') {
      androidPermission();
    } else {
      // IOS
      Geolocation.requestAuthorization();
    }
  }, [])



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
    <Drawer.Screen name="YourTrip" component={YourTrip} />
    <Drawer.Screen name="History" component={History} />
    <Drawer.Screen name="Setting" component={Setting} />

  </Drawer.Navigator> 
  </NavigationContainer>
 

  )

}

export default App




// import { View, Text } from 'react-native'
// import React from 'react'
// // import SearchResults from './src/screen/SearchResults'
// import ConfimScreen from './src/screen/ConfimScreen'

// const App = () => {
//   return (
//     <View>
//       {/* <SearchResults/> */}
//       <ConfimScreen/>
//     </View>
//   )
// }

// export default App