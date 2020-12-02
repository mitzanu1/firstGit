import React from 'react'
import Footer from '../Components/Footer/Footer'
import Hero from '../Components/Hero/Hero'
import Servicii from '../Components/Servicii/Servicii'
import NavBar from '../Navbar/Navbar'
import './acasa.css'

const Acasa = () => {
    const heroImgUrl = "clau-home.jpg"
    return (
        <div className='acasa'>
        <NavBar/>
        <Hero imgUrl={heroImgUrl}/>
        <Servicii/>
        <Footer/>
        </div>
    )
}

export default Acasa
