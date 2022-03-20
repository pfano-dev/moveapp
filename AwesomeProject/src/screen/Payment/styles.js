import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection:'row',
    justifyContent:'space-between',
    padding:20,
  },
  image: {
      width:'100%',
   height:260,
marginBottom:10,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  color:'black'
  },
  textP: {
    fontSize: 25,
    fontWeight: "bold",
    color: "green",
  },
  texto: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 15,
  },
  textD: {
    fontSize: 20,
    color: "#90a4ae",
  },
  textV: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: "100%",
  },

  inner: {

    flex: 1,
    justifyContent: "space-around"
  },
  containers: {
    flex: 1
  },

  textInput: {
    height: 50,
  backgroundColor:'white',
  borderRadius:2,
  textAlign:'center',
  fontSize:20,
  margin:10
 
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12
  },
  btnView: {
    justifyContent: "center",
    alignItems: "center",
    height: 120,
    marginBottom:60
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
  tex:{
      marginLeft:12
  }
});

export default styles;
