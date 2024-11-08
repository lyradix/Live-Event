import { useState, useEffect, useRef } from "react";
import ConcertList from "./ConcertList";

const ArtistDetails = ({concert,artist}) => {
    
    const[concerts, setConcerts] = useState ([]);
    
   useEffect(() => {
    
    // go and fetch the json data in the localhost
fetch('http://localhost:8000/concerts').then(res => {
    return res.json();
}).then((ConcertList) => {
 setConcerts(ConcertList);

})
},[])


    return ( 
        <div className="artistDetails">
               
         {concerts.map((concert) => (
            <div className="concert-preview" key = {concert.id}>                
            <h2 className="artistName">{concert.artist}</h2>
            {/* pour récuperer la date seulement */}
            <p className="detailsPicture">{concert.startTime.substring(0, 10)}</p>
            <p className="scenePicture">{concert.scène}</p>
            <p className="text">{concert.Description}</p>
            <p className="text">{concert.Source}</p>
            <p className="text">{concert.Lien}</p>
            <img className="imgConcert" src={`image-${concert.id}.jpg`} alt="artist" height='600px' width='380px'/> 
              {/*template string pour extraire l'image correspondante  */}
           
            {/* <button onClick={() => handleDelete (concert.id)}>Plus d'infos</button>       */}
                
        
                    <h2><a className="nav-link" href="/Programmation">retour</a></h2> 
                    
           
            </div>
        ))}
        </div>
     );
}
 
export default ArtistDetails;