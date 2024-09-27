import React, { useRef, useEffect } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import './map.css';

const Map = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const paris = { lng: 2.19919, lat: 48.83444 };
    const zoom = 14;
    maptilersdk.config.apiKey = '0PDdyawvaHZFff4J0rGo';

    useEffect(() => {
        if (map.current) return; // stops map from intializing more than once
      
        map.current = new maptilersdk.Map({
          container: mapContainer.current,
          style: maptilersdk.MapStyle.STREETS,
          center: [paris.lng, paris.lat],
          zoom: zoom
        });
        }, [paris.lng, paris.lat, zoom]);

    return ( 
        <div className="map-wrap">
        <div ref={mapContainer} className="map" />
    </div>
     
     );
}
 
export default Map;