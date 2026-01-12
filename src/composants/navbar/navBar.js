import { Link } from "react-router-dom";
import { Stack } from "react-bootstrap";
import { useState } from "react";




const NavBar = () => {

const [menuOpen, setmenuOpen] = useState(null);
// const [menuProfile, setmenuProfile] = useState(null);
const [overlay, setOverlay] = useState(null);
// const [dropdown, setDropdownOpen] = useState(false);
// const [profil, setProfile] = useState(false);
// const [overlayprofile, setOverlayprofile] = useState(false);

const overlayMenu = (
  <div className="overlayMenu" 
      onClick={()=>{
      setmenuOpen(menuOpen);
      setOverlay(!overlayMenu)
    }}>
  </div>
);

// const overlayMenuprofile = (
//   <div className="overlayMenuProfile" 
//       onClick={()=>{
//       setOverlayprofile(!overlayMenu);
//       setmenuProfile(menuProfile);
//       // setProfile(profil);
//     }}>
//   </div>
// );


// const toggleDropdown = () => {
//     setmenuOpen(false);
//     setOverlay(true);
//     // setDropdownOpen(!dropdown);
// }

// const sidebarProfil = () => { 
//       // setProfile(!profil);
//       setOverlayprofile(!overlayprofile);
// }


    return (
<div>

{/* <div className="profil" direction="horizontal">
        <div className="profilContainer" 
         onClick={()=>{
          setmenuOpen(false);
          setOverlayprofile(!overlayMenuprofile); 
          setProfile(false);}}> 
        {profil && <SideProfil
      
        />}
        
        </div>
        {overlayprofile && (
            <div overlayprofile className="overlayMenuProfile" onClick={
              ()=>{
                setProfile(false);
                setOverlayprofile(false);
                setmenuOpen(false)
              }
            }>
          </div>
        )}
        
        </div> */}

        <Stack className="navbar" direction="horizontal" >
        <div className='menuNav' onClick={()=>{setmenuOpen(!menuOpen);setOverlay(overlayMenu)}}>
        <span className='line'></span>
        <span className='line'></span>
        <span className='line'></span>
        </div>
              <ul className={menuOpen?"open":""} onClick={()=>{setmenuOpen(!menuOpen);setOverlay(!overlayMenu)}}>
               <li className="navli"><Link to="/" className="nav-link">Accueil</Link></li> 
               <li className="navli"> <Link to="/Programmation" className="nav-link">Programmation</Link></li>
               <li className="navli"> <Link to="/Map" className="nav-link" >Carte</Link></li>
               <li className="navli"> <Link to="/#" className="nav-link" >Billetterie</Link></li> 
               <li className="navli"> <Link to="/info" className="nav-link" >&#9432;<br/>infos</Link></li>

               {/* <li className="navli">
                <div className={menuOpen?"profilContainer":"" } 
                onClick={() => {
                  toggleDropdown();
                  sidebarProfil();
                  setmenuOpen(!menuOpen);
                  setOverlay(!overlayMenu);
              }}
                >
                        <img className="profile" alt="profil" src={profilimg} style={{ width: "50px", height: "50px", cursor: "pointer"}}>
                        </img>
                        {dropdown && <Profil />}
                      </div>
                    </li>   */}
                </ul>  
           <Link to="/" alt="logo accueil" className='logoXtra'><img src="logo.jpg"  alt="logo" >
           </img> </Link> 
         {overlay && (
                    <div
                        className="overlayMenu"
                        onClick={() => {
                            setmenuOpen(false);
                            setOverlay(false);
                            // setDropdownOpen(false); // Close dropdown when overlay is clicked
                        }}
                    ></div>

                  
                )}
        </Stack>

      

</div>
      );
}
 
export default NavBar;