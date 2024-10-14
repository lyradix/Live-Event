import { Collapse, Nav,Card } from "react-bootstrap";
import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";




const Sidebar = () => {


    return ( 
<div >
<Menu>
<Nav class="navbar navbar-expand-sm bg-light">
     <Card style= { { width: "0rem" }}>
                <ul  className="navbar-nav ml-auto">
                    <li className="nav-item"><a className="nav-link" href="/">Accueil</a></li> 
                    <li className="nav-item"> <a className="nav-link" href="/Programmation">Programmation</a></li>
                    <li className="nav-item"> <a className="nav-link" href="/Map">Où suis-je?</a></li>
                 
                </ul>
               
      </Card>
      </Nav>
      </Menu>
     
</div>
     );
}
 
export default Sidebar;