import Header from './components/Header';
import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Trips from './components/pages/Trips';
import TripDetail from './components/pages/TripDetail';
import {useSelector} from 'react-redux'
import Profile from './components/pages/Profile';
import Admin from './components/pages/Admin';
import Cart from './components/Cart';
import Cancel from './components/pages/Cancel';
import Success from './components/pages/Success';
import Auth from './components/Auth';
import CurrentUserProvider from './contexts/CurrentUser';
import TripDetailOne from './components/pages/TripDetailOne';
import TripDetailTwo from './components/pages/TripDetailTwo';
import TripDetailThree from './components/pages/TripDetailThree';




function App() {
  const isLoggedIn= useSelector(state=>state.isLoggedIn);
  console.log(isLoggedIn);
 
  return <React.Fragment>
    <CurrentUserProvider>
      <header>
        <Header />
      </header>
        <main>
          {/* <Home /> */}
        <Routes>
          
          <Route index element={<Home/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/trips" element={<Trips/>}/>
          <Route path="/trips/:id" element={<TripDetail/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/tripdetail" element={<TripDetail/>}/>
          <Route path="/cancel" element={<Cancel/>}/>
          <Route path="/success" element={<Success/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path='/tripdetailone' element={<TripDetailOne/>}/>
          <Route path='/tripdetailtwo' element={<TripDetailTwo/>} />
          <Route path='/tripdetailthree' element={<TripDetailThree/>} />
        </Routes>
      </main>
    </CurrentUserProvider>
  </React.Fragment>;
}

export default App;
