import React from 'react';
import { MapContainer, Map, TileLayer, GeoJSON, Marker, Popup,LayersControl,LayerGroup,FeatureGroup, Circle, Rectangle, leafletElement} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { latLng } from 'leaflet';
import {divIcon, point} from 'leaflet';
import poi from './poi.json'
import stageIcon from './image/star.png'
import {useState, useCallback, useEffect, useRef} from "react";
import toiletIcon from './image/toilet.png'
import exitIcon from './image/exit.png'
import medicalIcon from './image/hospital.png'
import snackIcon from './image/snack.png'
import startIcon from './image/start.png'
import entryIcon from './image/entry.png'
import campIcon from './image/camping.png'
import bigStarIcon from './image/bigstar.png'
import MapList from './maplist';




const MapWrap = ({features, image}) => {

    // const mapRef = useRef();

    // useEffect(()=>{
    //     const {current = {}} = mapRef;
    //     const {leafletElement:map} = current;

    //     map.locate()
    // },[]);

    // const [userLocation, setUserLocation] = useState(null);
    
    // const setColor = ({ properties }) => {
    //     return { weight: 1 };
    //   };

    // const markers= [];

    // const popup = L.popup({
    //     closeButton: true,
    //     autoClose: true,
    //     className: "custom-popup" // classname for the popup acting like a splash screen
    // })
    //   .setLatLng(Map.getBounds().getCenter())
    // //   .setContent('<p>Some Disclaimer Text.</p>')
    //   .openOn(Map);
    
    
    //     delete L.Icon.Default.prototype._getIconUrl;
        
    //     L.Icon.Default.mergeOptions({
    //       iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    //       iconUrl: require('leaflet/dist/images/marker-icon.png'),
    //       shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    //     });

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
 
        // const {data:features} = FetchData('http://localhost:8001/features');   
        // const [map, setMap] = useState(null);
        // const [position, setPosition] = useState(null);

        // const iconMap = new L.icon({
        //     iconUrl:`./image/${features.properties.image}.png`,
        //     iconSize:[38, 38]
        // })
    
     console.log(features);
        
    const customIcon = new L.Icon ({
        iconUrl:stageIcon,
        iconSize:[38, 38],
   
    });
   
    const customIconToilet = new L.Icon ({
        iconUrl:toiletIcon,
        iconSize:[30,30],

    })

    const customIconExit = new L.Icon ({
        iconUrl:exitIcon,
        iconSize:[38,38],
 
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

    // const center = [51.505, -0.09]
    // const rectangle = [
    //   [51.49, -0.08],
    //   [51.5, -0.06],
    // ]
    

    return (
      
  
  
       <div className='mapWrap'>


  {/* <button onClick={()=>{setUserLocation(customIcon)}}>delete</button> */}
function LayersControlExample({}) {
<MapContainer center={[48.833565844027000, 2.1950340270996100]} zoom={15} 

style={{transform:"translate(0rem,5rem)", height: "70vh", width:"100%"}}>
    <TileLayer
        url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=0PDdyawvaHZFff4J0rGo"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />

 <LayersControl position="topright">

        <LayersControl.Overlay checked name="Tout afficher">

{/* <MapLOcation/> */}



      </LayersControl.Overlay>
{/* 
      <LayersControl position="topright">
        <LayersControl.Overlay >               
            </LayersControl.Overlay>
        {features.map(() => (
             <div className="map-preview" key = {features.properties.id}>   
                <LayersControl.Overlay checked name={`${features.properties.image}`}> 
                  <GeoJSON data={poi}  
                  onEachFeature={(feature, layer) => {
                  if (feature.properties && feature.properties.popup) {
                  layer.bindPopup(feature.properties.popup , feature.properties.name);
                  }
                  }} 
                  pointToLayer={(feature, latlng) => {
                  if ((feature.properties && feature.properties.type === `${feature.properties.type}` )) 
                  return L.marker(latlng,{
                  icon:iconMap,
                  });
                  }}
                  />
                </LayersControl.Overlay> 
                </div>
            ))}
          </LayersControl> */}


      <LayersControl.Overlay checked name="Entrée Bienvenue"> 
            <GeoJSON data={poi}  
            onEachFeature={(feature, layer) => {
            if (feature.properties && feature.properties.popup) {
            layer.bindPopup(feature.properties.popup , feature.properties.name);
            }
            }} 
            pointToLayer={(feature, latlng) => {
            if ((feature.properties && feature.properties.type === 'start' )) 
            return L.marker(latlng,{
            icon:customIconStart,
            });
            }}
            />
      </LayersControl.Overlay>
      <LayersControl.Overlay checked name="Entrée vers les scènes"> 
            <GeoJSON data={poi}  
            onEachFeature={(feature, layer) => {
            if (feature.properties && feature.properties.popup) {
            layer.bindPopup(feature.properties.popup , feature.properties.name);
            }
            }} 
            pointToLayer={(feature, latlng) => {
            if ((feature.properties && feature.properties.type === 'entry' )) 
            return L.marker(latlng,{
            icon:customIconEntry,
            });
            }}
            />
      </LayersControl.Overlay>
      <LayersControl.Overlay checked name="Scène Principale" className="text"> 
            <GeoJSON data={poi}  
            onEachFeature={(feature, layer) => {
            if (feature.properties && feature.properties.popup) {
            layer.bindPopup(feature.properties.popup , feature.properties.name);
            }
            }} 
            pointToLayer={(feature, latlng) => {
            if ((feature.properties && feature.properties.type === 'bigstar' )) 
            return L.marker(latlng,{
            icon:customIconBigStar,
            });
            }}
            />
      </LayersControl.Overlay>
      <LayersControl.Overlay checked name="Scènes"> 
            <GeoJSON data={poi}  
            onEachFeature={(feature, layer) => {
            if (feature.properties && feature.properties.popup) {
            layer.bindPopup(feature.properties.popup , feature.properties.name);
            }
            }} 
            pointToLayer={(feature, latlng) => {
            if ((feature.properties && feature.properties.type === 'scène' )) 
            return L.marker(latlng,{
            icon:customIcon,
            });
            }}
            />
      </LayersControl.Overlay> 
      <LayersControl.Overlay checked name="Coin camping"> 
            <GeoJSON data={poi}  
            onEachFeature={(feature, layer) => {
            if (feature.properties && feature.properties.popup) {
            layer.bindPopup(feature.properties.popup , feature.properties.name);
            }
            }} 
            pointToLayer={(feature, latlng) => {
            if ((feature.properties && feature.properties.type === 'camping' )) 
            return L.marker(latlng,{
            icon:customIconCamp,
            });
            }}
            />
      </LayersControl.Overlay> 
      <LayersControl.Overlay checked name="Restauration"> 
            <GeoJSON data={poi}  
            onEachFeature={(feature, layer) => {
            if (feature.properties && feature.properties.popup) {
            layer.bindPopup(feature.properties.popup , feature.properties.name);
            }
            }} 
            pointToLayer={(feature, latlng) => {
            if ((feature.properties && feature.properties.type === 'snack' )) 
            return L.marker(latlng,{
            icon:customIconSnack,
            });
            }}
            />
      </LayersControl.Overlay>
      <LayersControl.Overlay checked name="Assistance médicale"> 
            <GeoJSON data={poi}  
            onEachFeature={(feature, layer) => {
            if (feature.properties && feature.properties.popup) {
            layer.bindPopup(feature.properties.popup , feature.properties.name);
            }
            }} 
            pointToLayer={(feature, latlng) => {
            if ((feature.properties && feature.properties.type === 'medical' )) 
            return L.marker(latlng,{
            icon:customIconMedical,
            });
            }}
            />
      </LayersControl.Overlay>
      <LayersControl.Overlay checked name="Sortie de secour"> 
            <GeoJSON data={poi}  
            onEachFeature={(feature, layer) => {
            if (feature.properties && feature.properties.popup) {
            layer.bindPopup(feature.properties.popup , feature.properties.name);
            }
            }} 
            pointToLayer={(feature, latlng) => {
            if ((feature.properties && feature.properties.type === 'exit' )) 
            return L.marker(latlng,{
            icon:customIconExit,
            });
            }}
            />
      </LayersControl.Overlay>
      <LayersControl.Overlay checked name="Toilettes"> 
            <GeoJSON data={poi}  
            onEachFeature={(feature, layer) => {
            if (feature.properties && feature.properties.popup) {
            layer.bindPopup(feature.properties.popup , feature.properties.name);
            }
            }} 
            pointToLayer={(feature, latlng) => {
            if ((feature.properties && feature.properties.type === 'wc' )) 
            return L.marker(latlng,{
            icon:customIconToilet,
            });
            }}
            />
      </LayersControl.Overlay>   

      {/* <MapList features={features} /> */}
    </LayersControl>
</MapContainer>

}       
        </div>
    );
};

export default MapWrap;