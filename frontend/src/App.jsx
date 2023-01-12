import Header from './components/Header';
import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Trips from './components/pages/Trips';
import TripDetail from './components/pages/TripDetail';
import {useSelector} from 'react-redux'
import LogoutButton from './components/LogoutButton';
import LoginButton from './components/LoginButton';
import Profile from './components/pages/Profile';
import Slides from './components/Carousel';
import Admin from './components/pages/Admin';
import Cart from './components/Cart';
import Cancel from './components/pages/Cancel';
import Success from './components/pages/Success';



function App() {
 
  return <React.Fragment>
    <header>
      <Header/>
    </header>
      <main>
        
      <Routes>
        
        <Route index element={<Home/>}/>
        <Route path="/trips" element={<Trips/>}/>
        <Route path="/trips/:id" element={<TripDetail/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/tripdetail" element={<TripDetail/>}/>
        <Route path="/cancel" element={<Cancel/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </main>
  </React.Fragment>;
}

export default App;
