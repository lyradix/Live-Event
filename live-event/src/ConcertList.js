import { useState } from "react";

const ConcertList = ({concerts, artist,jour,date,horaire,scène}) => {
    

    return ( 


    <div className="concert">
        <h2>{artist}</h2>
         {concerts.map((concert) => (
            <div className="concert-preview" key = {concert.id}>                
            <h2>{concert.artist}</h2>
            <p>{concert.horaire}</p>
            <p>{concert.date}</p>
            <p>{concert.scène}</p>
            
            {/* <button onClick={() => handleDelete (concert.id)}>Plus d'infos</button>       */}
                  
            </div>
        ))}

        </div>
     );
}
 
export default ConcertList;