import { Link } from "react-router-dom";
import { Stack } from "react-bootstrap";
import fbLogo from '../image/fb.png'
import iLogo from '../image/i.png'
import xLogo from '../image/x.png'



const Footer = () => {
    return ( 
        <footer className='footer'>
         <div>
            <Stack  direction="horizontal" className="footerStack">          
              <li><Link to="/Parteraires" className="nav-link" >Partenaires</Link></li>
              <li href="#">Mentions Légales</li>
              <Stack  direction="horizontal" gap={0}>
                <li><img className="logoNetwork" src={fbLogo} alt="facebook logo"></img></li>
                <li><img className="logoNetwork" src={iLogo} alt="instagram logo"></img></li>
                <li><img className="logoNetwork" src={xLogo} alt="x logo"></img></li>
              </Stack>
            </Stack>
          </div>
    </footer>
     );
}
 
export default Footer;