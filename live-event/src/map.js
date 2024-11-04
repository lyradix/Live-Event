import React from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup,} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {divIcon, point} from 'leaflet';
import poi from './poi.json'
import stageIcon from './image/star.png'
import {useState} from "react";
import toiletIcon from './image/toilet.png'
import exitIcon from './image/exit.png'
import medicalIcon from './image/hospital.png'
import snackIcon from './image/snack.png'
import startIcon from './image/start.png'
import entryIcon from './image/entry.png'
import campIcon from './image/camping.png'
import bigStarIcon from './image/bigstar.png'











const Map = () => {



    // const setColor = ({ properties }) => {
    //     return { weight: 1 };
    //   };

    // const markers= [];

 
    
    
        delete L.Icon.Default.prototype._getIconUrl;
        
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
          iconUrl: require('leaflet/dist/images/marker-icon.png'),
          shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
        });

        // const iconDoor = new L.Icon({
        //     iconUrl: require('../public/mardi-gras.png'),
        //     iconRetinaUrl: require('../public/mardi-gras.png'),
        //     iconAnchor: null,
        //     popupAnchor: null,
        //     shadowUrl: null,
        //     shadowSize: null,
        //     shadowAnchor: null,
        //     iconSize: new L.Point(60, 75),
        //     className: 'leaflet-div-icon'
        // });
        
        // const customMarkerIcon = (name) =>
        //     divIcon({
        //       html: name,
        //       className: "icon",
        //        iconUrl:"https://www.flaticon.com/fr/icones-gratuites/discotheque",
        //       iconSize:[38, 38]
        //     });
        
        //   const setIcon = ({ properties }, latlng) => {
        //     return L.marker(latlng, { icon: customMarkerIcon(properties.Name) });
        //   };
        
    const customIcon = new L.Icon ({
        iconUrl:stageIcon,
        iconSize:[38, 38]

    });

   

    const customIconToilet = new L.Icon ({
        iconUrl:toiletIcon,
        iconSize:[30,30]
    })

    const customIconExit = new L.Icon ({
        iconUrl:exitIcon,
        iconSize:[38,38]
    })

    const customIconMedical = new L.Icon ({
        iconUrl:medicalIcon,
        iconSize:[25,25]
    })

    const customIconSnack = new L.Icon ({
        iconUrl:snackIcon,
        iconSize:[28,28]
    })

    const customIconStart = new L.Icon ({
        iconUrl:startIcon,
        iconSize:[40,40]
    })
    const customIconEntry = new L.Icon ({
        iconUrl:entryIcon,
        iconSize:[40,40]
    })
    const customIconCamp = new L.Icon ({
        iconUrl:campIcon,
        iconSize:[35,35]
    })
    const customIconBigStar = new L.Icon ({
        iconUrl:bigStarIcon,
        iconSize:[50,50]
    })




      
           

let starBtn = 'isActive' 



    return (
        
  

       <div>


         
        <MapContainer center={[48.833565844027000, 2.1950340270996100]} zoom={15} 

        style={{transform:"translate(0rem,5rem)", height: "70vh", width:"45vh"}}>
            <TileLayer
                url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=0PDdyawvaHZFff4J0rGo"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            
 
        <GeoJSON data={poi}  
    onEachFeature={(feature, layer) => {
if (feature.properties && feature.properties.popup) {
   layer.bindPopup(feature.properties.popup , feature.properties.name);
   
}

}} 

    pointToLayer={(feature, latlng) => {


       if ((feature.properties && feature.properties.type === 'scène' ) && (starBtn === 'isActive')) 
       return L.marker(latlng,{
           icon:customIcon
       });
      
       else if
       (feature.properties && feature.properties.type === 'wc')
       return L.marker(latlng,{
           icon:customIconToilet 
       })
       else if
       (feature.properties && feature.properties.type === 'exit')
       return L.marker(latlng,{
           icon:customIconExit 
       })
       else if
       (feature.properties && feature.properties.type === 'medical')
       return L.marker(latlng,{
           icon:customIconMedical 
       })
       else if
       (feature.properties && feature.properties.type === 'snack')
       return L.marker(latlng,{
           icon:customIconSnack 
       })
       else if
       (feature.properties && feature.properties.type === 'start')
       return L.marker(latlng,{
           icon:customIconStart 
       })
       else if
       (feature.properties && feature.properties.type === 'entry')
       return L.marker(latlng,{
           icon:customIconEntry
       })
       else if
       (feature.properties && feature.properties.type === 'camping')
       return L.marker(latlng,{
           icon:customIconCamp
       })
       else if
       (feature.properties && feature.properties.type === 'bigstar')
       return L.marker(latlng,{
           icon:customIconBigStar
       })
   }}
   

 />
        </MapContainer>

        </div>
    );
};

export default Map;