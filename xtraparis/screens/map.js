import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';


export default function Map() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={{
    latitude: 48.83444,
    longitude: 2.19919,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}/>

    </View>
  );
}

const styles = StyleSheet.create({
  
  map: {
    width: '100%',
    height: '80%',
  },
});