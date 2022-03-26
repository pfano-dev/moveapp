import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const TripDetails = ({navigation}) => {
  return (
    <View style={{backgroundColor:'white',flex:1}}>
    <View style={styles.container}>
    <View style={styles.btnView}>
    <View style={styles.containers}>
<Text style={styles.message}>15 days left</Text>
</View>
</View>
            <Text style={styles.text} > Name : Muleya pfano</Text>
            <Text style={styles.text}> Delivery type : Bakkie</Text>
            <Text style={styles.text}> Bakkie Registration: XLM 789 L</Text>
            <Text style={styles.text}> Bakkie model: Isuzu D-Max 250C Base 4x2</Text>
            <Text style={styles.text}> Date: 16/05/2020</Text>
            <Text style={styles.text}> FROM: mamelodi</Text>
            <Text style={styles.text}> TO: Thembisa</Text>
            <Text style={styles.text}> Distence : 100km</Text>
            <Text style={styles.text}> Total Price R300 </Text>
            
        <View style={styles.btnView}>
          <TouchableOpacity style={styles.btn}
           onPress={() => navigation.navigate('ChatList')}
          >
       
            <Text style={styles.btnText}>Chats</Text>
          </TouchableOpacity>
        </View>
   
                
    </View>


    


    </View>
  )
}

export default TripDetails

const styles = StyleSheet.create({

    containers:{
        backgroundColor:'#EDFCF7',
        alignItems:'center',
       width:80,
       borderRadius:20,
       justifyContent:'center',
       height:40
          },
          
   message:{
    color:'#07744A'
      }
    ,
    container: {
        width: "99%",
      borderWidth:2,
      borderColor:'#eee',
      margin:2,
      padding:20
      },
      innerContainer:{
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    padding:10
      }
    ,

      text:{
    fontSize:18,
    paddingLeft:30,
    margin:10
      }
    ,
    


      btnView: {
        justifyContent: "center",
        alignItems: 'flex-end',
        height: 50,
        width:'100%'
      },
    
      btn: {
        backgroundColor: "#37474f",
        width: "30%",
        height: 40,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
      },
    
      btnText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
      },
    




})