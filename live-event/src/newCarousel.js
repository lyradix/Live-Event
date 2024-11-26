import { useRef, useEffect, useState } from "react";
import FetchData from "./fetchData";
import NewCarouselList from "./newCarouselList";

const NewCarousel = ({innerContainer, containerWrap}) => {
    const myRef = useRef()
    const[pressed, setPressed] = useState(false);



    const {data:concerts} = FetchData('http://localhost:8000/concerts'); 

    const newCarouselList = concerts && <NewCarouselList concerts={concerts.filter((concert)=> concert.scène === 'eXtravaganza !')} scene = "filtre pour jour"/>

    return ( 
        <div className="containerWrap" ref={myRef}>
            {newCarouselList}
        </div>
     );
}
 
export default NewCarousel;