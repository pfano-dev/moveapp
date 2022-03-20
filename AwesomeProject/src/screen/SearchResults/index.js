import { View, Text } from 'react-native'
import React from 'react'
import CarType from '../../component/CarType'
import MapViews from '../../component/MapViews'
import { useRoute } from "@react-navigation/native";


const SearchResults = () => {
  const route = useRoute();

  const { originPlace, destinationPlace,date } = route.params;

  const originName = originPlace.data.description
  const destinationName = destinationPlace.data.description


  return (
    <View>
  <CarType origins={originName} destinations={destinationName}  date ={date}  origin={originPlace} destination={destinationPlace} />
    </View>
  )
}

export default SearchResults