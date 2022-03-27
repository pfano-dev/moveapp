import React,{useState , useEffect} from 'react';
import { View,TouchableOpacity, KeyboardAvoidingView, 
         TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback,
         Keyboard, ScrollView  }
         from 'react-native';
import { Auth , API , graphqlOperation } from 'aws-amplify';
 import { createVehicle } from '../../graphql/mutations'
 

const AddVehicle = () => {

  
  const [formState, setFormState] = useState({
          surname:"",
          yourName:"",
          idNumber:"",
          vehicleType:"",
          RegistrationNumber:"", 
          vehicleModel:"",
          province:"",
         })


         const setTask = (key, value) => {
          setFormState({ ...formState, [key]: value })
      }
 
     const onSubmit =()=>{
      console.log(formState)
    }
    
    
    
    
    const [cars, setCars] = useState([])
    
   


     const addCar = async () => {

      try {
        const user = await Auth.currentAuthenticatedUser();

          if (!formState.surname || !formState.RegistrationNumber) return
          const car = { ...formState }
          setCars([...cars, car])
          setFormState({ 
          surname:"",
          yourName:"",
          idNumber:"",
          vehicleType:"",
          RegistrationNumber:"", 
          vehicleModel:"",
          province:"", })
          await API.graphql(graphqlOperation(createVehicle, { input: car }))

      } catch (err) {
          console.log('error creating actor:', err)
      }
  }



  return (
    <KeyboardAvoidingView style={styles.container}>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
<ScrollView>
        <View style={styles.inner}>
    <View style={styles.innerView}>
         <TextInput placeholder="Your Name" style={[styles.textInput,{width:170, textAlign:'center',paddingLeft:0,}]} 
           value={formState.yourName} onChangeText={text => setTask("yourName",text)}
         />
          <TextInput placeholder="surname" style={[styles.textInput,{width:170,textAlign:'center',paddingLeft:0,}]}
            value={formState.surname} onChangeText={text => setTask("surname",text)}
          
          />
       </View>
     
          <TextInput placeholder="ID" style={styles.textInput} 
          
          value={formState.idNumber} onChangeText={text => setTask("idNumber",text)}

          />

          <TextInput placeholder="vehicle type" style={styles.textInput} 
            value={formState.vehicleType} onChangeText={text => setTask("vehicleType",text)}
          />

        
          <TextInput placeholder="Registration Numer" style={styles.textInput}
            value={formState.RegistrationNumber} onChangeText={text => setTask("RegistrationNumber",text)}
          />
          <TextInput placeholder="Vehicle Model" style={styles.textInput} 
            value={formState.vehicleModel} onChangeText={text => setTask("vehicleModel",text)}
          />
          <TextInput placeholder="Provice" style={styles.textInput}
            value={formState.province} onChangeText={text => setTask("province",text)}
          />

          <TouchableOpacity style={styles.btnContainer}
          onPress={()=>addCar()}
          >
         <Text style={{color:'white', fontWeight:'bold',fontSize:30}}>submit</Text>
          </TouchableOpacity>



          
        </View>
        </ScrollView>

      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
  height:'100%',
  width:'100%',
  backgroundColor:'white'
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-evenly',
    paddingVertical:100
  },

  textInput: {
    height: 60,
    backgroundColor:'#eee',
    fontSize:20,
    paddingLeft:20,
    marginBottom: 36,
    borderRadius:10,
    marginTop:10
  },
  btnContainer: {
    backgroundColor: "#90caf9",
    marginTop: 22,
    height:50,
    alignItems:'center'
    ,justifyContent:"center",
    borderRadius:10
  },

  innerView: {
    justifyContent:'space-between',
    flexDirection:'row'
  },
});

export default  AddVehicle;