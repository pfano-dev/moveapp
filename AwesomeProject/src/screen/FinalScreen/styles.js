import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "99%",
  height:200,
  borderWidth:2,
  borderColor:'#eee',
  margin:2
  },
  innerContainer:{
width:'100%',
justifyContent:'center',
alignItems:'center',
padding:10
  }
,
  image: {
   width:50,
   height:50,
   borderRadius:50,
   margin:10
  },
  text:{
fontSize:18,
paddingLeft:30,
margin:2
  }
,

  containers: {
    alignItems: "center",
    padding:20
  },
  images: {
    height: 100,
    width: "80%",
    resizeMode: "contain",
  },
  type: {
    fontWeight: "bold",
    fontSize: 28,
    padding:15
 
  },
  subHead: {
    width: "100%",
    alignItems: "center",
    padding: 20,
  },

  subText: {
    fontSize: 30,
    fontWeight: "800",
  },
  price: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 5,
  },
  middle: {
    fontWeight: "600",
    fontSize: 20,
    paddingTop:5,
    paddingLeft: 40,
  },
  btnView: {
    justifyContent: "center",
    alignItems: "center",
    height: 120,
  },

  btn: {
    backgroundColor: "#37474f",
    width: "85%",
    height: 60,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  btnText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },

});

export default styles;
