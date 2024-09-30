import {useState} from 'react';
import{Text, View, StyleSheet, FlatList, TouchableOpacity, Button} from 'react-native';

export default function ConcertList() {

    const concertFilter = concert.filter(function(item){
        return item.jour == 'Vendredi';
     }).map(function({artist,horaire}){
         return {artist,horaire};
     });
     
     
     
     const ConcertList =
     
     <View>
     <View>
         <Text style={styles.labelDay}>Vendredi</Text>
     </View>
     <FlatList
     // numColumns={2} pour diviser en deux colonnes
     keyExtractor={(item) => item.id}
     data={concertFilter}
     // destructuré le item
     renderItem={({item})=>(
     <TouchableOpacity onPress={() => pressHandler(item.id)}>
     <Text style={styles.item}>{item.artist} {item.horaire} </Text>
     </TouchableOpacity>
     )}
     />
     </View> 
        
}
