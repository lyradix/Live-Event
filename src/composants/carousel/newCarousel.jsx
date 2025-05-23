import { useRef} from "react";
import FetchData from "../fetchData";
import NewCarouselList from "./newCarouselList";

const NewCarousel = ({innerContainer, containerWrap}) => {
    const myRef = useRef()




    const {data:concerts} = FetchData('https://bisque-dotterel-606944.hostingersite.com/concert'); 

    const newCarouselList = concerts && <NewCarouselList concerts={concerts.filter((concert)=> concert.sceneFK.nom === 'eXtravaganza !')} scene = "filtre pour jour"/>

    return ( 
        <div className="containerWrap" ref={myRef}>
            {newCarouselList}
        </div>
     );
}
 
export default NewCarousel;