import { useState } from "react";
import Flatlist from 'flatlist-react'
import { Button,Stack} from 'react-bootstrap';
const Timetable = ({concerts, artist,jour,date,horaire,scène}) => {
    

    return ( 


    <div className="concert">
    
    <div>eXageras</div>
         {concerts.map((concert) => (
          <table>
          
            <div key = {concert.id}>   
           <tr>
            <div>
              <div clasName="boxArtist">

                <td>{concert.artist}</td>
                <Stack  className="btnDays" direction="horizontal" gap={2}>
                <td>{concert.startTime.substring(10, 16)}</td>
                <td>&rarr;</td>
                <td>{concert.endTime.substring(10, 16)}</td>
                </Stack>
              </div>      
            </div>
            </tr>
   
                
                  
      </div>
      </table>))}

        </div>
     );
}
 
export default Timetable;