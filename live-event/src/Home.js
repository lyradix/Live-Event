import Poster from './carousel'
import Slide from './slide'
import { Link } from 'react-router-dom';
const Home = () => {

    

       return ( 
        <div className="Home">
        <h1 className='programmationText'>Programmation</h1>
        <Poster />
 
        <h2 className='textPartners'>Partenaires</h2>
        <div className="partners">
           <button className='btnPartner'><Link className="nav-link" to="/Artist"><img></img></Link></button>
           <button  className='btnPartner'><img></img></button>
           <button  className='btnPartner'><img></img></button>
           <button  className='btnPartner'><img></img></button>
           <button  className='btnPartner'><img></img></button>
           <button  className='btnPartner'><img></img></button>
           <button  className='btnPartner'><img></img></button>
           <button  className='btnPartner'><img></img></button>
        </div>

        <article className="descriptif">
            <h2>Qui nous sommes...</h2>        
            Lorem ipsum dolor sit amet consectetur. Id mattis scelerisque eget commodo. Purus rutrum vestibulum nibh accumsan tristique. Sed amet lectus malesuada euismod ultrices aenean leo amet. Proin ornare tempor morbi non bibendum diam arcu dui. A tellus pharetra nibh vitae cursus. Feugiat enim phasellus tortor pretium est congue sit. Tortor nulla convallis ultrices aliquam est integer consequat diam ac. Nulla pharetra ullamcorper dictum cras lorem. Neque sagittis posuere consequat molestie vitae tellus ultricies tincidunt id. Et mi aliquam lacus pellentesque. Id aliquet proin feugiat ultrices malesuada nec non ultrices. Tristique vitae at etiam duis.
            Suspendisse est venenatis sit et neque cras. Id..
        </article>

        
        
        </div>
    );
}
 
export default Home;