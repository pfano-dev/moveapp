import { View, Text } from 'react-native'
import React from 'react'
import typesData from '../../assets/data/types'
import CarTypeRow from '../CarTypeRow'

const CarType = () => {
  return (
    <View>
      {typesData.map((type) => (
        <CarTypeRow
          type={type}
          key={type.id}
        
        />
      ))}
    </View>
  )
}

export default CarType;