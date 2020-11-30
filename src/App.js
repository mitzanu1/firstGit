import './App.css';
import React from 'react'
import Navbar from './Routes/Navbar/Navbar';
import { Route, Switch } from 'react-router-dom';
import CircleApp from './Routes/CircleApp/CircleApp';
import Home from './Routes/Home/Home';

function App() {
  return <>
    <Navbar/>
    <Switch>
      <Route exact path='/'><Home/></Route>
      <Route path='/circles'><CircleApp/></Route>
    </Switch>
  </>
}

export default App;
