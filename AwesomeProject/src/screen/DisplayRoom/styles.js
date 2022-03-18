import { StyleSheet ,Dimensions} from 'react-native';


const {width} = Dimensions.get('screen');
const cardWidth = width ;


const styles = StyleSheet.create({
search:{
    marginTop:50,
height:200,
width:'100%',
backgroundColor:"white",
justifyContent:'center',
alignItems:'center'
},
    TextLogo:{
color:"#74797B",
fontSize:120,
fontWeight:"bold"

    },
    text:{
  width:'80%',
        color:"#74797B",
        fontSize:30,
        fontWeight:"bold",
    },

    inputView:{
flexDirection:'row',
        width:"98%",
        backgroundColor:'#eee',
        height:50,
        borderRadius:30,
        marginTop:20,
        alignItems:'center',
        padding:10,
        paddingLeft:20,
    },
    input:{

        backgroundColor:'#eee',
        fontSize:25,
        textAlign:'center',
        marginLeft:10,
        width:'80%'
        
    },
    categoryListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 10,
      },

      categoryListText: {
        fontSize: 17,
        fontWeight: 'bold',
      },
      card: {
        height: 280,
        width: '90%',
        elevation: 15,
        margin: 20,
        borderRadius: 15,
        backgroundColor: '#eee',
      },

      cardImage: {
        height: 200,
        width: '100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
      },
      priceTag: {
        height: 60,
        width: 80,
        backgroundColor: '#000000aa',
        position: 'absolute',
        zIndex: 1,
        right: 0,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
      },
      cardDetails: {
        height: 100,
        borderRadius: 15,
        backgroundColor: "#eee",
        position: 'absolute',
        bottom: 0,
        padding: 20,
        width: '100%',
      },

   
      topHotelCard: {
        height: 120,
        width: 120,
        backgroundColor: '#eee',
        elevation: 15,
        marginHorizontal: 10,
        borderRadius: 10,
      },
      topHotelCardImage: {
        height: 80,
        width: '100%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
      },
});

export default styles;