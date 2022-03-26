import { View, Text,TouchableOpacity,Linking, Alert } from 'react-native'
import React,{useState , useEffect, useRef} from 'react';
import MapView , { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useRoute } from "@react-navigation/native";
import MapViewDirections from "react-native-maps-directions";
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/MaterialIcons';
import { Constants } from 'expo';
import * as Location from 'expo-location';

const myIcon = <Icon name="user" size={30} color="green" />;
const myIconc = <MaterialIcons name="add-ic-call" size={30} color="green" />;
const myIconm = <Feather name="message-circle" size={30} color="green" />;
const myIconL = <FontAwesome5 name="my-location" size={25} color="#004d40" />;

const GOOGLE_MAPS_APIKEY = "AIzaSyAGXSUtb0RGrt4V55SXW5ZV9n5Z4xuVd7w";

const DriverMap = ({navigation}) => {

  const route = useRoute();
  const data= route.params;

  const datas = data.type
  const dat = datas.name;

  const originLat = datas.originLat;
  const originLong = datas.originLong;

  const destinationLat = datas.destinationLat;
  const destinationLong = datas.destinationLong ;



  const  alertMessage =()=>{

    Alert.alert(
      'Cancel delivery',
  
      'Are you sure you want to cancel a Delivery',
  
      [
        {text:'NO',
        onPress:() => console.log(''),
        style:'cancel'
      },
        {text:'YES',
        onPress:() =>  navigation.navigate('HomeScreen')
      }
      ]
  
    
    )
  }
  



  const _pressCall=()=>{
    const url='tel://0796495495'
    Linking.openURL(url)
  }


  const originLoc = {
    latitude: originLat,
    longitude: originLong,
  };

  const destinationLoc = {
    latitude:destinationLat ,
    longitude:destinationLong,
  };

  console.log(destinationLoc)

console.log(datas)


  const [state, setState] = useState({
    time: 0,
    distance: 0,
})

const {  time, distance } = state

  const mapRef = useRef()



 const fetchTime = (d, t) => {
    setState({
        distance: d,
        time: t
    })
}

console.log(distance)


const times = parseInt(time, 10)

const minutes =  parseInt((time%times)*60, 10)




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



  return (
<View style={{alignItems:'center'}}>

    <MapView

    ref={mapRef}
    style={{height:610, width:'100%'}}
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
 <View style={{backgroundColor: "#009688aa",borderRadius:25, padding: 5}}>
   <Text>{myIconL}</Text>
 </View>
</Marker>


      <MapViewDirections
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
                      right: 40,
                      bottom: 40,
                      left: 40,
                      top: 140,
                  },
              });
      }}


      />

  </MapView>
 
  <View style={{height:70,justifyContent:'center', position:'absolute',alignItems:'center',backgroundColor:'#ffffffaa',top:30,borderRadius:20}}>
      <Text style={{fontSize:20,fontWeight:'bold',color:"green",padding:1}}>est time: {times >= 60?  parseInt(times/60, 10)+1 +" h":times +'min '} {minutes } sec </Text>
          <Text  style={{fontSize:20,fontWeight:'bold',color:'#00acc1'}}> distence: {distance} km </Text>
      </View>

      <View style={{width:'100%',alignItems:'center'}}>
      <Text style={{fontSize:20,fontWeight:'bold',padding:10}}>{myIcon} {dat}</Text>
      <View style={{width:'100%',alignItems:'center'}}>
        <Text style={{fontSize:15,fontWeight:'bold',padding:2}}>From : {datas.origins}</Text>
        <Text style={{fontSize:15,fontWeight:'bold',padding:2}}>To : {datas.destinations}</Text>
        <Text style={{fontSize:15,fontWeight:'bold',padding:2}}>Total Price : R {datas.price}</Text>

      </View>
       
      </View>
<View style={{flexDirection:'row',justifyContent:'space-evenly',width:"100%",paddingVertical:20}}>

<TouchableOpacity
onPress={()=>_pressCall()}

>
<Text>{myIconc}</Text>
</TouchableOpacity>

<TouchableOpacity


>
<Text>{myIconm}</Text>
</TouchableOpacity>

</View>
<TouchableOpacity

onPress={()=> alertMessage()}

>
<Text style={{color:'red',paddingTop:20}}>cancel delivery</Text>
</TouchableOpacity>

  </View>
  )
}

export default DriverMap;