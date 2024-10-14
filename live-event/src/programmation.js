import { useState, useEffect} from "react";
import { Button,Stack} from 'react-bootstrap';
import ConcertList from "./ConcertList";
import Timetable from "./timetable";



const Programmation = () => {

    

    const[concerts, setConcerts] = useState (null);
    const[toggle, setToggle] = useState (null);

    


     useEffect(() => {

        // go and fetch the json data in the localhost
        fetch('http://localhost:8001/concerts').then(res => {
            return res.json();
        }).then((data) => {
            setConcerts(data);
        })
    })

   


    const filterHoraire = concerts && <Timetable concerts={concerts.filter((concert)=> concert.scène === 'Scène eXageras')} all = "all data"/>
    const filterLineUp = concerts && <ConcertList concerts={concerts.filter((concert)=> concert.scène === 'Scéne eXclammation !')} scene = "filtre pour jour"/>
    const filterFriday = concerts && <ConcertList concerts={concerts.filter(concert=> concert.startTime.startsWith('2024-09-13'))} jour = "filtre pour jour"/>
    const filterSaturday = concerts && <ConcertList concerts={concerts.filter((concert)=> concert.startTime.startsWith('2024-09-14'))} jour = "filtre pour jour"/>
    const filterSunday = concerts && <ConcertList concerts={concerts.filter((concert)=> concert.startTime.startsWith('2024-09-15'))} jour = "filtre pour jour"/>

    // const filterSunday = concerts && <ConcertList concerts={concerts.filter((concert)=> concert.jour === 'Dimanche')} jour = "filtre pour jour"/>

  


    // const toggleElements = () => {
    //     setToggle(filterFriday)   
    // };

   
// creer boutton filtre par jour
    return ( 
    <div className="programmation">

      <Stack className="btnFilters"direction="horizontal" gap={2}>
            <Button >Artistes</Button>
            <Button  onClick={() => setToggle(filterHoraire)} >Horaires</Button>
        </Stack>

        <Stack  className="btnDays" direction="horizontal" gap={2}>
    <Button onClick={() => setToggle(filterLineUp)}>Line-Up</Button>
    <Button onClick={() => setToggle(filterFriday)}>Vendredi</Button>
    <Button onClick={() => setToggle(filterSaturday)}>Samedi</Button>
    <Button onClick={() => setToggle(filterSunday)}>Dimanche</Button>

    </Stack>
    <h1 className="text">{toggle}</h1>      
    </div>  
    );
}
 
export default Programmation;