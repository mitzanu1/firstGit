import './App.css';
import React from 'react'
import Navbar from './Routes/Navbar/Navbar';
import { Route, Switch } from 'react-router-dom';
import CircleApp from './Routes/CircleApp/CircleApp';
import Home from './Routes/Home/Home';
import Acasa from './Routes/ClauWebPage/Acasa/Acasa';
import DespreNoi from './Routes/ClauWebPage/DespreNoi/DespreNoi';
import Servicii from './Routes/ClauWebPage/Servicii/Servicii';
import Portofoliu from './Routes/ClauWebPage/Portofoliu/Portofoliu';
import Contact from './Routes/ClauWebPage/Contact/Contact';
import LoginWidget from './Routes/LoginWidget/LoginWidget';

function App() {
  return <>
    <Navbar/>
    <Switch>
      <Route exact path='/'><Home/></Route>
      <Route path='/circles'><CircleApp/></Route>
      <Route path='/clau-acasa'><Acasa/></Route>  
      <Route path='/clau-desprenoi'><DespreNoi/></Route>  
      <Route path='/clau-servicii'><Servicii/></Route>  
      <Route path='/clau-portofoliu'><Portofoliu/></Route>  
      <Route path='/clau-contact'><Contact/></Route> 
    </Switch>
    <LoginWidget/>
  </>
}

export default App

