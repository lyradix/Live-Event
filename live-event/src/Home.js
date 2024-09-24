import { useState, useEffect} from "react";

import ConcertList from "./ConcertList";



const Home = () => {

    

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

    const filterFriday = concerts && <ConcertList concerts={concerts.filter((concert)=> concert.jour === 'Vendredi')} jour = "filtre pour jour"/>
    const filterSaturday = concerts && <ConcertList concerts={concerts.filter((concert)=> concert.jour === 'Samedi')} jour = "filtre pour jour"/>
    const filterSunday = concerts && <ConcertList concerts={concerts.filter((concert)=> concert.jour === 'Dimanche')} jour = "filtre pour jour"/>

    // const filterSunday = concerts && <ConcertList concerts={concerts.filter((concert)=> concert.jour === 'Dimanche')} jour = "filtre pour jour"/>

  


    // const toggleElements = () => {
    //     setToggle(filterFriday)   
    // };

   
// creer boutton filtre par jour
    return ( 
    <div className="home">
    <button onClick={() => setToggle(filterFriday)}>Vendredi</button>
    <button onClick={() => setToggle(filterSaturday)}>Samedi</button>
    <button onClick={() => setToggle(filterSunday)}>Dimanche</button>
    <h1>{toggle}</h1>      
    </div>  
    );
}
 
export default Home;