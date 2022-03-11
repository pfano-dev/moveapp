import { View, Text } from 'react-native'
import React from 'react';
import MapView from 'react-native-maps';

const MapViews = () => {
  return (
    <MapView
    style={{height:500, width:'100%'}}
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
  )
}

export default MapViews;