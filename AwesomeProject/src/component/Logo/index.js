import { View, Text } from 'react-native'
import React,{useState , useEffect} from 'react';
import styles from './styles.js';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Logo = () => {


  return (
    <View style={styles.container}>
   
     <Text style={styles.TextLogo}>M</Text>
     <Text style={styles.text}>Move it</Text>

     
    </View>
  )
}

export default Logo