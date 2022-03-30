import { View, Text , Image} from 'react-native'
import React ,{useState,useEffect,useRef} from 'react';
import MapView , { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from "react-native-maps-directions";
import * as Location from 'expo-location';
import FontAwesome5 from 'react-native-vector-icons/MaterialIcons';

const GOOGLE_MAPS_APIKEY = "AIzaSyAGXSUtb0RGrt4V55SXW5ZV9n5Z4xuVd7w";
const myIconL = <FontAwesome5 name="my-location" size={25} color="#004d40" />;

const FinalMap = ({ origin, destination }) => { 









  const [location, setLocation] = useState(

    {   coords:{
         accuracy: 899.9990234375,
         altitude: 0,
         altitudeAccuracy: 0,
         heading: 0,
         latitude: -25.7159813,
         longitude: 28.360622,
         speed: 0,
       },
   }
     );
  
     const [errorMsg, setErrorMsg] = useState(null);
   
     useEffect(() => {
       (async () => {
         let { status } = await Location.requestForegroundPermissionsAsync();
         if (status !== 'granted') {
           setErrorMsg('Permission to access location was denied');
           return;
         }
   
         let location = await Location.getCurrentPositionAsync({});
         setLocation(location);
   
     
       })();
     }, []);
   
     let text = 'Waiting..';
     if (errorMsg) {
       text = errorMsg;
     } else if (location) {
       text = JSON.stringify(location);
     }
   
     console.log(location.coords.latitude)
     console.log(location.coords.longitude)
   
     const currentLat = location.coords.latitude;
     const currentLong = location.coords.longitude;
  
     const currentLoc = {
      latitude: currentLat,
      longitude: currentLong,
    };
  









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



<Marker coordinate={currentLoc}>
<Image
style={{width:40, height:40, resizeMode:'contain'}}
source={require('../../assets/images/top-Comfort.png')}
/>
</Marker>


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