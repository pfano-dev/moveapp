import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 25,
  },
  image: {
    height: 300,
    width: "100%",
    resizeMode: "contain",
  },
  middle: {
    fontWeight: "800",
    fontSize: 25,
    paddingTop: 12,
    paddingLeft: 40,
  },
  type: {
    fontWeight: "bold",
    fontSize: 38,
    marginBottom: 5,
    padding: 20,
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
  btnView: {
    justifyContent: "center",
    alignItems: "center",
    height: 120,
  },

  btn: {
    backgroundColor: "#4E7CAA",
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
