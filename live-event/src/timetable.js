import { useState } from "react";
import Flatlist from 'flatlist-react'
import { Button,Stack} from 'react-bootstrap';
const Timetable = ({concerts, artist,jour,date,horaire,scène}) => {
    

    return ( 


    <div className="concert">

    
    <div>{concerts.slice(0, 1).map((concert) => (
       <div clasName="boxArtist">
         <h1>{concert.scène}</h1>
      </div>
       )) }
    </div>

    <div>{concerts.slice(0, 1).map((concert) => (
       <div clasName="boxArtist">
         <p>{concert.startTime.substring(0, 10)}</p>
      </div>
       )) }
    </div>
       
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