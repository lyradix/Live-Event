import * as React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Programmation from './screens/programmation';
import Home from './screens/home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProgrammationStack from './routes/programmationStack';
import Map from './screens/map';



const Stack = createNativeStackNavigator();




const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen style={styles.link} name="Home" component={Home} />
        <Drawer.Screen name="Programmation" component={Programmation} />
        <Drawer.Screen name="Map" component={Map} />
      </Drawer.Navigator>

   

    </NavigationContainer>

    
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

 })