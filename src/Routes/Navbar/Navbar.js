import React from 'react'
import { Link } from 'react-router-dom'
import actions from '../../store/actions'
import './navbar.css'
import { useSelector } from 'react-redux'
import firebase from 'firebase'
import {startFirebaseUI} from '../../auth/firebase.js'



const Navbar = () => {

    
    const user  = useSelector(()=>actions.get('auth',{}))
      startFirebaseUI('#firebase-ui-auth')

    return (
        <div className='navbar'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li className='dropdown'>
                <Link to='/'>Apps</Link>
                <div className='dropdown-content'>
                <Link to='circles'>Circles</Link>
                <Link to='clau-acasa'>Clau-webpage</Link>
                <Link to='/'>App 3</Link>
                <Link to='/'>App 4</Link>
            </div></li>
            </ul>
            <h1>Welcome {user.email}</h1>
            <button>LogIn</button>
            <div id='firebase-ui-auth'> </div>
            <button onClick={()=>firebase.auth().signOut()}> Logout</button>
        </div>
    )
}

export default Navbar
