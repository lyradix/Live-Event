import { useParams } from "react-router-dom";
import FetchData from "./fetchData";
import { Link } from "react-router-dom";




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
            <p className="text">{concert.Source}</p>        
            </article>
            
)                    
}

<button><Link className="nav-link" to="/Programmation">retour</Link></button> 
            </div>

     );
}
 
export default ArtistDetails;