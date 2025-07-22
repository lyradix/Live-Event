import { Link } from 'react-router-dom';
const Timetable = ({concerts}) => {
const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]  

    return ( 


    <div className="concertTimetable">

<div>{concerts.slice(0,[1]).map((concert, scene) => (
       <div>
         <p className="textLargeTimetable">{concert.sceneFK.nom}</p> 
      </div>
       )) }
    </div>

    <div>{concerts.slice(0, 1).map((concert, nom,jour,date,horaire,scene) => (
       <div className="boxTitle">
         <p className="headTitle">{days[new Date(`${concert.startTime}`).getDay()]}</p> 
      </div>
       )) }
    </div>

         {concerts.map((concert) => (          
            <div key = {concert.id}>   
                    <Link className="nav-link" to={`/Artist/${concert.id}`}>
            <div>
              <div className='timetablebox'>
              <div className="imglist" direction="horizontal" gap={2}>
              <img src={`http://localhost:8000/images/${concert.image}`} alt="artist" className='imgTimetable' height='36px' width='36px' />
              <p className='text'>{concert.nom}</p>
              </div>
                
              <div className="hours">
                <p>{concert.startTime.substring(11, 16)}</p>
                <p>&rarr;</p>
                <p>{concert.endTime.substring(11, 16)}</p>
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