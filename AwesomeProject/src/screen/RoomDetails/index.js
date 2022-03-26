import {
    View,
    Text,
    ImageBackground,
    Image,
    ScrollView,
    TouchableOpacity,
    Modal,
    Button,
    Linking
  } from "react-native";
  import { useNavigation } from "@react-navigation/native";
  import React, { useState } from "react";
  import styles from "./styles";
  import Icon from "react-native-vector-icons/MaterialIcons";
  import AntDesign from "react-native-vector-icons/AntDesign";
  import AntDesig from "react-native-vector-icons/AntDesign";
  import AntDesi from "react-native-vector-icons/AntDesign";
  import { useRoute } from "@react-navigation/native";
  import { Constants } from 'expo';


  const myIcon = <Icon name="close" size={20} color="white" />;
  
  const  RoomDetails = () => {

  const _pressCall=()=>{
      const url='tel://0796495495'
      Linking.openURL(url)
    }


    const [mod, setMod] = useState(false);
    const categories = [
    require('../../assets/images/Room1.jpg'),
    require('../../assets/images/Room2.jpg'),
   require('../../assets/images/Room3.jpg'),
    require('../../assets/images/Room4.jpg'),
    ];
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
    const route = useRoute();

    const data = route.params;
    const dat = data.image;

    const navigation = useNavigation();
    return (
      <View>
        <View style={styles.container}>
          <ImageBackground
            source={dat}
            style={styles.image}
          >
            <Text style={styles.text}>Rent</Text>
            <Text style={styles.texto}>R70000/pm</Text>
          </ImageBackground>
        </View>
        <View style={styles.textV}>
          <Text style={styles.textD}>
         {data.details}
          </Text>
        </View>
        <View>
          <Text style={styles.textP}>PHOTOS</Text>
  
          <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              
            {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              setMod(true);
              setSelectedCategoryIndex(index)
            }}
            >
            <View>
            
              <Image
                  style={styles.images}
                  source={item}
                />
    
    
    
    {selectedCategoryIndex == index && (
             <Modal animationType="slide" visible={mod} transparent={true}>


             <View
               style={{
                 backgroundColor: "#eee",
                 flex: 1,
                 padding: 140,
                 height: "100%",
                 width: "100%",
                 justifyContent: "center",
                 alignItems: "center",
               }}
             >


               <Image
                 resizeMode="contain"
                 style={{ margin: 10, borderRadius: 10, flex: 1 }}
                 source={item}
               />
              <TouchableOpacity
  style={{ paddingTop:30, alignItems:'center'}}

               onPress={() => {
                 setMod(false);
              
               }}>
                 <View style={{height:30,width:30,backgroundColor:'#ff6e40',justifyContent:'center',borderRadius:25,alignItems:'center'}}>
                 {myIcon} 
                 </View>
                   
                 <Text style={{fontSize:2, color:'#ff6e40'}}>cancel</Text>
              
             </TouchableOpacity>
             </View>
           </Modal>

              )}
    
            </View>
          </TouchableOpacity>
        ))}





             
              {/* <Modal animationType="slide" visible={mod} transparent={true}>
                <TouchableOpacity
                  onPress={() => {
                    setMod(false);
                  }}
                  style={{
                    backgroundColor: "#000000aa",
                    flex: 1,
                    padding: 140,
                    height: "100%",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    resizeMode="contain"
                    style={{ margin: 10, borderRadius: 10, flex: 1 }}
                    source={require("../../assets/images/Room1.jpg")}
                  />
                </TouchableOpacity>
              </Modal>
   */}
              
  
              
              
            </ScrollView>
          </View>
        </View>
        <View style={{ alignItems: "center", marginTop: 30 }}>
          <View
            style={{
              height: 200,
              alignItems: "center",
              justifyContent: 'center',
              padding: 10,
              backgroundColor: "#e0e0e0",
              borderRadius: 10,
              width: "90%",
            }}
          >
            <Image
              style={{
                borderRadius: 50,
                height: 60,
                width: 60,
                justifyContent: "center",
                alignItems: "center",
              }}
              source={require("../../assets/images/profile.jpg")}
            />
  
            <View>
              <Text style={{ fontSize: 20, fontWeight: "bold",textAlign:'center' }}>
                Muleya Pfano
              </Text>
              <Text style={{ fontSize: 18, color: "#455a64",textAlign:'center'  }}>
             owner
              </Text>
            </View>
            <View style={{ flexDirection: "row" ,marginTop:20,justifyContent:'space-between', width:'100%',paddingHorizontal:10}}>
              <TouchableOpacity
                style={{
                  backgroundColor: "white",
                  borderRadius: 50,
                  height: 50,
                  width: 50,
                  justifyContent: "center",
                  alignItems: "center",
               
                }}

                onPress={()=>_pressCall()}
              >
                <AntDesig name="phone" size={30} color="black" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "white",
                  borderRadius: 50,
                  height: 50,
                  width: 50,
                  justifyContent: "center",
                  alignItems: "center",
            
                }}
              
                onPress={()=> navigation.navigate('ChatList')}
              >
                <AntDesi name="message1" size={30} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };
  
  export default RoomDetails;
  

