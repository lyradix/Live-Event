import Home from './Home';
import Programmation from './programmation';
import Map from './map';
import SideBar from './SideBar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Time from './time';




function App() {
  return (
    <Router>
    <div className="App">
      <SideBar/>
     <div className='content'>
      <h1>Live Event</h1>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Programmation" element={<Programmation/>}/>
      <Route path="/Map" element={<Map/>}/>
    
      
      </Routes>      
     </div>
    </div>
    </Router>
  );
}

export default App;
