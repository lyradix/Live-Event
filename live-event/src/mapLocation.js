import { useState, useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup,LayersControl,LayerGroup,FeatureGroup, Circle, Rectangle} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { latLng } from 'leaflet';
import {divIcon, point} from 'leaflet';
import iconPerson from './image/entry.png'
import FetchData from "./fetchData";
import { useMapEvents } from 'https://cdn.esm.sh/react-leaflet/hooks'

const MapLOcation = () => {

        const [position, setPosition] = useState(null)
        const map = useMapEvents({
          click() {
            map.locate()
          },
          locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
          },
        })
    
        return position === null ? null : (
            <Marker position={position}>
              <Popup>You are here</Popup>
            </Marker>
          )
    

}
 
export default MapLOcation;