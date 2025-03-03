const NewCarouselList = ({concerts}) => {

  const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]  
    return (  
        <div className="inner-container" >
      
   
        {concerts.map((concert) => (
      
        <div  key = {concert.id}>
        <div className="item"> <div className="textBox"><h1 className="namePoster">{concert.artist}</h1>  
        <p className="dayPoster"> {days[new Date(`${concert.startTime}`).getDay()]}</p>
        <p className="datePoster">{concert.startTime.substring(0, 10)}</p> </div>
        <img className="imgConcertFront" src={`image-${concert.id}.jpg`} alt="artist" /> </div>
        </div>
    
          ))}          

  </div>
    );
}
 
export default NewCarouselList;