import React from 'react';
// import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import {Route, Switch} from 'react-router-dom';


function App() {
  return (
    <>
      <Route exact path="/" component={Home}/>
      <Route path="/rooms/" component={Rooms}/>
      <Route path="/single-room" component={SingleRoom}/>
    
    </>
  );
}

export default App;
