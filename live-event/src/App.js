import Home from './Home';
import Programmation from './programmation';
import Map from './map';
import Sidebar from './SideBar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';






function App() {



  return (
 
    <Router>
     

    <div className="App">
   
    
    
      <Sidebar className="sidebar"/>
     <div className='content'>
      <h1>Live Event</h1>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Programmation" element={<Programmation/>}/>
      <Route path="/Map" element={<Map/>}/>
    
      
      </Routes>  
       
     </div>
    </div>
  
    </Router>)
  ;
}

export default App;
