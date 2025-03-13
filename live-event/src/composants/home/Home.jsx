import MainPartners from './mainPartners';
import NewCarousel from '../carousel/newCarousel';
import { Link } from 'react-router-dom';
import FetchData from '../fetchData';
import Descriptif from './descriptif';

const Home = () => {

    const {data:partners} = FetchData('http://localhost:8000/partners'); 
    const {data:concerts, pending, error} = FetchData('http://localhost:8000/getData'); 
    const {data:info} = FetchData('http://localhost:8000/info'); 
    

    const partnersList = partners && <MainPartners partners={partners.filter((partner)=>partner.frontPage === true)} />
    const Descrip = info && <Descriptif info={info.filter((info)=>info.type === "mainInfo")} />
    const carouselList = concerts && <NewCarousel concerts={concerts.filter((concert)=> concert.sceneFK.nom === 'eXtravaganza !')} scene = "filtre pour jour"/>


       return ( 


        <div className="Home">
          { error && <div className="text">{error}</div>}
          { pending && <div className="text">En chargement...</div>}
        
        <div className='programmationBox'>
        <h1 className='programmationText'>Programmation</h1>
        </div>
        {/* <Poster /> */}

        {/* {carouselList} */}
        <div className='carousel-preview'>
        <NewCarousel/>
        </div>
 
       
        <Link to="/Parteraires"><h2 className='textPartners'>Partenaires</h2></Link>
        {partnersList}


        {/* <div className="partners">
 
           <button className='btnPartner'><Link className="nav-link" to="/Artist"><img></img></Link></button>
           <button  className='btnPartner'><img className="imgPartner" src={imageA} alt="Mobalpa"></img></button>
           <button  className='btnPartner'><img></img></button>
           <button  className='btnPartner'><img></img></button>
           <button  className='btnPartner'><img></img></button>
           <button  className='btnPartner'><img></img></button>
           <button  className='btnPartner'><img></img></button>
           <button  className='btnPartner'><img></img></button>
   
           </div> */}

            <div>
            <h2 className='descriptifTitle'>Qui nous sommes...</h2>
                <article className="descriptif">  
                {Descrip}
                </article>
        </div>
        
        
        </div>
    );
}
 
export default Home;