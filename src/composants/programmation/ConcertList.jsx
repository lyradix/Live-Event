import { Link } from "react-router-dom";

const ConcertList = ({concerts, nom,jour,date,horaire,scene, description,source, lien, famousSong, image }) => {
    

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
                        src={`http://localhost:8000/images/${concert.image}`}
                        alt="artist"
                    />
                </div>
            </Link>
        ))}
    </div>
     );
}
 
export default ConcertList;