import React from 'react'
import { Link } from 'react-router-dom'
import actions from '../../store/actions'
import './navbar.css'
import { useSelector } from 'react-redux'
import firebase from 'firebase'
import uuid from 'react-uuid'


const Navbar = () => {
    
    const user  = useSelector(()=>actions.get('auth',{})) 
    const {email,authenticated,displayName} = user
    let initial = ''
    if(authenticated) initial = displayName.split('',1)
    
    

    return (
        <div className='navbar'>
            <section className='link-box'>
            <div className='links'>
             {
                [{ link: '/',
                   name:'Home',
                   dropdown: []
                 },
                 {
                   link: '/',
                   name:'Apps',
                   dropdown:
                   [{
                    name:'Circles',
                    link:'/circles'
                   },
                   {
                    name:'SampleWebPage',
                    link:'/sampleWebPage'
                   },
                   {
                    name:'serviciiBv',
                    link:'serviciiBv'
                   }]
                  }
                    
                ].map((button) => {
                 const {name, link , dropdown} = button
                  return (
                    <div key={uuid()} className='dropdown'>
                     <Link  to={link}>{name}</Link>
                        <div className='dropdown-content'>
                         {
                         dropdown.map((dropMenuButton)=>{
                         const {link,name} = dropMenuButton
                           return (
                            <Link key={uuid()} to={link}>{name}</Link>
                            )})
                         }
                        </div>
                    </div>
                )})
             }
            
                    
            </div>
            </section>

            <section className='title-box'>
                <h1>Welcome {displayName}</h1>
            </section>

            <section className='login-box'>
              {
                authenticated && <div className='navbar-profile'>
                   <p>{email}</p>
                   <div className='profile-dropdown'>
                      <button>{initial}</button>
                        <div className='profile-dropdown-content'>
                          <button>Settings</button>
                          <button onClick={()=>firebase.auth().signOut()}> Logout</button>
                        </div>
                    </div>
                </div>
              }
            </section>
        </div>
    )
}

export default Navbar
