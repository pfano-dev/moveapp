import { View, Text } from 'react-native'
import React,{useState , useEffect} from 'react';
import styles from './styles.js';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Logo = () => {


  return (
    <View style={styles.container}>
   
     <Text style={styles.TextLogo}>M</Text>
     <Text style={styles.text}> Move it</Text>
<Text style={{marginTop:25,fontSize:18,color:'#bdbdbd',fontFamily:'serif'}}>You’re going to like what we do for you!</Text>
     
    </View>
  )
}

export default Logo