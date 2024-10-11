import { useState } from "react";

const ConcertList = ({concerts, artist,jour,date,horaire,scène}) => {
    

    return ( 


    <div className="concert">
        <h2>{artist}</h2>
         {concerts.map((concert) => (
            <div className="concert-preview" key = {concert.id}>                
            <h2 className="artistName">{concert.artist}</h2>
            {/* pour récuperer la date seulement */}
            <p className="detailsPicture">{concert.startTime.substring(0, 10)}</p>
            <h3 className="scenePicture">{concert.scène}</h3>
            <img className="imgConcert" src={`image-${concert.id}.jpg`} alt="artist" height='600px' width='380px'/> 
              {/*template string pour extraire l'image correspondante  */}
           
            {/* <button onClick={() => handleDelete (concert.id)}>Plus d'infos</button>       */}
                
                  
            </div>
        ))}

        </div>
     );
}
 
export default ConcertList;