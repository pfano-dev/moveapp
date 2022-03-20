import { View, Text,Image } from 'react-native'
import React from 'react'
import styles from './styles';
import Ionicons from "react-native-vector-icons/MaterialIcons";

const CarTypeRow = (props) => {


    const {type ,distance } = props;

    const getImage = () => {
      if (type.type === 'Trailer') {
        return require('../../assets/images/Trailer.jpeg');
      }
      if (type.type === 'Bakkie') {
        return require('../../assets/images/Bakkie.jpeg');
      }
      return require('../../assets/images/Truck.jpeg');
    }
  
    const distan =  type.price*distance

const distances = parseInt(distan, 10)

  return (
    <View
      style={styles.container }
  >
      {/*  Image */}
      <Image
        style={styles.image}
        source={getImage()}
      />

      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type}{' '}
        </Text>
        <Text style={styles.time}>
         {type.duration}
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <Ionicons name={'money'} size={20} color={'#81d4fa'} />
        <Text style={styles.price}>est. R{distances+2}</Text>
      </View>
    
    </View>
  )
}

export default CarTypeRow