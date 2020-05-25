import React from 'react';
import Header from './components/Header';
import FlightSearch from'./components/SearchFlightsComp';
import Grid from './components/Gridcomp';
import Footer from './components/Footer'
import './styles/App.css';

function App() {
  return (
    <div >
      <Header/>
      <FlightSearch />
      <Grid />
      <Footer />
    </div>
  );
}

export default App;
