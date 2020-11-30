import React from 'react'
import actions from '../../../store/actions'
import  './interface.css'
import {colors} from './colors'

const Interface = () => {

    const colorsArr = Object.keys(colors)
    const randomGen = (valueToRandomise,offSet) => Math.floor((Math.random()* valueToRandomise)) + offSet
    
    const addSquare = () => {
     let posY = randomGen(window.innerHeight - 400, 300)
     let posX = randomGen(window.innerWidth - 300, 100)
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
