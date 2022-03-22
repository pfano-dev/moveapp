import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    header:{

        fontSize:30,
        marginVertical:10,
        paddingHorizontal:10,
    },
    headerView:{
height:200,
justifyContent:'center',
    },
    cardView:{
height:220,
width:'100%',
marginVertical:10,
borderRadius:10
    },
    cardText:{
        fontSize:30,
        marginVertical:10,
        paddingHorizontal:10,
        color:'white', 
        fontWeight:'bold',
        width:180

    },
    card:{
flexDirection:'row',
justifyContent:'space-between',
height:'100%',
width:'100%',
alignItems:'center',
padding:5,
paddingRight:15
    }

});

export default styles;