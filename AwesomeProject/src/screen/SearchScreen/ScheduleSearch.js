import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { View, Text,SafeAreaView  } from 'react-native'
import React,{useState, useEffect} from 'react'
import styles from './styles';
import PlaceRow from "./PlaceRow";
import Entypo from "react-native-vector-icons/Entypo";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import DatePicker from "react-native-datepicker";

const myIcon = <Icon name="calendar-check-outline" size={30} color="black"/>

const ScheduleSearch = () => {

  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);




  const checkNavigation = () => {
    if (originPlace && destinationPlace) {
      navigation.navigate('SearchResults', {
        originPlace,
        destinationPlace,
        date
      })
    }
  }

  useEffect(() => {
    checkNavigation();
  }, [originPlace, destinationPlace]);


  return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
<View style={[styles.nowView,{width:120}]}>
  <Text>{myIcon} </Text>
<Text style={styles.now}>Schedule</Text>
</View>
<Text style={[styles.selectText,{width:350}]}>Select Date, Pick-up & destination Location</Text>


<View style={styles.container}>
<View style={{flexDirection:'row', alignItems:'center',paddingLeft:10}}>
    <Text style={{fontSize:20}}> Select Date</Text>
<DatePicker
                style={styles.datePickerStyle}
                date={date} //initial date from state
                mode="date" //The enum of date, datetime and time
                placeholder="select date"
                format="DD-MM-YYYY"
                minDate={new Date()}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                        position: "absolute",
                        left: 15,
                        top: 2,
                        marginLeft: 0,
                      },

                  dateInput: {
                    width: "100%",
                    fontSize: 20,
                    color: "#101010",
                    backgroundColor: "#eee",
                    borderColor: "#fff",
                    height:48
                  },
                }}
                onDateChange={(date) => {
                  setDate(date);
                }}
              />

</View>


        <GooglePlacesAutocomplete
      placeholder='From'
      onPress={(data, details = null) => {
        setOriginPlace({data , details})
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
               listView:{
                position:'absolute',
                top:118,
              }    

      }}

      fetchDetails
      query={{
        key: '',
        language: 'en',
      }}
      renderRow={(data) => <PlaceRow data={data} />}

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
          top:120,
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
        key: '',
        language: 'en',
      }}
      renderRow={(data) => <PlaceRow data={data} />}

    /> 


   <View style={[styles.circle,{top:70}]} >
     <Entypo name='location-pin' size={20} color={'white'} />
      </View> 
   <View style={[styles.line,{top:96, height:42}]}/> 
   <View style={[styles.circle,{top:140,backgroundColor:'#00acc1'}]} >
      <Entypo name='location-pin' size={20} color={'white'} />
   </View> 

</View>

    </View>
    </SafeAreaView>
  )
}

export default ScheduleSearch;