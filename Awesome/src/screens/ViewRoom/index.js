import { View, Text,TextInput,TouchableOpacity,Image,Animated, Dimensions,
    FlatList,
    SafeAreaView,
    ScrollView } from 'react-native'
  import React from 'react'
  import styles from './styles'
  import Iconi from 'react-native-vector-icons/Feather';
  import hotels from '../../assets/data/hotel';
  import Icon from 'react-native-vector-icons/MaterialIcons';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import { useNavigation } from '@react-navigation/native';

  const {width} = Dimensions.get('screen');
  const cardWidth = width ;
  
  const myIcon = <Iconi name="search" size={30} color="#AAAAAA" />;
  
  const ViewRoom = () => {
    
     const navigation = useNavigation();
    
    const Card = ({hotel, index,}) => {
    
       return (
      
     <Animated.View style={styles.card}>

  <View style={styles.priceTag}>
              <Text
                style={{color: "#eee", fontSize: 20, fontWeight: 'bold'}}>
                R{hotel.price}
              </Text>
            </View>
  
         <Image source={hotel.image} style={styles.cardImage} />
  
  
  
         <View style={styles.cardDetails}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text style={{fontWeight: 'bold', fontSize: 17}}>
                    {hotel.name}
                  </Text>
                  <Text style={{color:'grey', fontSize: 12}}>
                    {hotel.location}
                  </Text>
                </View>
                <Icon name="bookmark-border" size={26} color={"black"} />
              </View>
              <Text style={{fontSize: 11, color:'black'}}>{hotel.type} </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Icon name="star" size={15} color='orange' />
                  <Icon name="star" size={15} color='orange' />
                  <Icon name="star" size={15} color='orange' />
                  <Icon name="star" size={15} color='orange' />
                  <Icon name="star" size={15} color='grey' />
                </View>
                <Text style={{fontSize: 10, color:'grey'}}>365 reviews</Text>
              </View>
            </View>
     </Animated.View>
       
      );
    };
  
  
  

  
  
  
  
  
    return (
      <View style={{backgroundColor:'white',height:'100%'}}>



<View style={styles.search}>
  <TouchableOpacity onPress={()=>navigation.navigate("AddRoom")}
          style={{flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
  <Text style={{fontSize:25,color:'#4caf50'}}> add room</Text>
  {<Ionicons name="add-circle-outline" size={25} color="#4caf50" />}
  </TouchableOpacity>
        
          </View>
          
          <View style={styles.search}>
          <Text style={styles.text}> your rooms or houses </Text>
          </View>
         
     

         
            <Animated.FlatList
              data={hotels}
              renderItem={({item, index}) => <Card hotel={item} index={index} />}
             
            />
          
       
      </View>
    )
  }
  
  export default  ViewRoom;