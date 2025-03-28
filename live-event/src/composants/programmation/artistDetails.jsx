import { useParams } from "react-router-dom";
import FetchData from "../fetchData";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Stack } from "react-bootstrap";
import fbLogo from '../../image/fb.png'
import iLogo from '../../image/i.png'
import xLogo from '../../image/x.png'






const ArtistDetails = (description) => {
    
    // const[data, setData] = useState ([]);

    const {id} = useParams();
    const {data:concert} = FetchData('https://bisque-dotterel-606944.hostingersite.com/concert'+ id);


//    useEffect(() => {
    
    // go and fetch the json data in the localhost
// fetch('https://bisque-dotterel-606944.hostingersite.com/concerts/'+id).then(res => {
//     return res.json();
// }).then((concerts) => {
//  setConcerts(concerts);

// })
// },[])


    return ( 
        <div className="artistDetails">
            
                
                {concert && (
                            <article>          
                            <p className="text">{concert.description}</p>        
                            <p className="descripText">Source: {concert.source}</p> 
                            <p className="descripText">chanson connue: {concert.famousSong}</p> 
                            <Stack  direction="horizontal" gap={0}>
                <li><img className="logoNetwork" src={fbLogo} alt="facebook logo"></img></li>
                <li><img className="logoNetwork" src={iLogo} alt="instagram logo"></img></li>
                <li><img className="logoNetwork" src={xLogo} alt="x logo"></img></li>
              </Stack>
                            {/* <img className="imgConcertDetail" src={`./image/${concert.image}`} alt="artist" height='600px' width='380px'/>  */}
                            </article>          
                )                    
                }
                    
            <Button><Link className="nav-link" to="/Programmation">retour</Link></Button> 
        </div>

     );
}
 
export default ArtistDetails;