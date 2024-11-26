const NewCarouselList = ({concerts}) => {
    return (  
        <div className="inner-container" >
      
   
        {concerts.map((concert) => (
      
        <div  key = {concert.id}>
        <div className="item"> <h1 className="namePoster">{concert.artist}</h1>  
        <h1 className="datePoster">{concert.startTime.substring(0, 10)}</h1> 
        <img className="imgConcertFront" src={`image-${concert.id}.jpg`} alt="artist" /> </div>
        </div>
    
          ))}          

  </div>
    );
}
 
export default NewCarouselList;