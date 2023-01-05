import Header from './components/Header';
import React from "react";
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login'
import Home from './components/Home'
import Trips from './components/Trips';
import TripDetail from './components/TripDetail';


function App() {
  return <React.Fragment>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/trips" element={<Trips/>}/>
        <Route path="/trips/:id" element={<TripDetail/>}/>
      </Routes>
    </main>
  </React.Fragment>;
}

export default App;
