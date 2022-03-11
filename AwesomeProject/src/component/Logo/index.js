import { View, Text } from 'react-native'
import React from 'react';
import styles from './styles.js';

const Logo = () => {
  return (
    <View style={styles.container}>
     <Text style={styles.TextLogo}>M</Text>
     <Text style={styles.text}>Move it</Text>

     
    </View>
  )
}

export default Logo