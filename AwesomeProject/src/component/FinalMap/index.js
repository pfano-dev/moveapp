import { View, Text } from 'react-native'
import React ,{useState ,useRef} from 'react';
import MapView , { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from "react-native-maps-directions";

const GOOGLE_MAPS_APIKEY = "AIzaSyAGXSUtb0RGrt4V55SXW5ZV9n5Z4xuVd7w";


const FinalMap = ({ origin, destination }) => { 

  const mapRef = useRef()


  const [state, setState] = useState({
    time: 0,
    distance: 0,
})

const {  time, distance } = state

  const originLoc = origin
  const destinationLoc = destination



  const fetchTime = (d, t) => {
    setState({
        distance: d,
        time: t
    })
}


const times = parseInt(time, 10)



const minutes =  parseInt((time%times)*60, 10)




  return (
    <View style={{alignItems:'center'}}>
    <MapView
    ref={mapRef}
    style={{height:510, width:'100%'}}
    initialRegion={{
      latitude: -26.270760,
      longitude: 28.112268,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  >
  
  <Marker coordinate={originLoc} title={"Origin"} pinColor={'#00acc1'} />

  
    
     
<Marker coordinate={destinationLoc} title={"Destination"} pinColor={'orange'} />


<MapViewDirections

        origin={originLoc}
        destination={destinationLoc}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="#64b5f6"

        onReady={result => {

          
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


      />



  
  </MapView>

  <View style={{height:70,justifyContent:'center', position:'absolute',alignItems:'center',backgroundColor:'#ffffffaa',top:30,borderRadius:20}}>
      <Text style={{fontSize:20,fontWeight:'bold',color:"green",padding:1}}>est time: {times >= 60?  parseInt(times/60, 10)+1 +" h":times +'min '} {minutes } sec </Text>
          <Text  style={{fontSize:20,fontWeight:'bold',color:'#00acc1'}}> distence: {distance} km </Text>
      </View>
        
  </View>
  )
}

export default FinalMap;