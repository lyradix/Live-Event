import { useEffect, useState } from 'react';
import {StyleSheet, Switch, View, Text, FlatList, SafeAreaView,Pressable, TouchableOpacity, Button} from 'react-native';





export default function Programmation() {

//   let concertData = require('../data/db.json')




let concert = [
    {
        'artist': 'Camille Cour',
        'jour': 'Vendredi',
        'date': '9/13/24',
        'scène': 'Scène eXageras',
        'horaire': '14:00 à 15:20',
        'FamousSong': 'Les Quatres Saisons de Vivaldi',
        'genre': 'Classic',
        'filename': 'image-1.jpg',
        'id': '1'
    },
    {
        'artist': 'RVG',
        'jour': 'Vendredi',
        'date': '9/13/24',
        'scène': 'Scéne eXodius',
        'horaire': '15:20 à 17:40',
        'FamousSong': 'Nothing Really Changes',
        'genre': 'Rock',
        'filename': 'image-2.jpg',
        'id': '2'
    },
    {
        'artist': 'Samba de la Muerte',
        'jour': 'Vendredi',
        'date': '9/13/24',
        'scène': 'Scène eXageras',
        'horaire': '17:00 à 18:20',
        'FamousSong': 'You\'ll Never Know When I Lie',
        'genre': 'Electro-organique',
        'filename': 'image-3.jpg',
        'id': '3'
    },
    {
        'artist': 'Rim K',
        'jour': 'Vendredi',
        'date': '9/13/24',
        'scène': 'Scène eXperienza',
        'horaire': '18:10 à 19:30',
        'FamousSong': 'Tant Pis',
        'genre': 'Rap',
        'filename': 'image-4.jpg',
        'id': '4'
    },
    {
        'artist': 'Sœurs Malsaines',
        'jour': 'Vendredi',
        'date': '9/13/24',
        'scène': 'Scène eXageras',
        'horaire': '19:15 à 20: 05',
        'FamousSong': 'Hathor',
        'genre': 'Electro',
        'filename': 'image-5.jpg',
        'id': '5'
    },
    {
        'artist': 'Soprano',
        'jour': 'Vendredi',
        'date': '9/13/24',
        'scène': 'Scéne eXclammation !',
        'horaire': '19:30 à 20: 30',
        'FamousSong': 'Moi j\'ai pas',
        'genre': 'Rap',
        'filename': 'image-6.jpg',
        'id': '6'
    },
    {
        'artist': 'Louise Attaque',
        'jour': 'Vendredi',
        'date': '9/13/24',
        'scène': 'Scéne eXodius',
        'horaire': '20:30 à 21:25',
        'FamousSong': 'Les nuits parisiennes',
        'genre': 'folk rock français',
        'filename': 'image-7.jpg',
        'id': '7'
    },
    {
        'artist': 'Lana Del rey',
        'jour': 'Vendredi',
        'date': '9/13/24',
        'scène': 'Scéne eXclammation !',
        'horaire': '21:20 à 22:00',
        'FamousSong': 'Video Games',
        'genre': 'Rock Psychédélique',
        'filename': 'image-8.jpg',
        'id': '8'
    },
    {
        'artist': 'la caravane Passe',
        'jour': 'Vendredi',
        'date': '9/13/24',
        'scène': 'Scène eXperienza',
        'horaire': '22:00 à 23:05',
        'FamousSong': 'Rom à Babylone',
        'genre': 'musique tzigane',
        'filename': 'image-9.jpg',
        'id': '9'
    },
    {
        'artist': 'Burna Boy',
        'jour': 'Vendredi',
        'date': '9/13/24',
        'scène': 'Scène eXpassa',
        'horaire': '23:00 à 00:30',
        'FamousSong': 'Gbona',
        'genre': 'Afrobeat',
        'filename': 'image-10.jpg',
        'id': '10'
    },
    {
        'artist': 'Barbabra Pravi',
        'jour': 'Vendredi',
        'date': '9/13/24',
        'scène': 'Scéne eXodius',
        'horaire': '00:00 à 01:00',
        'FamousSong': 'Qui j\'étais',
        'genre': 'Chanson française',
        'filename': 'image-11.jpg',
        'id': '11'
    },
    {
        'artist': 'Charlotte De hitte',
        'jour': 'Vendredi',
        'date': '9/13/24',
        'scène': 'Scène eXageras',
        'horaire': '00:45 à 02:15',
        'FamousSong': 'ROAR',
        'genre': 'Techno',
        'filename': 'image-12.jpg',
        'id': '12'
    },
    {
        'artist': 'Yungblud',
        'jour': 'Vendredi',
        'date': '9/13/24',
        'scène': 'Scène eXpassa',
        'horaire': '02:10 à 03:00',
        'FamousSong': 'Abyss',
        'genre': 'Rock-Alternatif',
        'filename': 'image-13.jpg',
        'id': '13'
    },
    {
        'artist': 'Samir Sadaoui',
        'jour': 'Samedi',
        'date': '9/14/24',
        'scène': 'Scène eXageras',
        'horaire': '14:00 à 15:20',
        'FamousSong': 'Lemhayen',
        'genre': 'Oriental',
        'filename': 'image-14.jpg',
        'id': '14'
    },
    {
        'artist': 'Santa',
        'jour': 'Samedi',
        'date': '9/14/24',
        'scène': 'Scéne eXodius',
        'horaire': '15:20 à 17:40',
        'FamousSong': 'Popcorn salé',
        'genre': 'néo-varieté',
        'filename': 'image-15.jpg',
        'id': '15'
    },
    {
        'artist': 'Girl In Red ',
        'jour': 'Samedi',
        'date': '9/14/24',
        'scène': 'Scène eXageras',
        'horaire': '17:15 à 18:35',
        'FamousSong': 'I Wanna Be Your Girlfriend',
        'genre': 'Indie-Pop ',
        'filename': 'image-16.jpg',
        'id': '16'
    },
    {
        'artist': 'SDM',
        'jour': 'Samedi',
        'date': '9/14/24',
        'scène': 'Scène eXperienza',
        'horaire': '18:10 à 19:30',
        'FamousSong': 'Bolide Allemand',
        'genre': 'Rap',
        'filename': 'image-17.jpg',
        'id': '17'
    },
    {
        'artist': 'Jain',
        'jour': 'Samedi',
        'date': '9/14/24',
        'scène': 'Scène eXageras',
        'horaire': '19:05 à 20: 10',
        'FamousSong': 'Alright',
        'genre': 'Worldbeat',
        'filename': 'image-18.jpg',
        'id': '18'
    },
    {
        'artist': 'Bruno Mars',
        'jour': 'Samedi',
        'date': '9/14/24',
        'scène': 'Scéne eXclammation !',
        'horaire': '19:30 à 20: 30',
        'FamousSong': 'Uptown Funk',
        'genre': 'Pop funk',
        'filename': 'image-19.jpg',
        'id': '19'
    },
    {
        'artist': 'Mc Solaar',
        'jour': 'Samedi',
        'date': '9/14/24',
        'scène': 'Scéne eXodius',
        'horaire': '20:30 à 21:25',
        'FamousSong': 'Solaar pleure',
        'genre': 'Rap',
        'filename': 'image-20.jpg',
        'id': '20'
    },
    {
        'artist': 'Stromae',
        'jour': 'Samedi',
        'date': '9/14/24',
        'scène': 'Scéne eXclammation !',
        'horaire': '21:25 à 22:05',
        'FamousSong': 'Alors on danse',
        'genre': 'Pop House',
        'filename': 'image-21.jpg',
        'id': '21'
    },
    {
        'artist': 'Hoshi',
        'jour': 'Samedi',
        'date': '9/14/24',
        'scène': 'Scène eXperienza',
        'horaire': '22:00 à 23:05',
        'FamousSong': 'Ta marinière',
        'genre': 'Pop-Rock',
        'filename': 'image-22.jpg',
        'id': '22'
    },
    {
        'artist': 'Bianca Costa',
        'jour': 'Samedi',
        'date': '9/14/24',
        'scène': 'Scène eXpassa',
        'horaire': '23:00 à 00:30',
        'FamousSong': 'Olé Olé',
        'genre': 'Bossa nova',
        'filename': 'image-23.jpg',
        'id': '23'
    },
    {
        'artist': 'Cerone',
        'jour': 'Samedi',
        'date': '9/14/24',
        'scène': 'Scéne eXodius',
        'horaire': '00:00 à 01:00',
        'FamousSong': 'Give me love',
        'genre': 'Electro',
        'filename': 'image-24.jpg',
        'id': '24'
    },
    {
        'artist': 'La Fève',
        'jour': 'Samedi',
        'date': '9/14/24',
        'scène': 'Scène eXageras',
        'horaire': '00:50 à 02:25',
        'FamousSong': 'BALENCIAGA',
        'genre': 'Rap',
        'filename': 'image-25.jpg',
        'id': '25'
    },
    {
        'artist': 'Trinix',
        'jour': 'Samedi',
        'date': '9/14/24',
        'scène': 'Scène eXpassa',
        'horaire': '02:10 à 03:00',
        'FamousSong': 'Sweet Dreams',
        'genre': 'Mixage',
        'filename': 'image-26.jpg',
        'id': '26'
    },
    {
        'artist': 'SCH',
        'jour': 'Dimanche',
        'date': '9/15/24',
        'scène': 'Scène eXageras',
        'horaire': '14:00 à 15:20',
        'FamousSong': '',
        'genre': 'Parolier',
        'filename': 'image-27.jpg',
        'id': '27'
    },
    {
        'artist': 'Slimane',
        'jour': 'Dimanche',
        'date': '9/15/24',
        'scène': 'Scéne eXodius',
        'horaire': '15:20 à 17:40',
        'FamousSong': 'Mon amour',
        'genre': 'Pop RnB',
        'filename': 'image-28.jpg',
        'id': '28'
    },
    {
        'artist': 'Lucky Love',
        'jour': 'Dimanche',
        'date': '9/15/24',
        'scène': 'Scène eXageras',
        'horaire': '17:00 à 18:20',
        'FamousSong': 'I\'M READY',
        'genre': 'pop',
        'filename': 'image-29.jpg',
        'id': '29'
    },
    {
        'artist': 'Chris James',
        'jour': 'Dimanche',
        'date': '9/15/24',
        'scène': 'Scène eXperienza',
        'horaire': '18:10 à 19:30',
        'FamousSong': '8 Billion',
        'genre': 'pop',
        'filename': 'image-30.jpg',
        'id': '30'
    },
    {
        'artist': 'David Halliday',
        'jour': 'Dimanche',
        'date': '9/15/24',
        'scène': 'Scène eXageras',
        'horaire': '19:05 à 20: 05',
        'FamousSong': 'J\'ai quelque chose à vous dire',
        'genre': 'pop rock',
        'filename': 'image-31.jpg',
        'id': '31'
    },
    {
        'artist': 'Meute',
        'jour': 'Dimanche',
        'date': '9/15/24',
        'scène': 'Scène eXpassa',
        'horaire': '19:30 à 20: 30',
        'FamousSong': 'vermis',
        'genre': 'Electro',
        'filename': 'image-32.jpg',
        'id': '32'
    },
    {
        'artist': 'Eddy de Pretto',
        'jour': 'Dimanche',
        'date': '9/15/24',
        'scène': 'Scéne eXodius',
        'horaire': '20:25 à 21:45',
        'FamousSong': 'Bateaux-Mouches',
        'genre': 'Electro-pop',
        'filename': 'image-33.jpg',
        'id': '33'
    },
    {
        'artist': 'Big Flo & Oli',
        'jour': 'Dimanche',
        'date': '9/15/24',
        'scène': 'Scéne eXclammation !',
        'horaire': '21:20 à 22:00',
        'FamousSong': 'Ici c’est Toulouse',
        'genre': 'Rap',
        'filename': 'image-34.jpg',
        'id': '34'
    },
    {
        'artist': 'Theo Muller',
        'jour': 'Dimanche',
        'date': '9/15/24',
        'scène': 'Scène eXperienza',
        'horaire': '22:10 à 23:15',
        'FamousSong': 'Mystère dans les abers',
        'genre': 'Electro rave',
        'filename': 'image-35.jpg',
        'id': '35'
    },
    {
        'artist': 'Daft Punk',
        'jour': 'Dimanche',
        'date': '9/15/24',
        'scène': 'Scéne eXclammation !',
        'horaire': '23:00 à 00:30',
        'FamousSong': 'Harder, Better, Faster, Stronger',
        'genre': 'Electro House',
        'filename': 'image-36.jpg',
        'id': '36'
    },
    {
        'artist': 'Sierra',
        'jour': 'Dimanche',
        'date': '9/15/24',
        'scène': 'Scéne eXodius',
        'horaire': '00:00 à 01:00',
        'FamousSong': 'ENFASI',
        'genre': 'Rap',
        'filename': 'image-37.jpg',
        'id': '37'
    },
    {
        'artist': 'Molécule',
        'jour': 'Dimanche',
        'date': '9/15/24',
        'scène': 'Scène eXageras',
        'horaire': '00:45 à 02:15',
        'FamousSong': 'Abysses',
        'genre': 'Electro-organique',
        'filename': 'image-38.jpg',
        'id': '38'
    },
{
    'artist': 'Aotem',
    'jour': 'Dimanche',
    'date': '9/15/24',
    'scène': 'Scène eXpassa',
    'horaire': '02:10 à 03:00',
    'FamousSong': 'Ghosts of The Past',
    'genre': 'Electro',
    'filename': 'image-39.jpg',
    'id': '39'
}
]

const [toggle, setToggle] = useState(null);

// filtre pour retourner la liste pour un jour spécifique


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


//filtre pour le jour de samedi
const concertFilterSaturday = concert.filter(function(item){
    return item.jour == 'Samedi';
 }).map(function({artist,horaire}){
     return {artist,horaire};
 });
 
 const ListHeadersaturday = () =>{
     return (
         <View>
             <Text style={styles.labelDay}>Samedi<>                                        </>
             30 août 2024
             </Text>
             
         </View>
     );
 };
 
 
 const ConcertListSaturday =
 
 <View>
 
 
 <SafeAreaView>
 <FlatList
 // numColumns={2} pour diviser en deux colonnes
 keyExtractor={(item) => item.id}
 data={concertFilterSaturday}
 // destructuré le item
 ListHeaderComponent={ListHeadersaturday}
 renderItem={({item})=>(
    
 <TouchableOpacity onPress={() => pressHandler(item.id)}>
 
 <Text style={styles.item}>{item.artist} {item.horaire} </Text>
 </TouchableOpacity>
 )}
 />
 </SafeAreaView>
 </View> 
 
 






const pressHandler = () =>{
    
  };



 




    return (
  
    
      <View style={styles.container}>
        <View >
            {/* function setToggle sera placé dans le bouton */}
            <Pressable onPress = {() => {setToggle(ConcertListfriday)}}
       
           
                style={({pressed}) => [
                    {
                      color:'#096662',
                      backgroundColor: pressed ? '#096662' : '#E5C8C8', 
                      padding:10,
                      margin:5,
                      borderRadius:5,
                    },
                    
                  ]}   >
                
                
                     
                <Text style={styles.buttonText}>Vendredi</Text>
            </Pressable>

            <Pressable onPress = {() => {setToggle(ConcertListSaturday)}}
       
           
                style={({pressed}) => [
                    {
                      color:'#096662',
                      backgroundColor: pressed ? '#096662' : '#E5C8C8', 
                      padding:10,
                      margin:5,
                      borderRadius:5,
                    },
                    
                  ]}   >
                
                
                     
                <Text style={styles.buttonText}>Samedi</Text>
            </Pressable>
        </View>

         <View>
          {toggle}
        </View>   
           
      
  
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
  
  item:{
    marginTop:24,
    padding:10,
    backgroundColor:'#E5C8C8',
    fontSize:24,
    borderRadius:20,
  },
  labelDay:{
    marginTop:24,
    padding:10,
    backgroundColor:'#096662',
    fontSize:24,
    borderRadius:20,
  },
  
   });
  