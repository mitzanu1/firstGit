import React from 'react'
import Footer from '../../components/sampleWebPage/Footer/Footer'
import Hero from '../../components/sampleWebPage/Hero/Hero'
import Servicii from '../../components/sampleWebPage/Servicii/Servicii'
import NavBar from '../../components/sampleWebPage/Navbar/Navbar'
import './acasa.css'

const Acasa = () => {
    
    return (
        <div className='acasa'>
        <NavBar/>
        <Hero/>
        <Servicii/>
        <Footer/>
        </div>
    )
}

export default Acasa
