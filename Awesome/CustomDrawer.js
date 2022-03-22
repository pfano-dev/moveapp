import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';


const CustomDrawer = (props) => {
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
              source={require("./src/assets/profile2.jpg")}
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

      {/* Make money */}
      {/* <Pressable onPress={() => { Auth.signOut() }}>
        <Text style={{padding: 5, paddingLeft: 20}}>Logout</Text>
      </Pressable> */}
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;