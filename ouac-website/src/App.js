import './App.css';
import Navbar from './components/Navbar.js';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
  <Router>
    <div>
     <Navbar/>
      <Home/>
    </div>
  </Router>
  
   
  ) 
}

export default App;
