import React from 'react'
import Footer from '../Components/Footer/Footer'
import Hero from '../Components/Hero/Hero'
import InnerWidget from '../Components/InnerWidget/InnerWidget'
import Servicii from '../Components/Servicii/Servicii'
import NavBar from '../Navbar/Navbar'
import './acasa.css'

const Acasa = () => {
    const heroImgUrl = "clau-home.jpg"
    return (
        <div className='acasa'>
        <NavBar/>
        <Hero imgUrl={heroImgUrl}/>
        <InnerWidget/>
        <Servicii/>
        <Footer/>
        </div>
    )
}

export default Acasa
