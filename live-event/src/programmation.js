
const Programmation = ({concerts,jour,artist,date}) => {

   

    return ( 
        <div className="programmation-list">
            <h2>Programmation</h2>
            {concerts.map((concert) => (
            <div className="concert.preview" key = {concert.id}>
            <p>{concert.jour}</p>          
            <p>{concert.date}</p>          
            <p>{concert.artist}</p>          
            </div>
        ))}    
        </div>  
     );
}
 
export default Programmation;