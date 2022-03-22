import { View, Text } from 'react-native'
import React,{useState , useRef} from 'react';
import MapView , { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
// import MapViewDirections from "react-native-maps-directions";

// const GOOGLE_MAPS_APIKEY = "AIzaSyAGXSUtb0RGrt4V55SXW5ZV9n5Z4xuVd7w";


const DriverMap = ({ origin, destination}) => {



//   const [state, setState] = useState({
//     time: 0,
//     distance: 0,
// })

// const {  time, distance } = state

//   const mapRef = useRef()



//   const lati = origin.details.geometry.location.lat;
//   const longi = origin.details.geometry.location.lng;

//   const originLoc = {
//     latitude: origin.details.geometry.location.lat,
//     longitude: origin.details.geometry.location.lng,
//   };

//   const destinationLoc = {
//     latitude: destination.details.geometry.location.lat,
//     longitude: destination.details.geometry.location.lng,
//   };


//  const fetchTime = (d, t) => {
//     setState({
//         distance: d,
//         time: t
//     })
// }

// console.log(distance)

  return (
<View>

    <MapView

    // ref={mapRef}
    style={{height:500, width:'100%'}}
    initialRegion={{
      latitude: -26.270760,
      longitude: 28.112268,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  >



{/* <Marker coordinate={originLoc} title={"Origin"} pinColor={'#00acc1'} />

  
    
     
      <Marker coordinate={destinationLoc} title={"Destination"} pinColor={'orange'} /> */}

      {/* <MapViewDirections
        origin={originLoc}
        destination={destinationLoc}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="#64b5f6"

        onReady={result => {


const dist = result.distance;
       

          fetchTime(result.distance, result.duration),

              mapRef.current.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                      right: 10,
                      bottom: 10,
                      left: 10,
                      top: 10,
                  },
              });
      }}


      /> */}

  </MapView>
  {/* <Text style={{backgroundColor:'white', textAlign:'center'}}>Distance : {distance} km</Text> */}
  </View>
  )
}

export default DriverMap;