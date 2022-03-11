import { View, Text,Image } from 'react-native'
import React from 'react'
import styles from './styles';
import Ionicons from "react-native-vector-icons/MaterialIcons";

const CarTypeRow = (props) => {


    const {type} = props;

    const getImage = () => {
      if (type.type === 'Trailer') {
        return require('../../assets/images/Trailer.png');
      }
      if (type.type === 'Bakkie') {
        return require('../../assets/images/Bakkie.png');
      }
      return require('../../assets/images/Truck.png');
    }
  


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
        <Ionicons name={'money'} size={18} color={'#42d742'} />
        <Text style={styles.price}>est. ${type.price}</Text>
      </View>
    
    </View>
  )
}

export default CarTypeRow