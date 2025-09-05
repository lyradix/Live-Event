import { Link } from "react-router-dom";
import Url from "../../url"


const ConcertList = ({concerts, nom,jour,date,horaire,scene, description,source, lien, famousSong, image }) => {

const url = Url(); 
console.log(url); 

    return ( 


    <div className="programwrap">
        <h2>{nom}</h2>
        {concerts.map((concert, index) => (
            <Link className="boxConcertlink" to={`/Artist/${concert.id}`} key={concert.id}>
                <div
                    className="concertpreview"
                    style={{ animationDelay: `${index * 0.3}s` }} // Add delay based on index
                >
                    <h2 className="artistName">{concert.nom}</h2>
                    {/* Display the date */}
                    <p className="detailsPicture">{concert.startTime.substring(0, 10)}</p>
                    <p className="scenePicture">{concert.sceneFK.nom}</p>
                    {/* Template string to extract the corresponding image */}
                    <img
                        className="imgConcert"
                        src={`${url}/images/${concert.image}`}
                        alt="artist"
                    />
                </div>
            </Link>
        ))}
    </div>
     );
}
 
export default ConcertList;