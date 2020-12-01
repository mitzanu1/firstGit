import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const NavBar = () => {
    return (
        <div className='clau-navbar'>
            <img src="clau-logo.png" alt=""/>
            <ul>
                <li><Link to='/clau-acasa'>Acasa</Link></li>
                <li><Link to='/clau-desprenoi'>Despre Noi</Link></li>
                <li><Link to='/clau-servicii'>Servicii</Link></li>
                <li><Link to='/clau-portofoliu'>Portofoliu</Link></li>
                <li><Link to='/clau-contact'>Contact</Link></li>
            </ul>
        </div>
    )
}

export default NavBar
