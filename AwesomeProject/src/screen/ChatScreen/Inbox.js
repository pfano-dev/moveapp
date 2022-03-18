import { View, Text, 
    Image, KeyboardAvoidingView, TextInput,
      Platform,
      Keyboard, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styles from './styles'
import { useRoute } from "@react-navigation/native";
const Inbox = () => {

    const route = useRoute();

    const data = route.params;
    const dat = data.image;


  return (
    <View>
    <View style={styles.containers}>
<Image  source={dat}
            style={styles.image}/>
            <Text style={{fontSize:30,fontFamily:'sans-serif-thin', paddingBottom:20}}>{data.name}</Text>
            <Text>{data.detail}</Text>
    </View>

<View style={styles.textMessage}>  
    <Text  style={{fontSize:18, color:'black'}}>good day</Text>

</View>
  
<View style={[styles.textMessage,{marginRight:5,marginLeft:150,backgroundColor:'#9e9e9e'}]}>  
    <Text  style={{fontSize:18, color:'black',}}>How far are you?</Text>

</View>
  

<KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.containerk}
    > 

         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
         <TextInput placeholder="Type something...." style={styles.textInput} />
        
         </TouchableWithoutFeedback>
        
        
    </KeyboardAvoidingView>

    <Text style={{color:'black', position:'absolute',right:10,top:675,fontWeight:'bold'}}>send</Text>
    </View>
  )
}



export default Inbox