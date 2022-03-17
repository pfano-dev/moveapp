import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { View, Text,SafeAreaView  } from 'react-native'
import React,{useState, useEffect} from 'react'
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import PlaceRow from "./PlaceRow";
import Entypo from "react-native-vector-icons/Entypo";

const myIcon = <Icon name="clock" size={30} color="black"/>

const SearchScreen = () => {

  const navigation = useNavigation();

  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  const homePlace = {
    description: 'Home',
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
  };
  const workPlace = {
    description: 'Work',
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
        console.log(data, details);
      }}
      suppressDefaultStyles
      currentLocation={true}
      currentLocationLabel='Current location'
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
        console.log(data, details);
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