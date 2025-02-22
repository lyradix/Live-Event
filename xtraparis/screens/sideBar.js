import { useEffect, useState } from 'react';
import {StyleSheet, Switch, View, Text, FlatList, SafeAreaView,Pressable, TouchableOpacity, Button} from 'react-native';





export default function SideBar({ navigation }) {

  

    return (
  
   
      <View style={styles.container}>
         
         <View>
      

         <TouchableOpacity onPress={() => navigation.navigate('Home')}>
         <Text style={styles.link}>Accueil</Text>
         </TouchableOpacity>


         <TouchableOpacity onPress={() => navigation.navigate('Programmation')}>
         <Text style={styles.link}>Programmation</Text>
         </TouchableOpacity>

         

         <TouchableOpacity onPress={() => navigation.navigate('About')}>
         <Text style={styles.link}>About</Text>
         </TouchableOpacity> 

        </View>   
           
     
       </View>
      
   

);



     }
  
  const styles = StyleSheet.create({
    container: {
        
      textAlign:'right',
      justifyContent:'left',
      backgroundColor: '#096662',
      paddingBottom:90,
    },
  
  link:{
    color:'#fff',
    marginTop:24,
    padding:10,
    fontSize:24,
  
    
  },
  
   });
  