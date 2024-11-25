import React from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup,LayersControl,LayerGroup,FeatureGroup, Circle, Rectangle} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { latLng } from 'leaflet';
import poi from './poi.json'

const MapList = ({features, type}) => {

    

    const iconMap = new L.icon({
        iconUrl:`./image/${type}.png`,
        iconSize:[38, 38]
    })

    return ( 

    

        <div className='mapWrap'>

   
      function LayersControlExample() {
   
       <LayersControl position="topright">
        <LayersControl.Overlay >               
            </LayersControl.Overlay>
        {features.slice(0,3).map(() => (
             <div className="map-preview" key = {features.id}>   
                <LayersControl.Overlay checked name="Toutes les"> 
                  <GeoJSON data={poi}  
                  onEachFeature={(feature, layer) => {
                  if (feature.properties && feature.properties.popup) {
                  layer.bindPopup(feature.properties.popup , feature.properties.name);
                  }
                  }} 
                  pointToLayer={(feature, latlng) => {
                  if ((feature.properties && feature.properties.type == `${type}` )) 
                  return L.marker(latlng,{
                  icon:iconMap,
                  });
                  }}
                  />
                </LayersControl.Overlay> 
                </div>
            ))}
          </LayersControl>
      
  
      
      }       
              </div>
     );
}
 
export default MapList;