
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { View, Text } from 'react-native'
import React,{useState} from 'react'
import styles from './styles';



const SearchScreen = () => {

  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  return (
    <View style={styles.container}>
        <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        setOriginPlace({data , details})
        console.log(data, details);
      }}

style={{

}}

      fetchDetails
      query={{
        key: 'AIzaSyAGXSUtb0RGrt4V55SXW5ZV9n5Z4xuVd7w',
        language: 'en',
      }}
    />

 <GooglePlacesAutocomplete
      placeholder='Where To'
      onPress={(data, details = null) => {
        setDestinationPlace({data , details})
        console.log(data, details);
      }}
      fetchDetails
      query={{
        key: 'AIzaSyAGXSUtb0RGrt4V55SXW5ZV9n5Z4xuVd7w',
        language: 'en',
      }}
    /> 



    </View>
  )
}

export default SearchScreen;