import { View, Text , Image, TouchableOpacity, ScrollView,RefreshControl,Alert,Linking} from 'react-native';
import React from 'react';
import FinalMap from '../../component/FinalMap';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import Iconi from 'react-native-vector-icons/AntDesign';
import { useRoute } from "@react-navigation/native";
import { Constants } from 'expo';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


const Now = ({navigation}) => {

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
console.log(data)

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

    <View style={styles.container}>
<View style={styles.innerContainer}>
<Image style={styles.image} source={require('../../assets/images/profile2.jpg')} />
<Text style={{fontSize:18, fontWeight:'bold'}}>Muleya pfano</Text>
</View>
<Text style={styles.text}>Delivery type : Bakkie</Text>
<Text style={styles.text}>Bakkie Registration: XLM 789 L</Text>
<Text style={styles.text}>Bakkie model: Isuzu D-Max 250C Base 4x2</Text>
    </View>
    <View style={{padding:10}}>
        <TouchableOpacity  style={{flexDirection:'row',padding:10}}
  onPress={()=>_pressCall()}
        >
        <Icon name="phone-call" size={30} color="black"/>
        <Text style={{fontSize:18, fontWeight:'bold',marginLeft:10}}>Phone Call</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => navigation.navigate("ChatList")}
        style={{flexDirection:'row',padding:10}}>
        <Iconi name="message1" size={30} color="black"/>
        <Text style={{fontSize:18, fontWeight:'bold',marginLeft:10}}>Message</Text>
        </TouchableOpacity >
  
 
    </View>

    <TouchableOpacity  onPress={() => alertMessage()}  style={{flexDirection:'row',padding:10,justifyContent:'center',alignItems:"center"}}>
        <Iconi name="closecircleo" size={15} color="#ef5350"/>
        <Text style={{fontSize:15,marginLeft:10, color:'#ef5350'}}>cancel Delivery</Text>
        </TouchableOpacity >

    </View>
<TouchableOpacity
  onPress={() =>  navigation.navigate('HomeScreen')}
style={{position:'absolute',top:20,left:15,fontWeight:'bold'
,backgroundColor:"#000000aa",padding:5,borderRadius:50,width:50,height:50,justifyContent:'center',alignItems:'center'}}>
<Text style={{color:'white',fontWeight:'bold'}}>Home</Text>
</TouchableOpacity>
   
    </ScrollView>
  )
}

export default Now