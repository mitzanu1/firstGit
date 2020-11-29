import React, {useState, useEffect} from 'react'
import './controler.css'
import { useSelector } from 'react-redux'
import actions from '../../store/actions'


const Controler = () => {

    useEffect(() => {
      actions.set('move', false)
      actions.set('right', true)  
    },[])

    const right = useSelector(()=>actions.get('right'))
    const move = useSelector(()=>actions.get('move'))
    const circle = useSelector(()=>actions.get('circleProps',{}))
    const {id,posX,posY,color} = circle
    const [i,setI] = useState(0)
    const [value,setValue] = useState(1000)
    const [toogle,setToogle] = useState(false)
    const x = actions.get(`circles.${id}.posX`)
    if (x >= window.innerWidth - 100) actions.set('right', false)
    if (x <= 0) actions.set('right', true)
    if(move){
        setTimeout(()=>{ 
            setI(i+1)
            if(right)
            actions.update(`circles.${id}.posX`,value => value + 1)
            else
            actions.update(`circles.${id}.posX`,value => value - 1)
        },value)
    }

    return (<div>
            <button className='btn' onClick={()=> setToogle(!toogle)}>Menu</button>
        { toogle &&
            <div className="controler" style={{top:100,left:window.innerWidth - 200}}>
            <h4>Circle props and control</h4>
            <button onClick={() => actions.set('move', false)}>Stop</button>
            <button onClick={() => actions.set('move', true)}>Start</button>
            <p>From left : {posX}px </p>
            <p>Fron top : {posY}px </p>
            <p>Color : {color} </p>
            <p>Id : {id}</p>
            <p>speed ( 1000 = 1sec)</p>
            <input type="number" value={value} onChange={(e) => setValue(e.target.value)}/>
        </div>
        }
    </div>
    )
}

export default Controler
