import React, {useState} from 'react';

import Home from './screens/home';
import { StyleSheet, View, } from 'react-native';
import Programmation from './screens/programmation';

export default function App() {


  return (

   
    <View style={styles.container}>
      <Home/>
      <Programmation/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },



 });
