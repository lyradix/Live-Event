import Home from './Home';
import Programmation from './programmation';
import Map from './map';
import Sidebar from './SideBar';
import ArtistDetails from './artistDetails';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { useState, useEffect, useRef } from "react";


// import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";






function App() {

  // const [pending, setpending] = useState(true);
  // const[concerts, setConcerts] = useState (null);
  // const[toggle, setToggle] = useState (null);
  // const[button, setButton] = useState (null);



  
  //  useEffect(() => {
  //     setTimeout(() => {
  //         // go and fetch the json data in the localhost
  //     fetch('http://localhost:8000/concerts').then(res => {
  //         return res.json();
  //     }).then((data) => {
  //         setConcerts(data);
  //         setpending(false)
  //     })
  //     })
      
  // },[])

 
  
  return (
 
    <Router>
     <Container fluid="sd">

    <div className="App">
    
      <Sidebar className="sidebar"/>
     <div className='content'>
     <div>
        <img src="Preview.png"  alt="logo" ></img>
      </div>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Programmation" element={<Programmation/>}/>
      <Route path="/Map" element={<Map/>}/>
      <Route path="/Artist/:id" element={<ArtistDetails/>}/>
      </Routes>  
     </div>
    </div>
    <footer bgDark className='footer'>
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <h3>footer</h3>
            <ul col>
          
              <a href="#">Blog</a>
            </ul>
          </div>
               
    
     
        </div>
      </div>
    </footer>

    </Container>
    </Router>
)}

export default App;
