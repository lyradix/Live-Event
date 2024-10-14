import { useState } from "react";

const Timetable = ({concerts, artist,jour,date,horaire,scène}) => {
    

    return ( 


    <div className="concert">
        <h2>{artist}</h2>
         {concerts.map((concert) => (
            <div className="timetable-preview" key = {concert.id}>                
            <h2 className="scenetable">{concert.scène}</h2>
            {/* pour récuperer la date seulement */}
            <div className="jeudi">
              <div clasName="boxArtist"> 
                <h2 className="artistName">{concert.artist}</h2>
                <p className="detailsPicture">{concert.startTime.substring(0, 10)}</p>
                <p>arrow symbol</p>
                <p className="detailsPicture">{concert.endTime.substring(0, 10)}</p>
              </div>      
              {/*template string pour extraire l'image correspondante  */}
            </div>
            {/* <button onClick={() => handleDelete (concert.id)}>Plus d'infos</button>       */}
                
                  
            </div>
        ))}

        </div>
     );
}
 
export default Timetable;