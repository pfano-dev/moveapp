// import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconi from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./src/screen/HomeScreen/index"
import SearchScreen from './src/screen/SearchScreen/index'


const myIcon = <Icon name="message-text-outline" size={30} color="black" />;
const myIconi = <Iconi name="menu" size={30} color="black" />;



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>

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
      <View style={{height:35,width:50,alignItems:'center'}}>
      <Text style={{fontWeight:"bold"}}>{myIconi}</Text>
           </View>,
      })}
      />

<Stack.Screen name="SearchScreen" component={SearchScreen}/>






    </Stack.Navigator>

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