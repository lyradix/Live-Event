
import { Link } from "react-router-dom";

const ConcertList = ({concerts, nom,jour,date,horaire,scene, Description,Source, Lien, image, FamousSong }) => {
    

    return ( 


    <div className="concert">
      
        <h2>{nom}</h2>
         {concerts.map((concert) => (
            <Link className="nav-link" to={`/Artist/${concert.id}`}>
            <div className="concert-preview" key = {concert.id}>                
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