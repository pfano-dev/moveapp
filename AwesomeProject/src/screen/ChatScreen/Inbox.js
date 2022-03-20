import { View, Text, Image} from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import styles from './styles'
import { useRoute } from "@react-navigation/native";
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat'
import Iconi from 'react-native-vector-icons/MaterialCommunityIcons';



const myIconio = <Iconi name="send-circle" size={32} color="#263238" />;

const Inbox = () => {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'good morning',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
        
      },
      {
        _id: 2,
        text: 'hellow morning',
        createdAt: new Date(),
        user: {
          _id:1 ,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
        
      },

      
    ])
  }, [])

    const route = useRoute();
    const data = route.params;
    const dat = data.image;


    const onSend = useCallback((messages = []) => {
      setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])





    const renderBubble =(props)=>{
      return(
      
      <Bubble
      {...props}
      
      wrapperStyle={{
        right:{
          backgroundColor:'#263238'
        }, 
        left:{
          backgroundColor:'#fafafa'
        }
      }}
      
      />
      
      )
      }
      





  
const renderSend =(props)=>{
return(

<Send
{...props}>
<View>
{myIconio}
</View>

</Send>

)
}

    const Chat = () => {
      return (
     
        <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={renderBubble}
        alwaysShowSend
      renderSend={renderSend}
      />


     );
   };
 
  return (

    
  <Chat/>


  )
}



export default Inbox