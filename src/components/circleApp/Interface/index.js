import React from 'react'
import actions from '../../../store/actions'
import  './interface.css'
import {colors} from './colors'
import uuid from 'react-uuid'

const Interface = () => {

    const colorsArr = Object.keys(colors)
    
    const addCircle = () => {
     let posY = Math.floor((Math.random()*(window.innerHeight - 350)) + 5)
     let posX = Math.floor((Math.random()*(window.innerWidth - 110)) + 10)
     let color = colorsArr[Math.floor((Math.random() * (colorsArr.length * 100))/100)]
     let textColor = colorsArr[Math.floor((Math.random() * (colorsArr.length * 100))/100)]
     const id = uuid()
     actions.set(`circles.${id}`, {id,posX,posY,color,textColor})
    }
    
    const clear = () => {
        actions.delete('circles');
        actions.delete('circleProps')
    }

    return (
        <div className="interfaceLayout">
            <button className="btn" onClick={addCircle}>
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
