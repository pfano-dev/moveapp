import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

container:{
height:"100%",
width:'100%',
backgroundColor:'#bdbdbdaa',
alignItems:"center",
borderTopLeftRadius:35,
borderTopRightRadius:35,
}, 
 
inContainer:{
    height:"100%",
    width:'100%',
    backgroundColor:'white',
    borderTopLeftRadius:35,
    borderTopRightRadius:35,
    paddingTop:25,
    },


    text:{
        color:"black",
        fontWeight:"600",
      padding:15,
      textAlign:'center',
      width:270,
      fontSize:18


    },

    deliveryView:{
flexDirection:'row',
width:'100%',
height:220,
alignItems:'center',
justifyContent:'space-evenly',
marginBottom:15
    },

    deliveryCard:{
backgroundColor:'#74797Baa',
width:"45%",
height:200,
borderRadius:20

    },
    deliveryCards:{
        backgroundColor:'#74797Baa',
        width:"100%",
        height:200,
        borderRadius:20
        
            },
        

    image:{
        width:"100%",
        height:200,
     
        
    },

    roomView:{
        width:'100%',
        height:180,
        alignItems:'center',
        justifyContent:'center',
      

    },

    roomCard:{
        backgroundColor:'#74797B',
        width:"95%",
        height:170,
        borderRadius:20

    },
    images:{
        width:"100%",
        height:170,
        
    },

    roomCards:{
        backgroundColor:'#74797Baa',
        width:"100%",
        height:170,
        borderRadius:20

    },


    parcent:{
height:40,
width:100,
backgroundColor:'white',
marginLeft:10,
marginTop:15,
borderRadius:30,
justifyContent:'center',
alignItems:'center',
borderTopLeftRadius:0
    },
    now:{
        flexDirection:'row',
        height:100,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    go:{
        flexDirection:'row',
        justifyContent:'space-around'
    }
,Schedule:{

        height:150,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        marginBottom:10

},
rent:{
    flexDirection:'row',
    height:'100%',
    width:'100%',
    justifyContent:'center',
    alignItems:'center' 
}



});

export default styles;