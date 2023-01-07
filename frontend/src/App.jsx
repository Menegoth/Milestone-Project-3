import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';

function App() {
  return <React.Fragment>
    <header><Header/></header>
    <main>
      <Carousel/>
    </main>
  </React.Fragment>
}

export default App;
