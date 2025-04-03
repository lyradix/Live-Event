
import { Link } from "react-router-dom";

const ConcertList = ({concerts, nom,jour,date,horaire,scene, description,source, lien, famousSong }) => {
    

    return ( 


    <div className="programwrap">
      
        <h2>{nom}</h2>
         {concerts.map((concert) => (
            <Link className="boxConcertlink" to={`/Artist/${concert.id}`}>
            <div className="concertpreview" key = {concert.id}>                
            <h2 className="artistName">{concert.nom}</h2>
            {/* pour récuperer la date seulement */}
            <p className="detailsPicture">{concert.startTime.substring(0, 10)}</p>
            <p className="scenePicture">{concert.sceneFK.nom}</p>
                 {/*template string pour extraire l'image correspondante  */}
            <img className="imgConcert" src={`image-${concert.id}.jpg`} alt="artist" />                 
            </div>
            </Link>
        ))}
    
        </div>
     );
}
 
export default ConcertList;