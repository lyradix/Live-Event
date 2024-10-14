import { useState } from "react";

const Timetable = ({concerts, artist,jour,date,horaire,scène}) => {
    

    return ( 


    <div className="concert">
        <h2>{artist}</h2>
         {concerts.map((concert) => (
            <div className="timetable-preview" key = {concert.id}>                
            <header className="scenetable">{concert.scène}</header>
     
            <div className="jeudi">
              <div clasName="boxArtist"> 
                <h2 className="artistName">{concert.artist}</h2>
                <p className="detailsPicture">{concert.startTime.substring(0, 10)}</p>
                <p>arrow symbol</p>
                <p className="detailsPicture">{concert.endTime.substring(0, 10)}</p>
              </div>      
   
            </div>
   
                
                  
      </div>
        ))}

        </div>
     );
}
 
export default Timetable;