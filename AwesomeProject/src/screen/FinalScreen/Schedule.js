import { View, Text, Image, TouchableOpacity,Alert } from 'react-native'
import React from 'react'
import styles from './styles';
import { useRoute } from "@react-navigation/native";



const Schedule = ( {navigation}) => {

    const route = useRoute();

    const data = route.params;
  
    const types = data.types;
    const type =types.type
    console.log(data)
  
    const getImage = () => {
        if (type.type === 'Trailer') {
          return require('../../assets/images/Trailer.jpeg');
        }
        if (type.type === 'Bakkie') {
          return require('../../assets/images/Bakkie.jpeg');
        }
        return require('../../assets/images/Truck.jpeg');
      }
    
      const distan =  type.price*types.distance

const distances = parseInt(distan, 10)

const  alertMessage =()=>{

  Alert.alert(
    'Done',

    'You Succesfully Scheduled your Delivery',

    [
      {text:'Cancel',
      onPress:() => console.log(''),
      style:'cancel'
    },
      {text:'Go Home',
      onPress:() =>  navigation.navigate('HomeScreen')
    }
    ]

  
  )
}



  return (
    <View style={{backgroundColor:'white'}}>
    <View style={styles.container}>
<View style={styles.innerContainer}>
<Image style={styles.image} source={require('../../assets/images/profile2.jpg')} />
<Text style={{fontSize:18, fontWeight:'bold'}}>Muleya pfano</Text>
</View>
<Text style={styles.text}>Delivery type : Bakkie</Text>
<Text style={styles.text}>Bakkie Registration: XLM 789 L</Text>
<Text style={styles.text}>Bakkie model: Isuzu D-Max 250C Base 4x2</Text>
    </View>

    <View style={styles.containers}>
    <View style={styles.subHead}>
            <Text style={styles.subText}>Your Request Details</Text>
          </View>
          <Text style={styles.type}>{type.type}</Text>

          <Image style={styles.images} source={getImage()} />
        </View>


        <View>
         
          <Text style={styles.middle}> Date: {types.date}</Text>
          <Text style={styles.middle}> FROM: {types.origins}</Text>
          <Text style={styles.middle}> TO: {types.destinations}</Text>
          <Text style={styles.middle}> Distence :  {types.distance} km</Text>
          <Text style={styles.middle}> Total Price R{distances+2} </Text>
          <Text style={styles.middle}> Carry {type.duration}</Text>
        </View>

        <View style={styles.btnView}>
          <TouchableOpacity style={styles.btn}
          onPress={()=> alertMessage()}
          >
       
            <Text style={styles.btnText}>Okay</Text>
          </TouchableOpacity>
        </View>
   

    </View>
  )
}

export default Schedule