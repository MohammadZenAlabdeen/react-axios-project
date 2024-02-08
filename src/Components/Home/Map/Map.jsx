import React from 'react'
import './Map.css'
import { useContext } from 'react'
import ThemeContext from './../../../Context.jsx'

const Map = ({title,content,button}) => {
    const t=useContext(ThemeContext); 
  return (
    
    <div className='Map' id='#newslatter'>
        <div className='text'>
            <h1 style={{color:t.theme==='light'?'black':'white'}}>
                {title}
            </h1>
            <p style={{color:t.theme==='light'?'black':'white'}}>
                {content}
            </p>
                <input placeholder='Your name' type='text'></input>
                <input placeholder='Your e-mail' type='text'></input>
                <button type='submit'>{button}</button>
            
        </div>
        <div className='location'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53228.209557487804!2d36.241610085628565!3d33.50754022141154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6dc413cc6a7%3A0x6b9f66ebd1e394f2!2sDamascus%2C%20Syria!5e0!3m2!1sen!2s!4v1705330533301!5m2!1sen!2s" style={{height:450,width:600,border:0}} ></iframe>
        </div>
    </div>
  )
}

export default Map