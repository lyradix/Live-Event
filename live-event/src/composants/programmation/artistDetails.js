import { useParams } from "react-router-dom";
import FetchData from "../fetchData";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Stack } from "react-bootstrap";
import fbLogo from '../../image/fb.png'
import iLogo from '../../image/i.png'
import xLogo from '../../image/x.png'






const ArtistDetails = () => {
    
    // const[data, setData] = useState ([]);

    const {id} = useParams();
    const {data:concert} = FetchData('http://localhost:8000/concerts/' + id );


//    useEffect(() => {
    
    // go and fetch the json data in the localhost
// fetch('http://localhost:8000/concerts/'+id).then(res => {
//     return res.json();
// }).then((concerts) => {
//  setConcerts(concerts);

// })
// },[])


    return ( 
        <div className="artistDetails">
            
                
                {concert && (
                            <article>          
                            <p className="text">{concert.Description}</p>        
                            <p className="descripText">Source: {concert.Source}</p> 
                            {console.log(`${concert.image}`)}
                            <p className="descripText">chanson connue: {concert.FamousSong}</p> 
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