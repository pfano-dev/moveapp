import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { View, Text,SafeAreaView  } from 'react-native'
import React,{useState, useEffect} from 'react'
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import PlaceRow from "./PlaceRow";
import Entypo from "react-native-vector-icons/Entypo";
import * as Location from 'expo-location';

const myIcon = <Icon name="clock" size={30} color="black"/>

const SearchScreen = () => {

 
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


  const navigation = useNavigation();

  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  const homePlace = {
    description: 'current location',
    geometry: { location: { lat:location.coords.latitude, lng:location.coords.longitude} },
  };
  const workPlace = {
    description: 'Home',
    geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
  };



  const checkNavigation = () => {
    if (originPlace && destinationPlace) {
      navigation.navigate('SearchResults', {
        originPlace,
        destinationPlace,
      })
    }
  }

  useEffect(() => {
    checkNavigation();
  }, [originPlace, destinationPlace]);


  return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
<View style={styles.nowView}>
  <Text>{myIcon} </Text>
<Text style={styles.now}>Now</Text>
</View>
<Text style={styles.selectText}>Select Pick-up & destination Location</Text>


<View style={styles.container}>
        <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        setOriginPlace({data , details})
     
      }}
      suppressDefaultStyles
      styles={{
        separator: styles.separator,
        textInput:styles.textInput,
        container:{
          position:'absolute',
          top:0,
          right:10,
          width:'88%'
               },
               listView:{
                position:'absolute',
                top:118,
              }    

      }}

      fetchDetails
      query={{
        key: 'AIzaSyAGXSUtb0RGrt4V55SXW5ZV9n5Z4xuVd7w',
        language: 'en',
      }}
      renderRow={(data) => <PlaceRow data={data} />}
      renderDescription={(data) => data.description || data.vicinity}
      predefinedPlaces={[homePlace, workPlace]}
    />

 <GooglePlacesAutocomplete
      placeholder='Where To'
      onPress={(data, details = null) => {
        setDestinationPlace({data , details})
      
      }}
      suppressDefaultStyles

      

      styles={{
        separator: styles.separator,
        textInput:styles.textInput,
        container:{
          position:'absolute',
          top:60,
          right:10,
          width:'88%'
               },

          // listView:{
          //   position:'absolute',
          //   top:105,
          // }     

      }}


      fetchDetails
      query={{
        key: 'AIzaSyAGXSUtb0RGrt4V55SXW5ZV9n5Z4xuVd7w',
        language: 'en',
      }}
      renderRow={(data) => <PlaceRow data={data} />}

    /> 


   <View style={styles.circle} >
     <Entypo name='location-pin' size={20} color={'white'} />
      </View> 
   <View style={styles.line}/> 
   <View style={[styles.circle,{top:88,backgroundColor:'#00acc1'}]} >
      <Entypo name='location-pin' size={20} color={'white'} />
   </View> 

</View>

    </View>
    </SafeAreaView>
  )
}

export default SearchScreen;