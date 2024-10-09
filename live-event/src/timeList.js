import { useState } from "react";

const TimeList = ({concerts, artist,startTime}) => {
    
  



    return ( 


    <div className="concert">
        <h2>{artist}</h2>
         {concerts.map((concert) => (
            <div className="concert-preview" key = {concert.id}>                
            <h2 className="artistName">{concert.artist}</h2>
            {/* pour récuperer la date seulement */}
            <p>{concert.startTime.substring(0, 10)}</p>
            <img src={`image-${concert.id}.jpg`} width='100%'/> 
              {/*template string pour extraire l'image correspondante  */}
            <p>`image-${concerts.id}.jpg`</p>
            {/* <button onClick={() => handleDelete (concert.id)}>Plus d'infos</button>       */}
                  
            </div>
        ))}

        </div>
     );
}
 
export default TimeList;