import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './Navbar';
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import Signup from './Signup';
import {Routes, Route} from 'react-router-dom';


import Login from './Login';


const App = () => {
  return (
    
    <div className="App">
      <div>
        <Routes>
        <Route exact path="/" element={<Signup/>}></Route>
        </Routes>
       </div>
    <div>
    <Navbar/>
    <Routes>
    <Route exact path="/login" element={<Login/>}></Route>
     <Route exact path="/home" element={<Home/>}></Route>
     <Route exact path="/contact" element={<Contact/>}></Route>
     <Route exact path="/service" element={<Service/>}></Route>
     <Route exact path="/about" element={<About/>}></Route>
     
    </Routes>
    </div>
     </div>
  );
}

export default App;
