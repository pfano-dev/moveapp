import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
   flexDirection:'row',
   padding:15,
   justifyContent:"space-between",
   borderBottomColor:'#eeeeee',
   borderBottomWidth:1,

  },
  containers:{
flexDirection:'row',
justifyContent:'space-between',
paddingHorizontal:20,
backgroundColor:'white',
alignItems:'center',
marginBottom:20
  },
  name:{
      fontSize:20,
      fontWeight:'bold'
  },
  detail:{
    fontSize:10,
    color:'gray',
    marginLeft:25
  }
  ,
  image: {
      width:50,
   height:50,
   borderRadius:50,
   marginRight:20

  },
  message:{
paddingTop:10,
color:'gray'
  }
,
  inner: {flexDirection:'row', }
  ,
  textMessage:{
      backgroundColor:'#b0bec5',
      margin:10,
      marginLeft:5,
      padding:15,
      marginRight:150,
      borderRadius:100
  },
  containerk: {
  position:'absolute',
  bottom:2,
  top:650,
  width:'100%',
padding:10,
flexDirection:'row'
  },

  textInput: {
    height: 50,
 backgroundColor:'#e0e0e0',
 width:'90%',
 borderRadius:20,
 textAlign:'center'
  },

 
});

export default styles;
