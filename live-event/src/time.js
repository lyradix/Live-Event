import { useState, useEffect} from "react";
import TimeList from "./timeList";








const Time = () => {
    const[toggle, setToggle] = useState (null);
    const[concerts, setConcerts] = useState (null);

    useEffect(() => {

        // go and fetch thes json data in the localhost
        fetch('http://localhost:8002/concerts').then(res => {
            return res.json();
        }).then((data) => {
            setConcerts(data);
        })
    })



    
   

    

    // const strDate = JSON.parse(useEffect);
    // const justDate = strDate.substring(0, 10);

    // concerts.forEach (o => {
    //     if (o.startTime === null) {
    //         o.startTime = strDate
    //     }
    // })




    const Time = concerts && <TimeList concerts={concerts.filter(concert=> concert.startTime.startsWith('2024-09-13'))} jour = "filtre pour horaire"/>
    


    // console.log(concerts={concert.id})
    // const image = `${concerts.id}-1`;

    // console.log(concerts.id)


    // const filterSunday = concerts && <ConcertList concerts={concerts.filter((concert)=> concert.jour === 'Dimanche')} jour = "filtre pour jour"/>

  
    // const startsWith = concerts.filter((artist) => artist.startsWith("C"));
    
    
    // console.log(startsWith);

    // const toggleElements = () => {
    //     setToggle(filterFriday)   
    // };


// creer boutton filtre par jour
    return ( 
    <div className="Time">
 
    <button onClick={() => setToggle(Time)}>Time</button>
  
    <h1>{toggle}</h1>   

  
    </div>  
    );
}
 
export default Time;