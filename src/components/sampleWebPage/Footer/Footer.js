import React from 'react'
import { Link } from 'react-router-dom'
import uuid from 'react-uuid'
import {firstRow, companie, contact} from './data'
import './footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <section className='footer'>
                <div className='footer-row logo-container'>
                    <img src="clau-logo.png" alt=""/>
                {
                    firstRow.map((ele)=> {
                        const {content} = ele
                        return <article key={uuid()}>{content}</article>
                    })
                }
                    <a className='fb-group' href="https://www.facebook.com/marketingfreedom.ro/?ref=py_c">Marketing Freedom Group</a>
                </div>

                <div className='footer-row companie'>
                    <h4>Companie</h4>
                    <ul>
                {
                    companie.map((ele)=>{
                        const {title,link} = ele
                        return <Link key={uuid()} to={link}>{title}</Link>
                    })
                }
                    </ul>
                </div>
                
                <div className='footer-row contact-container'>
                    <h4>Contact</h4>
                {
                    contact.map((ele)=>{
                        const {icon,content,link,linkDisplay} = ele
                        return <div className='contact' key={uuid()}>
                            <i className={icon}></i>
                            <a href={link} target={linkDisplay}>{content}</a>
                        </div>
                    })
                    // 
                }
                </div>
            </section>
            <p>Copiright 2020 Marketing Freedom | Powerd by Marketing freedom</p>
        </div>
    )
}

export default Footer
