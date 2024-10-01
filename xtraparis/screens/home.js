import React, {useState} from 'react';


import { StyleSheet, Text, View} from 'react-native';


export default function Home() {


  
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
      flex:0.4,
        marginBottom:-350,
        color: '#4CB8DA',    
        fontSize: 20,      
        fontStyle: 'normal',
        strokeWidth: 50,
        textAlign:'center',
        position:'relative',   
       
  }
  
   });
  