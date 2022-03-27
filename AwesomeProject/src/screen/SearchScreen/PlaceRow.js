import React from "react";
import { View, Text } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import styles from './styles'

const PlaceRow = ({ data }) => {
  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
      {data.description === 'current location'
          ? <Entypo name='location-pin' siz={25} color={'#00acc1'} /> 
          :<Entypo name='home' siz={20} color={'white'} />
         } 
      </View>
      <Text style={styles.locationText}>{data.description || data.vicinity}</Text>
    </View>
  );
};

export default PlaceRow;