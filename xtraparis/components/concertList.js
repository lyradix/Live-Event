import { useEffect, useState } from 'react';
import {StyleSheet, Switch, View, Text, FlatList, SafeAreaView,Pressable, TouchableOpacity, Button} from 'react-native';

export default function ConcertList() {

    const concertFilterFriday = concert.filter(function(item){
        return item.jour == 'Vendredi';
     }).map(function({artist,horaire}){
         return {artist,horaire};
     });
     
     const ListHeader = () =>{
         return (
             <View>
                 <Text style={styles.labelDay}>Vendredi<>                                        </>
                 29 août 2024
                 </Text>
                 
             </View>
         );
     };
     
     
     const ConcertListfriday =
     
     <View>
     
     
     <SafeAreaView>
     <FlatList
     // numColumns={2} pour diviser en deux colonnes
     keyExtractor={(item) => item.id}
     data={concertFilterFriday}
     // destructuré le item
     ListHeaderComponent={ListHeader}
     renderItem={({item})=>(
        
     <TouchableOpacity onPress={() => pressHandler(item.id)}>
     
     <Text style={styles.item}>{item.artist} {item.horaire} </Text>
     </TouchableOpacity>
     )}
     />
     </SafeAreaView>
     </View> 
     
        
}
