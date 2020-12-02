import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import {data} from './data'
import uuid from 'react-uuid'


const NavBar = () => {
    return (
        <div className='clau-navbar'>
            <div className='img-row'>
                <img src="clau-logo.png" alt=""/>
            </div>

            <div className='btn-row'>
            {
                data.map((ele)=>{
                    const {title,link} = ele
                    return <Link key={uuid()} to={link}>{title}</Link>
                })
            }
            </div>

            <div className='menu-row'>
              <button className='navbar-dropdown-btn'><i className="fas fa-bars"></i></button>
              <div className='navbar-dropdown'>
            {
                data.map((ele)=>{
                    const {title,link} = ele
                    return <Link key={uuid()} to={link}>{title}</Link>
                })
            }
              </div>
            </div>
        </div>
    )
}

export default NavBar
