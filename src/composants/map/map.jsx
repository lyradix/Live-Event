import React from 'react';
import { useState, useEffect} from 'react';
import { MapContainer,TileLayer, GeoJSON, LayersControl} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import stageIcon from '../../image/star.png'
import toiletIcon from '../../image/toilet.png'
import exitIcon from '../../image/exit.png'
import medicalIcon from '../../image/hospital.png'
import snackIcon from '../../image/snack.png'
import startIcon from '../../image/start.png'
import entryIcon from '../../image/entry.png'
import campIcon from '../../image/camping.png'
import bigStarIcon from '../../image/bigstar.png'
import parkingIcon from '../../image/parking.png'



const MapWrap = ({features, image}) => {

    const [poi, setPoi] = useState(null); // State to store fetched data

    useEffect(() => {
        const fetchPoi = async () => {
          try {
            const response = await fetch('https://bisque-dotterel-606944.hostingersite.com/poi');
            const data = await response.json();
            setPoi(data); // Set the fetched data to state
          } catch (error) {
            console.error('Error fetching POI data:', error);
          }
        };
    
        fetchPoi();
      }, []);
           
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
    const customIconParking = new L.Icon ({
        iconUrl:parkingIcon,
        iconSize:[38,38]
    })

    if (!poi) {
      
        return <div>En chargement...</div>;
      }

    return (
      
  
  
       <div className='mapWrap'>

function Layers({}) {
<MapContainer center={[48.833565844027000, 2.1950340270996100]} zoom={13} 

style={{transform:"translate(0rem,0rem)", height:"80vh", width:"100%"}}>
    <TileLayer
        url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=0PDdyawvaHZFff4J0rGo"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />

 <LayersControl position="topright" >

      <LayersControl.Overlay checked name="Entrée Bienvenue" > 
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
      <LayersControl.Overlay checked name="Parkings"> 
            <GeoJSON data={poi}  
            onEachFeature={(feature, layer) => {
            if (feature.properties && feature.properties.popup) {
            layer.bindPopup(feature.properties.popup , feature.properties.name);
            }
            }} 
            pointToLayer={(feature, latlng) => {
            if ((feature.properties && feature.properties.type === 'parking' )) 
            return L.marker(latlng,{
            icon:customIconParking,
            });
            }}
            />
      </LayersControl.Overlay>     

    </LayersControl>
</MapContainer>

}       
        </div>
    );
};

export default MapWrap;