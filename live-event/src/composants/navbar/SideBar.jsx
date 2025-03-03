import {Card } from "react-bootstrap";
import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";




const Sidebar = () => {



const menu = <Menu>

<Card style= { { width: "0rem", flex:"start"}}>
           <ul  className="navbar-nav ml-auto">
               <li className="nav-item"><Link to="/" className="nav-link" >Accueil</Link></li> 
               <li className="nav-item"> <Link to="/Programmation" className="nav-link" >Programmation</Link></li>
               <li className="nav-item"> <Link to="/Map" className="nav-link" >Où suis-je?</Link></li>
               <li className="nav-item"> <Link to="/#" className="nav-link" >Billetterie</Link></li>
            
           </ul>
          

 </Card>

 </Menu>

    return ( 
<div >
 
 {menu}
     
</div>
     );
}
 
export default Sidebar;