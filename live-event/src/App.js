import Home from './Home';
import Programmation from './programmation';
import MapWrap from './map';
import Sidebar from './SideBar';
import ArtistDetails from './artistDetails';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Card} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect, useRef } from "react";
import NavBar from './navBar';
import Info from './info';
import Footer from './footer';
import Partners from './partners';


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
    

      {/* <Sidebar className="sidebar"/> */}
  
      <Container fluid="sd">
 
    <div className="App">
    

     <div className='content'>
     <NavBar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Programmation" element={<Programmation/>}/>
      <Route path="/Map" element={<MapWrap/>}/>
      <Route path="/Artist/:id" element={<ArtistDetails/>}/>
      <Route path="/Parteraires" element={<Partners/>}/>
      <Route path="/info" element={<Info/>}/>
      </Routes>  
     </div>
    </div>
    <Footer/>

    </Container>
    </Router>
)}

export default App;
