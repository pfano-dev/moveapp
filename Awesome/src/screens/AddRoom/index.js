import React, { useState, useEffect } from 'react';
import { View,TouchableOpacity, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform ,
       TouchableWithoutFeedback, Keyboard, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as ImagePicker from 'expo-image-picker';



const myIcon = <Icon name="add-photo-alternate" size={30} color="black" />;

const AddRoom = () => {

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  

  return (
    <KeyboardAvoidingView style={styles.container}>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
<ScrollView>
        <View style={styles.inner}>
    <View style={styles.innerView}>
         <TextInput placeholder="Your Name" style={[styles.textInput,{width:170, textAlign:'center',paddingLeft:0,}]} />
          <TextInput placeholder="surname" style={[styles.textInput,{width:170,textAlign:'center',paddingLeft:0,}]} />

       </View>
     
          <TextInput placeholder="Rooms name" style={styles.textInput}  />
          <TextInput placeholder="Room type" style={styles.textInput} />
          <TextInput placeholder="Room Location" style={styles.textInput} />
          <TextInput placeholder="Provice" style={styles.textInput} />
          <TextInput placeholder="Price" style={styles.textInput} />


          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width:'100%' }}>
          <TouchableOpacity  onPress={pickImage}  style={[styles.btnContainer,{width:'100%',flexDirection:'row', 
             marginTop: 0,marginBottom:15,backgroundColor:'white',borderWidth:1,borderColor:'black' }]}>
         <Text style={{fontSize:20,fontWeight:'bold'}}>uploud photos</Text>
         {myIcon}
          </TouchableOpacity>

       {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, borderRadius:10, marginVertical:5 }} />}
    </View>


          <TouchableOpacity style={styles.btnContainer}>
         <Text style={{color:'white', fontWeight:'bold',fontSize:30}}>submit</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>

      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
  height:'100%',
  width:'100%',
  backgroundColor:'white'
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-evenly',
    paddingVertical:100
  },

  textInput: {
    height: 60,
    backgroundColor:'#eee',
    fontSize:20,
    paddingLeft:20,
    marginBottom: 36,
    borderRadius:10,
    marginTop:10
  },
  btnContainer: {
    backgroundColor: "#90caf9",
    marginTop: 22,
    height:50,
    alignItems:'center'
    ,justifyContent:"center",
    borderRadius:10
  },

  innerView: {
    justifyContent:'space-between',
    flexDirection:'row'
  },
});

export default  AddRoom;