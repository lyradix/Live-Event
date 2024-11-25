import {Stack} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Timetable = ({concerts}) => {
const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]  

    return ( 


    <div className="concert">

<div>{concerts.slice(0,[1]).map((concert, scène) => (
       <div>
         <p className="textLargeTimetable">{concert.scène}</p> 
      </div>
       )) }
    </div>

    <div>{concerts.slice(0, 1).map((concert, artist,jour,date,horaire,scène) => (
       <div className="boxTitle">
         <p className="headTitle">{days[new Date(`${concert.startTime}`).getDay()]}</p> 
      </div>
       )) }
    </div>

         {concerts.map((concert) => (          
            <div key = {concert.id}>   
                    <Link className="nav-link" to={`/Artist/${concert.id}`}>
            <div>
              <div className='box'>
              <div className="imglist" direction="horizontal" gap={2}>
              <img src={`image-${concert.id}.jpg`} alt="artist" className='imgTimetable' height='36px' width='36px' />
              <p className='text'>{concert.artist}</p>
              </div>
                
                <div  className="btnDays" direction="horizontal" gap={2}>
                <p>{concert.startTime.substring(10, 16)}</p>
                <p>&rarr;</p>
                <p>{concert.endTime.substring(10, 16)}</p>
                </div>
              </div>      
            </div>
            </Link> 
      </div>
      ))}

        </div>
     );
}
 
export default Timetable;