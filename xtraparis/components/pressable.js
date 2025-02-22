import { useEffect, useState } from 'react';
import {StyleSheet, Switch, View, Text, FlatList, SafeAreaView,Pressable, TouchableOpacity, Button} from 'react-native';


export default function Pressable() {
    return (
  
    
   
      <View >
      {/* function setToggle sera placé dans le bouton */}
      <Pressable onPress = {() => {setToggle(ConcertListfriday)}}
 
     
          style={({pressed}) => [
              {
                color:'#096662',
                backgroundColor: pressed ? '#096662' : '#E5C8C8', 
                padding:10,
                borderWidth:2,
                margin:5,
                borderRadius:5,
              },
              
            ]}   >
          
          
               
          <Text style={styles.buttonText}>Vendredi</Text>
      </Pressable>

      <Pressable onPress = {() => {setToggle(ConcertListSaturday)}}
 
     
          style={({pressed}) => [
              {
                color:'#096662',
                backgroundColor: pressed ? '#096662' : '#E5C8C8', 
                padding:10,
                borderWidth:2,
                margin:5,
                borderRadius:5,
              },
              
            ]}   >
          
          
               
          <Text style={styles.buttonText}>Samedi</Text>
      </Pressable>
      
      <Pressable onPress = {() => {setToggle(ConcertListSunday)}}
 
     
          style={({pressed}) => [
          {
              color:'#096662',
              backgroundColor: pressed ? '#096662' : '#E5C8C8', 
              padding:10,
              borderWidth:2,
              margin:5,
              borderRadius:5,
          },
          
          ]}   >
      
          <Text style={styles.buttonText}>Dimanche</Text>
      </Pressable>

  </View>

         
    
      

    );




  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 0.8,
      paddingTop:-30,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  item:{
    marginTop:24,
    padding:10,
    backgroundColor:'#E5C8C8',
    fontSize:24,
    borderRadius:20,
    
  },
  labelDay:{
    marginTop:24,
    padding:10,
    backgroundColor:'#096662',
    fontSize:24,
    borderRadius:20,

  },
  
   });

}
  