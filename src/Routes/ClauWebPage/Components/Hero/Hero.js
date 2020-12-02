import React, { useEffect, useState } from 'react'
import InnerWidget from '../InnerWidget/InnerWidget'
import './hero.css'

const Hero = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState()

    

 const resizedWindow = () => {
    setWidth(window.innerWidth)
    if(width > 1024) setHeight(window.innerHeight) 
    if(width <= 1024) setHeight(500)
    if(width < 768) setHeight(600)
 } 

 useEffect(()=>{
    window.addEventListener('resize', resizedWindow);
    return () => window.removeEventListener('resize', resizedWindow)
 })
 
    return (
        <div className='clau-hero' style={{width:width,height:height}}>
            <InnerWidget/>
        </div>
    )
}

export default Hero
