const NewCarouselList = ({concerts, concert}) => {

  const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]  
    return (  
        <div className="inner-container" >
      
   
        {concerts.map((concert) => {
            console.log('Image path:', `https://cornflowerblue-otter-463564.hostingersite.com/images/${concert.image}`);
            return (
                <div key={concert.id}>
                    <div className="item">
                        <div className="textBox">
                            <h1 className="namePoster">{concert.nom}</h1>  
                            <p className="dayPoster">{days[new Date(`${concert.startTime}`).getDay()]}</p>
                            <p className="datePoster">{concert.startTime.substring(0, 10)}</p>
                        </div>
                        <img className="imgConcertFront" src={`https://cornflowerblue-otter-463564.hostingersite.com/images/${concert.image}`} alt="artist" /> 
                    </div>
                </div>
            );
        })}          

  </div>
    );
}
 
export default NewCarouselList;