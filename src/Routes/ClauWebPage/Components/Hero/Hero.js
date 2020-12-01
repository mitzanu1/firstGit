import React from 'react'
import './hero.css'

const Hero = (props) => {
 const {imgUrl} = props
    return (
        <div className='clau-hero'>
             <img src={imgUrl} alt=""/>
        </div>
    )
}

export default Hero
