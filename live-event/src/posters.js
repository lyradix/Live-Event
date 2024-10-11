
import {Carousel} from 'react-bootstrap';





const Posters = () => {

    




    

    // const filterSunday = concerts && <ConcertList concerts={concerts.filter((concert)=> concert.jour === 'Dimanche')} jour = "filtre pour jour"/>

  


    // const toggleElements = () => {
    //     setToggle(filterFriday)   
    // };

   
// creer boutton filtre par jour
    return ( 
    <div className="posters">
   

   <Carousel id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item">
            <img className="imgConcert active" src={`image-1.jpg`} alt="artist" height='600px' width='380px'/> 
            </div>
            <div class="carousel-item active">
            <img className="imgConcert" src={`image-2.jpg`} alt="artist" height='600px' width='380px'/> 
            </div>
            <div class="carousel-item active">
            <img className="imgConcert" src={`image-3.jpg`} alt="artist" height='600px' width='380px'/> 
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only"></span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
        </Carousel>    
    </div>  
    );
}
 
export default Posters;