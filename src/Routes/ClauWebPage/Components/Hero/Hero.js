import React, { useEffect, useState } from 'react'
import InnerWidget from '../InnerWidget/InnerWidget'
import './hero.css'

const Hero = () => {
    const [width, setWidth] = useState(window.innerWidth - 17)
    const [height, setHeight] = useState()
    const heroImgUrl = "clau-home.jpg"

 const resizedWindow = () => {
    setWidth(window.innerWidth - 17)
    if(width > 1024) setHeight(window.innerHeight) 
    if(width <= 1024) setHeight(500)
    if(width < 768) setHeight(600)
 } 

 useEffect(()=>{
    window.addEventListener('resize', resizedWindow);
    return () => window.removeEventListener('resize', resizedWindow)
 })
 
    return (
        <div className='clau-hero' style={{backgroundImage:`url(${heroImgUrl})`, width:width,height:height}}>
            <InnerWidget/>
        </div>
    )
}

export default Hero
