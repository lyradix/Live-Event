import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Navigator from './routes/homestack';

import { StyleSheet, View, } from 'react-native';
import Programmation from './screens/programmation';
import Details from './screens/details';
import Home from './screens/home';
import SideBar from './screens/sideBar';
import About from './screens/about';

const Stack = createNativeStackNavigator();

export default function App() {


  return (

    // <Navigator/>

    <NavigationContainer>
    <Stack.Navigator>

      <Stack.Screen
        name="SideBar"
        component={SideBar}
        options={{title: 'SideBar'}}
      />


      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name="Programmation" component={Programmation} />
      <Stack.Screen name='Details' component={Details}/>
      <Stack.Screen name="About" component={About} />
 
    </Stack.Navigator>
  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop:50,
    flex:1,
    backgroundColor: '#012B29',
    
  
  },



 });