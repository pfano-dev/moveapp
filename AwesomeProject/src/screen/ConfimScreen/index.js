import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import styles from "./styles.js";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useRoute } from "@react-navigation/native";

const myIcon1 = <Icon name="hand-point-right" size={30} color="black" />;


const ConfimScreen = ({navigation}) => {

  const route = useRoute();
  const data = route.params;
  console.log(data)
  const types = data.type;

  const getImage = () => {
    if (types.type === 'Trailer') {
      return require('../../assets/images/Trailer.jpeg');
    }
    if (types.type === 'Bakkie') {
      return require('../../assets/images/Bakkie.jpeg');
    }
    return require('../../assets/images/Truck.jpeg');
  }

const distan =  types.price*data.distance

const distances = parseInt(distan, 10)

  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>

        <View style={styles.container}>
          <Text style={styles.type}>{types.type}</Text>

          <Image style={styles.image} source={getImage()} />
        </View>
        <View>
          <View style={styles.subHead}>
            <Text style={styles.subText}>Your Request Details</Text>
          </View>

          {data.date
          ?   <Text style={styles.middle}> Date: {data.date}</Text>
          : null
        }
          <Text style={styles.middle}> FROM: {data.origins}</Text>
          <Text style={styles.middle}> TO: {data.destinations}</Text>
          <Text style={styles.middle}> Distence : {data.distance} km</Text>
          <Text style={styles.middle}> Total Price R{distances+2} </Text>
          <Text style={styles.middle}> Carry {types.duration}</Text>
        </View>

        <View style={styles.btnView}>
          <TouchableOpacity style={styles.btn}
            onPress={() => navigation.navigate("Payment",{data ,distances})}
          >
       
            <Text style={styles.btnText}>Confirm {types.type}</Text>
          </TouchableOpacity>
        </View>
   
    </View>
  )
}

export default ConfimScreen