import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/home';
import { StyleSheet, View, } from 'react-native';
import Programmation from './screens/programmation';
import Details from './screens/details';

const Stack = createNativeStackNavigator();

export default function App() {


  return (

    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Programmation}
        options={{title: 'Programmation'}}
      />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    backgroundColor: '#012B29',
    
  
  },



 });