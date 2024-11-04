import { useState, useEffect, useRef } from "react";
import { Button,Stack} from 'react-bootstrap';
import ConcertList from "./ConcertList";
import Timetable from "./timetable";



const FetchData = () => {

    
 
    const[toggle, setToggle] = useState (null);
    const[button, setButton] = useState (null);

    const [pending, setpending] = useState(true);
    const[concerts, setConcerts] = useState (null);


    
     useEffect(() => {
        setTimeout(() => {
            // go and fetch the json data in the localhost
        fetch('http://localhost:8000/concerts').then(res => {
            return res.json();
        }).then((data) => {
            setConcerts(data);
            setpending(false)
        })
        })
        
    },[])

  
    // return ( 
   
    //     <div></div>
    // );
}
 
export default FetchData;