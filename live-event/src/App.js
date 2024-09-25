import Home from './Home';
import Programmation from './programmation';
import SideBar from './SideBar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';



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
      </Routes>      
     </div>
    </div>
    </Router>
  );
}

export default App;
