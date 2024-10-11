import { Collapse, Nav,Card } from "react-bootstrap";
import React, { useState } from "react";




const SideBar = () => {

  const [open, setOpen] = useState(null);

    return ( 
<div >
<Nav class="navbar">
    <button class="navbar-toggler" type="button"  onClick={() => setOpen(!open)} data-toggle="collapse" data-target="sidebar" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </Nav>
  <Collapse class="collapse" in={open} className="sidebar">
     <Card body style={{height:'100%', width: '400px' }} class="nav-item active" >
    
                <ul  class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active"><a class="nav-link" href="/">Accueil</a></li> 
                    <li> <a href="/Programmation">Programmation</a></li>
                    <li> <a href="/Map">Où suis-je?</a></li>
                 
                </ul>
      
                </Card>
  </Collapse>

</div>
     );
}
 
export default SideBar;