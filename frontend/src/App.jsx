<<<<<<< HEAD
import React from 'react';
import Home from './components/Home';

function App() {
  return <React.Fragment>
    <main>
      <Home />
    </main>
  </React.Fragment>
=======
import Header from './components/Header';
import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Trips from './components/Trips';
import TripDetail from './components/TripDetail';
import {useSelector} from 'react-redux'
import LogoutButton from './components/LogoutButton';
import LoginButton from './components/LoginButton';
import Profile from './components/Profile';
import Slides from './components/Carousel';
import Admin from './components/Admin';



function App() {
 
  return <React.Fragment>
    <header>
      <Header/>
    </header>
      <main>
        
      <Routes>
        
        <Route path="/home" element={<Home/>}/>
        <Route path="/trips" element={<Trips/>}/>
        <Route path="/trips/:id" element={<TripDetail/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </main>
  </React.Fragment>;
>>>>>>> e3122159fd7159a2b49d8aeeaaac3d8169c893f3
}

export default App;
