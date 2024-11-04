import {Stack} from 'react-bootstrap';
const Timetable = ({concerts}) => {
const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]  

    return ( 


    <div className="concert">
  
    <div>{concerts.slice(0, 1).map((concert, artist,jour,date,horaire,scène) => (
       <div className="boxTitle">
         <p className="headTitle">{days[new Date(`${concert.startTime}`).getDay()]}</p>
   
        
      </div>
       )) }
    </div>
       
         {concerts.map((concert) => (          
            <div key = {concert.id}>   
         
            <div>
              <div className='box'>
              <Stack className="imglist" direction="horizontal" gap={2}>
              <img src={`image-${concert.id}.jpg`} alt="artist" className='imgTimetable' height='36px' width='36px' />
              <p className='text'>{concert.artist}</p>
              </Stack>
                
                <Stack  className="btnDays" direction="horizontal" gap={2}>
                <p>{concert.startTime.substring(10, 16)}</p>
                <p>&rarr;</p>
                <p>{concert.endTime.substring(10, 16)}</p>
                </Stack>
              </div>      
            </div>
           
      </div>
      ))}

        </div>
     );
}
 
export default Timetable;