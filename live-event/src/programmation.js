import { useState, useEffect} from "react";
import { Button,Stack} from 'react-bootstrap';
import ConcertList from "./ConcertList";
import Timetable from "./timetable";



const Programmation = () => {

    

    const[concerts, setConcerts] = useState (null);
    const[toggle, setToggle] = useState (null);

    const[exagerasFriday, setexagerasFriday] = useState (null);
    const[exagerasSaturday, setexagerasSaturday] = useState (null);
    const[exagerasSunday, setexagerasSunday] = useState (null);

    const[exodiusFriday, setexodiusFriday] = useState (null);
    const[exodiusSaturday, setexodiusSaturday] = useState (null);
    const[exodiusSunday, setexodiusSunday] = useState (null);

    const[experienzaFriday, setexperienzaFriday] = useState (null);
    const[experienzaSaturday, setexperienzaSaturday] = useState (null);
    const[experienzaSunday, setexperienzaSunday] = useState (null);

    const[eXclammationFriday, setexclammationFriday] = useState (null);
    const[eXclammationSaturday, setexclammationSaturday] = useState (null);
    const[eXclammationSunday, setexclammationSunday] = useState (null);

    const[eXpassaFriday, seteXpassaFriday] = useState (null);
    const[eXpassaSaturday, seteXpassaSaturday] = useState (null);
    const[eXpassaSunday, seteXpassaSunday] = useState (null);


    

    


     useEffect(() => {

        // go and fetch the json data in the localhost
        fetch('http://localhost:8001/concerts').then(res => {
            return res.json();
        }).then((data) => {
            setConcerts(data);
        })
    })

   


    const filterExagerasFriday = concerts && <Timetable concerts={concerts.filter((concert)=> concert.scène === 'Scène eXageras' &&  concert.startTime.startsWith('2024-09-13'))} scène et jour = "exageras et vendredi"/>
    const filterExagerasSaturday = concerts && <Timetable concerts={concerts.filter((concert)=> concert.scène === 'Scène eXageras' &&  concert.startTime.startsWith('2024-09-14'))} scène et jour = "exageras et samedi"/>
    const filterExagerasSunday = concerts && <Timetable concerts={concerts.filter((concert)=> concert.scène === 'Scène eXageras' &&  concert.startTime.startsWith('2024-09-15'))} scène et jour = "exageras et dimanche"/>

    const filterExodiusFriday = concerts && <Timetable concerts={concerts.filter((concert)=> concert.scène === 'Scéne eXodius'&&  concert.startTime.startsWith('2024-09-13'))} scène et jour = "exageras et vendredi"/>
    const filterExodiusSaturday = concerts && <Timetable concerts={concerts.filter((concert)=> concert.scène === 'Scéne eXodius'&&  concert.startTime.startsWith('2024-09-14'))} scène et jour = "exageras et samedi"/>
    const filterExodiusSunday = concerts && <Timetable concerts={concerts.filter((concert)=> concert.scène === 'Scéne eXodius'&&  concert.startTime.startsWith('2024-09-15'))} scène et jour = "exageras et dimanche"/>


    const filterExperienzaFriday = concerts && <Timetable concerts={concerts.filter((concert)=> concert.scène === 'Scène eXperienza'&&  concert.startTime.startsWith('2024-09-13'))} scène et jour = "eXperienza et vendredi"/>
    const filterExperienzaSaturday = concerts && <Timetable concerts={concerts.filter((concert)=> concert.scène === 'Scène eXperienza'&&  concert.startTime.startsWith('2024-09-14'))} scène et jour = "eXperienza et samedi"/>
    const filterExperienzaSunday = concerts && <Timetable concerts={concerts.filter((concert)=> concert.scène === 'Scène eXperienza'&&  concert.startTime.startsWith('2024-09-15'))} scène et jour = "eXperienza et dimanche"/>

    const filterExclammationFriday = concerts && <Timetable concerts={concerts.filter((concert)=> concert.scène === 'Scéne eXclammation !'&&  concert.startTime.startsWith('2024-09-13'))} scène et jour = "eXclammation et vendredi"/>
    const filterExclammationSaturday = concerts && <Timetable concerts={concerts.filter((concert)=> concert.scène === 'Scéne eXclammation !'&&  concert.startTime.startsWith('2024-09-14'))} scène et jour = "eXclammation et samedi"/>
    const filterExclammationSunday = concerts && <Timetable concerts={concerts.filter((concert)=> concert.scène === 'Scéne eXclammation !'&&  concert.startTime.startsWith('2024-09-15'))} scène et jour = "eXclammation et dimanche"/>

    const filterExpassaFriday = concerts && <Timetable concerts={concerts.filter((concert)=> concert.scène === 'Scène eXpassa'&&  concert.startTime.startsWith('2024-09-13'))} scène et jour = "eXpassa et vendredi"/>
    const filterExpassaSaturday = concerts && <Timetable concerts={concerts.filter((concert)=> concert.scène === 'Scène eXpassa'&&  concert.startTime.startsWith('2024-09-14'))} scène et jour = "eXpassa et samedi"/>
    const filterExpassaSunday = concerts && <Timetable concerts={concerts.filter((concert)=> concert.scène === 'Scène eXpassa'&&  concert.startTime.startsWith('2024-09-15'))} scène et jour = "eXpassa et dimanche"/>


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
            <Button  className="btnArtist">Artistes</Button>
            <Button className="btnHoraires" onClick={() => {
                setexagerasFriday(filterExagerasFriday);
                setexagerasSaturday(filterExagerasSaturday);
                setexagerasSunday(filterExagerasSunday);

                setexodiusFriday(filterExodiusFriday);
                setexodiusSaturday(filterExodiusSaturday);
                setexodiusSunday(filterExodiusSunday);

                setexperienzaFriday(filterExperienzaFriday);
                setexperienzaSaturday(filterExperienzaSaturday);
                setexperienzaSunday(filterExperienzaSunday);

                setexclammationFriday(filterExclammationFriday);
                setexclammationSaturday(filterExclammationSaturday);
                setexclammationSunday(filterExclammationSunday);

                seteXpassaFriday(filterExpassaFriday);
                seteXpassaSaturday(filterExpassaSaturday);
                seteXpassaSunday(filterExpassaSunday);
                }}>Horaires</Button>
        </Stack>

        <Stack  className="btnDays" direction="horizontal" gap={2}>
    <Button className="btnLineUp" onClick={() => {setToggle(filterLineUp)}}>Line-Up</Button>
    <Button className="btnFriday" onClick={() => setToggle(filterFriday)}>Vendredi</Button>
    <Button className="btnSaturday" onClick={() => setToggle(filterSaturday)}>Samedi</Button>
    <Button className="btnSunday" onClick={() => setToggle(filterSunday)}>Dimanche</Button>

    </Stack>
    <h1 className="text">{toggle}</h1> 

    <h1 className="text">eXageras</h1>
    <p>{exagerasFriday}</p> 
    <p>{exagerasSaturday}</p> 
    <p>{exagerasSunday}</p>

    <h1 className="text">eXodius</h1>
    <p>{exodiusFriday}</p>        
    <p>{exodiusSaturday}</p>        
    <p>{exodiusSunday}</p>
    
    <h1 className="text">eXperienza</h1>
    <p>{experienzaFriday}</p>        
    <p>{experienzaSaturday}</p>        
    <p>{experienzaSunday}</p>

    <h1 className="text">eXclammation !</h1>
    <p>{eXclammationFriday}</p>        
    <p>{eXclammationSaturday}</p>        
    <p>{eXclammationSunday}</p>

    <h1 className="text">eXpassa</h1>
    <p>{eXpassaFriday}</p>        
    <p>{eXpassaSaturday}</p>
    <p>{eXpassaSunday}</p>        
    </div>  
    );
}
 
export default Programmation;