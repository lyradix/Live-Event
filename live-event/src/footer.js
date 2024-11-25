import { Link } from "react-router-dom";
const Footer = () => {
    return ( 
        <footer className='footer'>
         <div>
            <ol>          
              <li  href="#">FAQ</li>
              <li><Link to="/Parteraires" className="nav-link" >Partenaires</Link></li>
              <li> <Link to="/info" className="nav-link" >info</Link></li> 
              <li href="#">Mentions Légales</li>
              <li href="#">Réseaux</li>
            </ol>
          </div>
    </footer>
     );
}
 
export default Footer;