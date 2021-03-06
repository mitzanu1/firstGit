import React from 'react'
import actions from '../../../store/actions'
import  './interface.css'
import {colors} from './colors'

const Interface = () => {

    const colorsArr = Object.keys(colors)
    
    const addSquare = () => {
     let posY = Math.floor((Math.random()*(window.innerHeight - 350)) + 225)
     let posX = Math.floor((Math.random()*(window.innerWidth - 110)) + 10)
     let color = colorsArr[Math.floor((Math.random() * (colorsArr.length * 100))/100)]
     let textColor = colorsArr[Math.floor((Math.random() * (colorsArr.length * 100))/100)]
     const id = new Date().getTime().toString()
     actions.set(`circles.${id}`, {id,posX,posY,color,textColor})
    }
    
    const clear = () => {
        actions.delete('circles');
        actions.delete('circleProps')
    }

    return (
        <div className="interfaceLayout">
            <button className="btn" onClick={addSquare}>
                Add Circle
            </button>
            <button className="btn" onClick={clear}>
                Clear
            </button>
            <p>Cick a circle and point to move</p>
        </div>
    )
}

export default Interface
