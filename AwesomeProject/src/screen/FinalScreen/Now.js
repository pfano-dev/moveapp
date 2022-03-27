import { View, Text , Image, TouchableOpacity, ScrollView,RefreshControl,Alert,Linking} from 'react-native';
import React,{useState, useEffect}from 'react';
import FinalMap from '../../component/FinalMap';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import Iconi from 'react-native-vector-icons/AntDesign';
import { useRoute } from "@react-navigation/native";
import { Constants } from 'expo';
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { listVehicles } from '../../graphql/queries'


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


const Now = ({navigation}) => {



  const [Vehicle, setVehicle] = useState([])
  





  const fetchRooms = async () => {
    
    try {
        const listData = await API.graphql(graphqlOperation(listVehicles))
        const Vehicle= listData.data.listVehicles.items
     console.log(Vehicle)
     setVehicle(Vehicle)

  } catch (err) { console.log('error fetching actors') }

}




   
useEffect(() => {
  fetchRooms();
}, [])

const post = Vehicle[1];

  console.log(post)

  const _pressCall=()=>{
    const url='tel://0796495495'
    Linking.openURL(url)
  }


  const  alertMessage =()=>{

    Alert.alert(
      'Cancel delivery',
  
      'are you sure you want to cancel a Delivery',
  
      [
        {text:'NO',
        onPress:() => console.log(''),
        style:'cancel'
      },
        {text:'YES',
        onPress:() =>  navigation.navigate('HomeScreen')
      }
      ]
  
    
    )
  }
  


  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const route = useRoute();

  const data = route.params;

  const types = data.types;

  const origin = types.originLoc
  const destination =types.destinationLoc

  return (
    <ScrollView
    contentContainerStyle={styles.scrollView}
    refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    }
  >

    <View>
    <FinalMap origin={origin} destination={destination} />

    <View style={[styles.container,{alignItems:'center'}]}>
<View style={styles.innerContainer}>
<Image style={styles.image} source={require('../../assets/images/profile2.jpg')} />
<Text style={{fontSize:18, fontWeight:'bold'}}>{post.surname} {post.yourName}</Text>
</View>
<Text style={styles.text}>Delivery type : Bakkie</Text>
<Text style={styles.text}>Bakkie Registration : {post.RegistrationNumber} </Text>
<Text style={styles.text}>Bakkie model : {post.vehicleModel}</Text>
    </View>
    <View style={{padding:5,flexDirection:'row',justifyContent:'space-around'}}>
        <TouchableOpacity  style={{padding:5,alignItems:'center'}}
  onPress={()=>_pressCall()}
        >
        <Icon name="phone-call" size={20} color="green"/>
        <Text style={{fontSize:18, color:'green',marginLeft:10}}>Phone Call</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => navigation.navigate("ChatList")}
        style={{alignItems:'center',padding:5}}>
        <Iconi name="message1" size={20} color="green"/>
        <Text style={{fontSize:18, color:'green',marginLeft:10}}>Message</Text>
        </TouchableOpacity >
  
 
    </View>

    <TouchableOpacity  onPress={() => alertMessage()}  style={{flexDirection:'row',padding:10,justifyContent:'center',alignItems:"center"}}>
        <Iconi name="closecircleo" size={15} color="#ef5350"/>
        <Text style={{fontSize:15,marginLeft:10, color:'#ef5350'}}>cancel Delivery</Text>
        </TouchableOpacity >

    </View>
<TouchableOpacity
  onPress={() =>  navigation.navigate('HomeScreen')}
style={{position:'absolute',top:40,left:15,fontWeight:'bold'
,backgroundColor:"#000000aa",padding:5,borderRadius:50,width:50,height:50,justifyContent:'center',alignItems:'center'}}>
<Text style={{color:'white',fontWeight:'bold'}}>Home</Text>
</TouchableOpacity>
   
    </ScrollView>
  )
}

export default Now