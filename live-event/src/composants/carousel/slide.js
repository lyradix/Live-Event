import { useState, useEffect } from "react"
import Poster from './carousel'

const  Slide = (index) => {
     

    const[data, setData] = useState ([]);
 




    const filterLineUp = data && <Poster concerts={data.filter((concert)=> concert.scène === 'Scéne eXclammation !')} scene = "filtre pour jour"/>

    return ( 
        <div>{filterLineUp}</div>
     );
}
 
export default Slide;