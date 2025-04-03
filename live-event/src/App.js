import Home from './composants/home/Home';
import Programmation from './composants/programmation/programmation';
import MapWrap from './composants/map/map';
import ArtistDetails from './composants/programmation/artistDetails';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import NavBar from './composants/navbar/navBar';
import Info from './composants/info/info';
import Footer from './composants/footer';
import Partners from './composants/partner/partners';
import LogIn from './composants/login/login';
import SignUp from './composants/login/signUp';
import Formdays from './composants/form/formdays';
import Admin from './composants/admin/admin';


function App() {

 
  
  return (
 

    <Router>
    
  
      <Container fluid="sd">
 
    <div className="App">
    

     <div className='content'>
     <NavBar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/login" element={<LogIn/>}/>
      <Route path="/signUp" element={<SignUp/>}/>
      <Route path="/formdays" element={<Formdays/>}/>
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