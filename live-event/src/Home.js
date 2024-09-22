import { useState, useEffect} from "react";

import ConcertList from "./ConcertList";

const Home = () => {

    const[concerts, setConcerts] = useState (null);

    useEffect(() => {

        // go and fetch the json data in the localhost
        fetch('http://localhost:8001/concerts').then(res => {
            return res.json();
        }).then((data) => {
            setConcerts(data);
        })
    })

    // const handleDelete = (id) => {
    //     const newConcerts = concerts.filter(concert => concert.id === id);
    //     setConcerts(newConcerts);
    // }
    return ( 
      <div className="home">
        

       { concerts && <ConcertList concerts={concerts.filter((concert)=> concert.jour === 'Samedi')} jour = "filtre pour jour"/>}       
        
        
      </div>  
    );
}
 
export default Home;