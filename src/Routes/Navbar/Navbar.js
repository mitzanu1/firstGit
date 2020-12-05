import React from 'react'
import { Link } from 'react-router-dom'
import actions from '../../store/actions'
import './navbar.css'
import { useSelector } from 'react-redux'
import firebase from 'firebase/app'
import 'firebase/auth'
import {startFirebaseUI} from '../../auth/firebase.js'
import {data} from './data.js'
import uuid from 'react-uuid'

    // carpeala romaneasca
const x = 0
if (x>1) startFirebaseUI('firebase-ui-auth')

const Navbar = () => {
    
    const user  = useSelector(()=>actions.get('auth',{})) 
    const {email,authenticated,displayName} = user
    const [showWidget,setShowWidget] = React.useState(false)
    let initial = ''
    if(authenticated) initial = displayName.split('',1)
    // const changeName = newName => firebase.auth().currentUser.updateProfile({displayName: newName})
    
    

    return (
        <div className='navbar'>
            <section className='link-box'>
                {/* <button onClick={changeName}>Change Name</button> */}
                <div className='links'>
                    {
                        data.map((item) => {
                            const {link:{name, link},dropdown} = item
                                return (
                                <div key={uuid()} className='dropdown'>
                                    <Link  to={link}>{name}</Link>
                                    <div className='dropdown-content'>
                                    {
                                        dropdown.map((item)=>{
                                            const {link,name} = item
                                            return (
                                                    <Link key={uuid()} to={link}>{name}</Link>
                                            )
                                        })
                                    }
                                    </div>
                                </div>
                                )
                        })
                    }
            
                    
                </div>
            </section>

            <section className='title-box'>
                <h1>Welcome {displayName}</h1>
            </section>

            <section className='login-box'>
                <div className='login'>
                    {
                      !authenticated &&  <button onClick={()=> setShowWidget(!showWidget)}>LogIn/SignIn</button>
                    }
                    {
                       <div id='firebase-ui-auth' className='fb-login'></div>
                    }
                </div>
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
