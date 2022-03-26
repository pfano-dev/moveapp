import React from "react";
import { View, Text, Pressable, Image , Alert} from "react-native";
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import {Auth} from 'aws-amplify';

const CustomDrawer = (props) => {


  const  alertMessage =()=>{

    Alert.alert(
      'LOGOUT',
  
      'Are you sure you want to LOGOUT',
  
      [
        {text:'Cancel',
        onPress:() => console.log(''),
        style:'cancel'
      },
        {text:'yes',
        onPress:() =>  Auth.signOut()
      }
      ]
  
    
    )
  }
  

  return (
    <DrawerContentScrollView {...props}>
      <View style={{backgroundColor: "#37474f", padding: 15, height:200}}>

        {/* User Row */}
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
               marginTop:10,
           paddingTop:20
        }}>
      
<Image
              style={{
                borderRadius: 50,
                height: 60,
                width: 60,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 10,
              }}
              source={require("./src/assets/images/profile.jpg")}
            />

          <View>
            <Text style={{color: 'white', fontSize: 24}}>Muleya pfano</Text>
            <Text style={{color: 'lightgrey'}}>5.00 *</Text>
          </View>
        </View>

        {/* Messages Row */}
        <View style={{
          borderBottomWidth: 1,
          borderBottomColor: '#919191',
          borderTopWidth: 1,
          borderTopColor: '#919191',
          paddingVertical: 5,
          marginVertical: 10,
          marginTop:40
        }}>
          <Pressable
            onPress={() => {console.warn('Messages')}}>
            <Text style={{color: '#dddddd', paddingVertical: 5,}}>Messages</Text>
          </Pressable>
        </View>

      

      </View>

      <DrawerItemList {...props} />

  
      
      <Pressable 
      onPress={() => { alertMessage() }}
      style={{paddingVertical:50}}  >
        <Text style={{padding: 5, paddingLeft: 20, color:'red'}}>Logout</Text>
      </Pressable>

    </DrawerContentScrollView>
  );
};

export default CustomDrawer;