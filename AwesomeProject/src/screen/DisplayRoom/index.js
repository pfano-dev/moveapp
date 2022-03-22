import { View, Text,TextInput,TouchableOpacity,Image,Animated, Dimensions,
    FlatList,
    SafeAreaView,
    ScrollView } from 'react-native'
  import React,{useState, useEffect} from 'react'
  import styles from './styles'
  import Iconi from 'react-native-vector-icons/Feather';
  import hotels from '../../assets/data/hotels';
  import Icon from 'react-native-vector-icons/MaterialIcons';
  import { useNavigation } from '@react-navigation/native';

  const {width} = Dimensions.get('screen');
  const cardWidth = width ;
  
  const myIcon = <Iconi name="search" size={30} color="#AAAAAA" />;
  
  const DisplayRoom = () => {
    const navigation = useNavigation();

    const categories = ['All', 'Single', 'Family', 'Sharing'];
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
    const [activeCardIndex, setActiveCardIndex] = React.useState(0);
    const scrollX = React.useRef(new Animated.Value(0)).current;
  

    

    const CategoryList = ({navigation}) => {
      return (
        <View style={styles.categoryListContainer}>
          {categories.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPress={() => setSelectedCategoryIndex(index)}
              >
              <View>
                <Text
                
                style={{
                  ...styles.categoryListText,
                  color:
                    selectedCategoryIndex == index
                      ? '#eee'
                      : 'black'
                }}
                
                >
                  {item}
                </Text>
                
        
                {selectedCategoryIndex == index && (
                  <View
                    style={{
                      height: 3,
                      width: 30,
                      backgroundColor: '#eee',
                      marginTop: 2,
                    }}
                  />
                
                )}
  
              </View>
            </TouchableOpacity>
          ))}
        </View>
      );
    };
  
  
  
  
  
  
  
  
  
  
  
    const Card = ({hotel, index,}) => {
    
       return (
        <TouchableOpacity
        onPress={() => navigation.navigate('RoomDetails', hotel)}
       >
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
     </TouchableOpacity>
       
      );
    };
  
  
  
    const [dataState,setData] = useState(hotels)

    const searchName =(input)=>{

      let data = dataState
      let searchData = data.filter((item)=>{
        return item.location.toLowerCase().includes(input.toLowerCase())
      });

{ input?
  setData(searchData):
  setData(hotels)
}
  }
    

  
  
  
  
    return (
      <View style={{backgroundColor:'white',height:'100%'}}>
          <View style={styles.search}>
          <Text style={styles.text}>Find your room or house to rent</Text>
          <View style={styles.inputView}>
        
  {myIcon}
  <TextInput
          style={styles.input}
          placeholder="Search Location"
          onChangeText={(input)=>{
            searchName(input)
          }}
    
        />
          </View>
          </View>
          <CategoryList />
     

         
            <Animated.FlatList
            data={dataState}
              renderItem={({item, index}) => <Card hotel={item} index={index} />}
              keyExtractor={(item, index) =>index.toString()} 
            />
          
       
      </View>
    )
  }
  
  export default DisplayRoom;