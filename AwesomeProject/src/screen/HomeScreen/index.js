import { View, Text } from 'react-native'
import React from 'react'
import Logo from '../../component/Logo/index.js'
import CovidMessage from '../../component/CovidMessage/index.js'



const HomeScreen = () => {

  return (
    <View style={{backgroundColor:'white'}}>
      <Logo/>
      <CovidMessage/>
    </View>
  )
}

export default HomeScreen