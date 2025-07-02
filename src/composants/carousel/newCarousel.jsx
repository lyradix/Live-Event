import { useRef} from "react";
import FetchData from "../fetchData";
import NewCarouselList from "./newCarouselList";

const NewCarousel = () => {
    const myRef = useRef()




    const {data:concerts, pending, error} = FetchData('http://localhost:8000/concert'); 

    const newCarouselList = concerts && <NewCarouselList concerts={concerts.filter((concert)=> concert.sceneFK.nom === 'eXtravaganza !')} scene = "filtre pour jour"/>

    return ( 
        <div className="containerWrap" ref={myRef}>
             { error && <div className="text">{error}</div>}
            { pending && <div className="text">En chargement...</div>}
            {newCarouselList}
        </div>
     );
}
 
export default NewCarousel;