import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "./styles.js";
import Icon from "react-native-vector-icons/FontAwesome5";

// import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
// import React from "react";
// import { useRoute } from "@react-navigation/native";
// 
// 

const myIcon1 = <Icon name="hand-point-right" size={30} color="black" />;


const ConfimScreen = () => {
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>

        {/* <View style={styles.container}>
          <Text style={styles.type}>{types.type}</Text>

          <Image style={styles.image} source={getImage()} />
        </View> */}
        <View>
          <View style={styles.subHead}>
            <Text style={styles.subText}>Your Request Details</Text>
          </View>

          <Text style={styles.middle}>{myIcon1} Includes driver</Text>
          <Text style={styles.middle}>{myIcon1} Less than 20 km (5% off)</Text>
          <Text style={styles.middle}>{myIcon1} Available 24/7</Text>
          {/* <Text style={styles.middle}>
            {myIcon1} {types.duration}
          </Text>
          <Text style={styles.middle}>
            {myIcon1} R{types.price}
          </Text> */}
        </View>

        {/* <View style={styles.btnView}>
          <TouchableOpacity style={styles.btn}
             onPress={() => navigation.navigate("Drivers",{data})}
          >
       
            <Text style={styles.btnText}>Confirm {types.type}</Text>
          </TouchableOpacity>
        </View> */}
   
    </View>
  )
}

export default ConfimScreen