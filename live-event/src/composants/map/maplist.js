import React from 'react';
import {  GeoJSON,LayersControl} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import poi from '../../poi.json'

const MapList = ({features,feature, type,properties, image}) => {

    

    const iconMap = new L.icon({
        iconUrl:`./image/${feature.properties.image}.png`,
        iconSize:[38, 38]
    })

    return ( 

    

        <div className='mapWrap'>

   
      function LayersControlExample() {
   
       <LayersControl position="topright">
        <LayersControl.Overlay >               
            </LayersControl.Overlay>
        {features.slice(0,3).map(() => (
             <div className="map-preview" key = {feature.properties.id}>   
                <LayersControl.Overlay checked name={`${feature.properties.image}`}> 
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
          </LayersControl>
      
  
      
      }       
              </div>
     );
}
 
export default MapList;