import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StyleSheet, Text, View} from 'react-native';


export default function Home({Navigation}) {


  
    return (
  
   
      <View style={styles.container}>
        <View>
            <Text style={styles.ProgrammationText}>Programmation</Text>
        </View>
  
      </View>
      
    );
  }
  
  const styles = StyleSheet.create({
   
    ProgrammationText:{
      flex:1,
        marginBottom:-350,
        color: '#4CB8DA',    
        fontSize: 20,      
        fontStyle: 'normal',
        strokeWidth: 50,
        textAlign:'center',
        position:'relative',   
       
  }
  
   });
  