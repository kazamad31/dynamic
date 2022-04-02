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
    <div> 
      <Navbar/>
    <Routes>
     <Route exact path="/" element={<Signup/>}></Route>
     <Route exact path="/login" element={<Login/>}></Route>
     <Route exact path="/home" element={<Home/>}></Route>
     <Route exact path="/contact" element={<Contact/>}></Route>
     <Route exact path="/service" element={<Service/>}></Route>
     <Route exact path="/about" element={<About/>}></Route>
     <Route exact path=""></Route>
   </Routes> 
   </div>
  );
}

export default App;
