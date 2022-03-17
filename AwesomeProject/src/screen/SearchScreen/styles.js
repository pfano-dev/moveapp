import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({



    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
      },
      iconContainer: {
        backgroundColor: '#a2a2a2',
        padding: 5,
        borderRadius: 50,
        marginRight: 15,
      },

      textInput: {
        padding: 10,
        backgroundColor: '#eee',
        marginVertical: 5,
        marginLeft: 20,
      },
    
      separator: {
        backgroundColor: '#efefef',
        height: 1,
      },
      

container:{
height:"100%",
width:'100%',
backgroundColor:'white',  
},
  
    textInput:{
padding:10,
backgroundColor:'#eee',  
marginVertical:5
    },
    nowView:{
        flexDirection:'row',
         justifyContent:'center',
alignItems:'center',
width:100,
height:100,
padding:10,
paddingTop:60
    }
,
    now:{
fontSize:20,
fontWeight:'bold',


    },
    selectText:{
fontSize:25,
fontWeight:'bold',
padding:10,
color:'#b0bec5',
width:280,
    },

    circle: {
        width: 25,
        height: 25,
        backgroundColor: '#4caf50',
        position: 'absolute',
        top: 15,
        left: 6,
        borderRadius: 50,
        justifyContent:'center',
        alignItems:'center'
      },
      line: {
        width: 3,
        height: 45,
        backgroundColor: '#c4c4c4',
        position: 'absolute',
        top: 41,
        left: 17,
      },

      datePickerStyle: {
        width:"69%",
        marginTop: 10,
        marginLeft:8,

      },

});

export default styles;