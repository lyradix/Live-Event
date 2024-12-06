const FilterScene = (concerts,artist,) => {
    return ( 
        <div className="concert">
        <h2>{artist}</h2>
         {concerts.map((concert) => (
            <div className="concert-preview" key = {concert.id}>                
            <h2 className="artistName">{concert.artist}</h2>
            {/* pour récuperer la date seulement */}
            <p className="detailsPicture">{concert.startTime.substring(0, 10)}</p>
            <p className="scenePicture">{concert.scène}</p>
            <img className="imgConcert" src={`image-${concert.id}.jpg`} alt="artist" height='600px' width='380px'/> 
              {/*template string pour extraire l'image correspondante  */}
           
            {/* <button onClick={() => handleDelete (concert.id)}>Plus d'infos</button>       */}
                
                  
            </div>
        ))}

        </div> 
     );
}
 
export default FilterScene;