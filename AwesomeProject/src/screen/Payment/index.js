import { View, TouchableOpacity, Text, Image, Platform, TouchableWithoutFeedback, Button, Keyboard, KeyboardAvoidingView,
   TextInput, ScrollView } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/MaterialIcons";
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useRoute } from "@react-navigation/native";




const Payment = ({navigation}) => {

  const route = useRoute();

  const data = route.params;

  const types = data.data;

  const typ=types.type
  console.log(data)

  const nav = () => {
    types.date
    ? navigation.navigate("Schedule",{types})
    : navigation.navigate("Now",{types}) 
  }


  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.containers}
  >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.inner}>
  <View style={styles.container}>
    <View>
    <Text style={styles.text}>Total Price</Text>
    <Text style={styles.textP}>R{data.distances+2},00</Text>
    </View>
    <TouchableOpacity 
        onPress={() => nav()}
    style={{flexDirection:"row",alignItems:'center'}}>
    <Ionicons name={'money'} size={20} color={'gray'} />
<Text style={{fontSize:20, fontWeight:'bold'}}>Use Cash</Text>
<Icon name="keyboard-arrow-right" size={30} color="gray"/>
    </TouchableOpacity>
 
  </View>
  <ScrollView>
  <View>
  <Image

style={styles.image}
       source={require('../../assets/images/bankcard.jpg')}
/>
  </View>

<View style={{paddingHorizontal:10}}>
  <Text style={styles.tex}>Card number</Text>
         <TextInput placeholder="5568 4528 4584 4896" style={styles.textInput}  maxLength={16} keyboardType = 'numeric'/>
          <View style={{flexDirection:'row',justifyContent:'space-around', marginVertical:15}}>
            <View>
            <Text style={styles.tex}>Valid until</Text>
            <TextInput placeholder="months/year" style={[styles.textInput,{padding:10, }]}  maxLength={5}/>
            </View>
    <View>
    <Text style={styles.tex}>CCV</Text>
    <TextInput placeholder="* * *" style={[styles.textInput,{padding:10,width:100}]} maxLength={3} keyboardType = 'numeric'/>
    </View>
         
          </View>
          <Text style={styles.tex}>Card holder</Text>
          <TextInput placeholder="Username" style={styles.textInput}  />
 
</View>
         

          <View style={styles.btnView}>
          <TouchableOpacity style={styles.btn}
            onPress={() => nav()}
          >
       
            <Text style={styles.btnText}>make Payment</Text>
          </TouchableOpacity>
        </View>

  </ScrollView>



          </View>
  </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
  )
}

export default Payment