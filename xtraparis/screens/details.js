import { useEffect, useState } from 'react';
import {StyleSheet, Switch, View, Text, route, Button} from 'react-native';


export default function Details({route,navigation}){
    const { artist} = route.params;

const pressHandler = () => {
    navigation.goBack()
}
        return (
  
   
            
      <View style={styles.container}>
      <View>
        {/* placer les détails entre () et {} et déclarer  en const route.param pour passer la donnée */}
          <Text style={styles.ProgrammationText}>{(artist)}</Text>
      </View>
        <Button title='Retour' onPress={pressHandler}/>
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
        