import React from 'react'
import Card from '../Card/Card'
import './servicii.css'
import {data} from './data'



const Servicii = () => {

    return (
        <div className="clau-servicii">
            <h1>Serviciile noastre</h1>
            <p>Mai jos gasesti o lista cu ceea ce noi oferim</p>
            <div className='clau-servicii-list'>
           {
               data.map((ele)=>{
                   const {id,img,title,content} = ele
                   return <Card key={id} img={img} title={title} content={content}/> 
                })              
            }
            </div>
        </div>
    )
}

export default Servicii
