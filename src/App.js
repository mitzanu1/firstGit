import './App.css';
import React from 'react'
import Navbar from './Routes/Navbar/Navbar';
import CircleApp from './Routes/CircleApp/index';
import Home from './Routes/Home/Home';
import Acasa from './Routes/sampleWebPage/index';
import { Route, Switch } from 'react-router-dom';
import ServiciiBv from './Routes/serviciiBv/index'
import Admin from './Routes/serviciiBv/Admin';



function App() {
  return <>
    <Navbar/>
    <Switch>
      <Route exact path='/'><Home/></Route>
      <Route path='/circles'><CircleApp/></Route>
      <Route path='/sampleWebPage'><Acasa/></Route>
      <Route path='/serviciiBv'><ServiciiBv/></Route>
      <Route path='/serviciiBv-admin'><Admin/></Route>
    </Switch>
  </>
}

export default App

