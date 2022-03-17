import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import typesData from '../../assets/data/types'
import CarTypeRow from '../CarTypeRow'
import { useNavigation } from '@react-navigation/native';

const CarType = ({origin, destination, date}) => {
  const navigation = useNavigation();

  return (
    <View style={{backgroundColor:'white'}}>
      {typesData.map((type) => (

<TouchableOpacity
onPress={() => navigation.navigate("ConfimScreen",{ type,origin,destination,date })}
key={type.id}
>
        <CarTypeRow
          type={type}
          key={type.id}
        
        />
         </TouchableOpacity>
      ))}


    </View>
  )
}

export default CarType;