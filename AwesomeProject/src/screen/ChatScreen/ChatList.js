import { View, Text,TouchableOpacity,FlatList, Image } from 'react-native'
import React from 'react';
import Chats from '../../assets/data/Chats';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';


const ChatList = () => {
    const navigation = useNavigation();


    const List = ({Chat, index}) => {
   
        return (
         <TouchableOpacity
         onPress={() => navigation.navigate('Inbox', Chat)}
         >
             <View style={styles.container}>
                 <View style={styles.inner}>

                 <Image style={styles.image} source={Chat.image} />
<View>
<View style={{flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
<Text style={styles.name}>{Chat.name} </Text>
<Text style={styles.detail}>{Chat.detail} </Text>
</View>
<Text style={styles.message}>{Chat.message}</Text>

</View>
</View>
 
<View>
<Text style={styles.message}>{Chat.time}</Text>
</View>
               
             </View>
       
      </TouchableOpacity>
        
       );
     };
   
   



  return (
    <View>
      <FlatList
              data={Chats}
              renderItem={({item, index}) => <List Chat={item} index={index} />}
             
            />
    </View>
  )
}

export default ChatList