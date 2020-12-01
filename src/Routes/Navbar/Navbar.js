import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
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
            
        </div>
    )
}

export default Navbar
