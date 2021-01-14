import React from 'react'
import actions from '../../../store/actions'
import  './circle.css'
import { useSelector } from 'react-redux'


const Circle = () => {
    const circles = useSelector(()=>actions.get('circles',{}))
    const circle = useSelector(()=>actions.get('circleProps',{}))
    const {id} = circle
    const move = (e) => {
        e.stopPropagation()
        const x = (e.screenX / window.innerWidth * 100) - 6
        const y = (e.screenY / window.innerHeight * 100) - 30
        console.log(x,y)
        if(id){
            actions.update(`circles.${id}.posX`,(value)=> value = x)  
            actions.update(`circles.${id}.posY`,(value)=> value = y )
        }
    }
    return (<div className='playground' onClick={(e)=>move(e)}>
        {
            Object.values(circles).map((ele)=>{
                const {id,posX,posY,color,textColor} = ele
                const setCircleProps = (e) => {
                    e.stopPropagation()
                    actions.set('circleProps', {id,posX,posY,color});
                }
                
                return (
                  <button key={id} className="circle" style={{left:`${posX}%`,top:`${posY}%`,background:color,color:textColor}} onClick={(e)=>setCircleProps(e)} ></button>
                )
            })
        }
        
    </div>
    )
}

export default Circle


