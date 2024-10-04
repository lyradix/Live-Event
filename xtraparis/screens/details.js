import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';


export default function Details() {


  
    return (
  
   
      <View style={styles.container}>
        <View>
            <Text>Details</Text>
            <StatusBar style='auto'/>
        </View>
  
      </View>
      
    );
  }
  
  const styles = StyleSheet.create({
    container: {
   
        textAlign:'center',
        justifyContent:'center',
        backgroundColor: '#012B29',
        paddingBottom:90,
      },

  
  
   });
  