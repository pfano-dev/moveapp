import { View, Text } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import YourTrip from '../screen/DrawerScreen/YourTrip';
import Setting from '../screen/DrawerScreen/Setting';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';

const Drawer = createDrawerNavigator();


const Root = () => {
  return (
    <NavigationContainer>
    <Drawer.Navigator>
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="YourTrip" component={YourTrip} />
    <Drawer.Screen name="Setting" component={Setting} />
  </Drawer.Navigator> 
  </NavigationContainer>
  )
}

export default Root;