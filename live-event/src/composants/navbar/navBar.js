import { Link } from "react-router-dom";
import { Stack } from "react-bootstrap";
import { useState } from "react";


const NavBar = () => {

const [menuOpen, setmenuOpen] = useState(null);
const [overlay, setOverlay] = useState(null);
const overlayMenu =<div className="overlayMenu" onClick={()=>{setmenuOpen(menuOpen);setOverlay(!overlayMenu)}}>

</div>
    return (
        <Stack className="navbar" direction="horizontal" >
        <div className='menuNav' onClick={()=>{setmenuOpen(!menuOpen);setOverlay(overlayMenu)}}>
        <span className='line'></span>
        <span className='line'></span>
        <span className='line'></span>
      </div>
              <ul className={menuOpen?"open":""} onClick={()=>{setmenuOpen(!menuOpen);setOverlay(!overlayMenu)}}>
               <li className="navli"><Link to="/" className="nav-link" >Accueil</Link></li> 
               <li className="navli"><Link to="/login" className="nav-link" >S'identifier</Link></li> 
               <li className="navli"> <Link to="/Programmation" className="nav-link" >Programmation</Link></li>
               <li className="navli"> <Link to="/Map" className="nav-link" >Carte</Link></li>
               <li className="navli"> <Link to="/#" className="nav-link" >Billetterie</Link></li> 
               <li className="navli"> <Link to="/info" className="nav-link" >&#9432;<br/>infos</Link></li> 
           </ul>  
           <Link to="/" alt="logo accueil" className='logoXtra'><img src="Preview.png"  alt="logo" >
           </img> </Link> 
         {overlay}
        </Stack>
      );
}
 
export default NavBar;