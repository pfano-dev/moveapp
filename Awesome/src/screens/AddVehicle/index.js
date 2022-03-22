import React from 'react';
import { View,TouchableOpacity, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Keyboard, ScrollView  } from 'react-native';

const AddVehicle = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
<ScrollView>
        <View style={styles.inner}>
    <View style={styles.innerView}>
         <TextInput placeholder="Your Name" style={[styles.textInput,{width:170, textAlign:'center',paddingLeft:0,}]} />
          <TextInput placeholder="surname" style={[styles.textInput,{width:170,textAlign:'center',paddingLeft:0,}]} />

       </View>
     
          <TextInput placeholder="ID" style={styles.textInput}  />
          <TextInput placeholder="vehicle type" style={styles.textInput} />
          <TextInput placeholder="Registration Numer" style={styles.textInput} />
          <TextInput placeholder="Vehicle Model" style={styles.textInput} />
          <TextInput placeholder="Provice" style={styles.textInput} />
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

export default  AddVehicle;