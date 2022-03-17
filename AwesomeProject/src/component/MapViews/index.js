import { View, Text } from 'react-native'
import React from 'react';
import MapView , { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from "react-native-maps-directions";

const GOOGLE_MAPS_APIKEY = "AIzaSyAGXSUtb0RGrt4V55SXW5ZV9n5Z4xuVd7w";


const MapViews = ({ origin, destination }) => {

  const lati = origin.details.geometry.location.lat;
  const longi = origin.details.geometry.location.lng;

  const originLoc = {
    latitude: origin.details.geometry.location.lat,
    longitude: origin.details.geometry.location.lng,
  };

  const destinationLoc = {
    latitude: destination.details.geometry.location.lat,
    longitude: destination.details.geometry.location.lng,
  };

  return (
    <MapView
    style={{height:500, width:'100%'}}
    initialRegion={{
      latitude: lati,
      longitude: longi,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  >
  
     <Marker coordinate={originLoc} title={"Origin"} />
      <Marker coordinate={destinationLoc} title={"Destination"} />

      <MapViewDirections
        origin={originLoc}
        destination={destinationLoc}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={6}
        strokeColor="#64b5f6"
      />

  </MapView>
  )
}

export default MapViews;