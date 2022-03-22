import { View, Text,TextInput,TouchableOpacity,Image,Animated, Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView } from 'react-native'
import React from 'react'
import styles from './styles'
import Iconi from 'react-native-vector-icons/Feather';
import hotels from '../../assets/data/hotels';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const {width} = Dimensions.get('screen');
const cardWidth = width / 1.8;

const myIcon = <Iconi name="search" size={30} color="#AAAAAA"/>;
const myIconi = <Icon name="keyboard-arrow-right" size={30} color="black"/>;
const myIconoi = <Icon name="keyboard-arrow-right" size={16} color="#AAAAAA"/>;
const SearchBar = () => {

  const navigation = useNavigation();

  const categories = ['All', 'Single', 'Family', 'Sharing'];
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

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











  const Card = ({hotel, index}) => {
 
    
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




  const TopHotelCard = ({hotel}) => {
    return (
      <TouchableOpacity
      onPress={()=> navigation.navigate('RoomDetails', hotel)}
      >
      <View style={styles.topHotelCard}>
        <View
          style={{
            position: 'absolute',
            top: 5,
            right: 5,
            zIndex: 1,
            flexDirection: 'row',
          }}>
          <Icon name="star" size={15} color={'orange'} />
          <Text style={{color: "#eee", fontWeight: 'bold', fontSize: 15}}>
            5.0
          </Text>
        </View>
        <Image style={styles.topHotelCardImage} source={hotel.image} />
        <View style={{paddingVertical: 5, paddingHorizontal: 10}}>
          <Text style={{fontSize: 10, fontWeight: 'bold'}}>{hotel.name}</Text>
          <Text style={{fontSize: 7, fontWeight: 'bold', color:'grey'}}>
            {hotel.location}
          </Text>
        </View>
      </View>
      </TouchableOpacity>
    );
  };






  return (
    <View style={{backgroundColor:'white',height:'100%'}}>
        <View style={styles.search}>
        <Text style={styles.text}>Find your room or house to rent</Text>
        <View style={styles.inputView}>
      
{myIcon}
<TextInput
        style={styles.input}
        placeholder="Search Location"
  
      />
        </View>
        </View>
        <CategoryList />
   
        <View>
          <FlatList
            horizontal
            data={hotels}
            contentContainerStyle={{
              paddingVertical: 30,
              paddingLeft: 20,
            }}
            keyExtractor={item => item.id} 
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => <Card hotel={item} index={index} />}
           
          />
          <TouchableOpacity style={{flexDirection:'row', justifyContent:"center",alignItems:'center',paddingBottom:20}}
          onPress={() => navigation.navigate("DisplayRoom")}
          >
          <Text style={{color:'black',textAlign:'center', fontSize:20, fontWeight:'bold'}}>Show all</Text>
          {myIconi}
          </TouchableOpacity>
      
        </View>
  
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <Text style={{fontWeight: 'bold', color:'grey'}}>
          Suggestions
          </Text>
          <TouchableOpacity 
          style={{flexDirection:'row', justifyContent:"center",alignItems:'center'}}
           onPress={() => navigation.navigate("DisplayRoom")}
          >
          <Text style={{color:'grey'}}>Show all</Text>
          { myIconoi }
          </TouchableOpacity>
        </View>
        <FlatList
          data={hotels}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 20,
            marginTop: 20,
            paddingBottom: 30,
          }}
          renderItem={({item}) => <TopHotelCard hotel={item} />}
        />

    </View>
  )
}

export default SearchBar