import React from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup,} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {divIcon, point} from 'leaflet';
import poi from './poi.json'
import stageIcon from './image/mardi-gras.png'
import doorIcon from './image/gate.png'




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

    const customIconDoor = new L.Icon ({
        iconUrl:doorIcon,
        iconSize:[38,38]
    })

    return (
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
                if (feature.properties && feature.properties.type == 'scène') 
                return L.marker(latlng,{
                    icon:customIcon
                });
                else if
                (feature.properties && feature.properties.type == 'door')
                return L.marker(latlng,{
                    icon:customIconDoor 
                })
            }}
            

          />
        
        </MapContainer>
    );
};

export default Map;