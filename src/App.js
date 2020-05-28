import React from 'react';
import Header from './components/Header';
import FlightSearch from'./components/SearchFlightsComp';
import Grid from './components/Gridcomp';
import Footer from './components/Footer';
import {Provider,connect} from 'react-redux';
import './styles/App.scss';
import configureStore from './store/configureStore';

const store = configureStore();

function App(props) {

  return (
    <Provider store={store}>
      <Header  />
      <FlightSearch />
      <Grid />
      <Footer />
    </Provider>
  );
}

const mapStateToProps = (state)=>{
  return {
    isAuthenticated:state.isAuthenticated
  }
}
export default App;

// export default connect(mapStateToProps)(App);
// {props.isAuthenticated && 
//   <div>
//     <FlightSearch />
//     <Grid />
//   </div>
//}