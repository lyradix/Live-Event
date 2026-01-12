import MainPartners from './mainPartners';
import NewCarousel from '../carousel/newCarousel';
import { Link } from 'react-router-dom';
import FetchData from '../fetchData';
import Descriptif from './descriptif';
import Url from '../../url';
const Home = () => {
    const url = Url();
    const {data:partners} = FetchData(`${url}/partners`); 
    const {data:info} = FetchData(`${url}/info`);  
    const partnersList = partners && <MainPartners partners={partners.filter((partner)=>partner.frontPage === true)} />
    const Descrip = info && <Descriptif info={info.filter((info)=>info.type === "mainInfo")} />
       return ( 
        <div className="Home">
            <div className='programmationBox p-0 m-0'>
                <h1 className='programmationText'>Programmation</h1>
            </div>
            <div className='carousel-preview'>
                <NewCarousel/>
            </div>
        <Link to="/Partenaires"><h2 className='textPartners'>Partenaires</h2></Link>
        {partnersList}
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