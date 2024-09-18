const ConcertList = ({concerts, artist,jour,date,handleDelete}) => {
    

    return ( 
    <div className="concert">
        <h2>{artist}</h2>
        <button>Click</button>
        {concerts.map((concert) => (
            <div className="concert.preview" key = {concert.id}>                
            <h2>{concert.jour}</h2>
            <p>{concert.date}</p>
            <p>{concert.artist}</p>
            <button onClick={() => handleDelete (concert.id)}>Plus d'infos</button>      
                  
            </div>
        ))}

        </div>
     );
}
 
export default ConcertList;