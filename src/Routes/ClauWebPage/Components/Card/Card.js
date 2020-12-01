import React from 'react'
import './card.css'

const Card = (props) => {

    const {img,title,content} = props
    return (
        <div className='card'>
            <img src={img} alt=""/>
            <h3>{title}</h3>
            <article>{content}</article>
        </div>
    )
}

export default Card
