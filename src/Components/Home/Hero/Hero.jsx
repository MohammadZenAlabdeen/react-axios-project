
import React from 'react'
import './Hero.css'
import { useContext } from 'react'
import ThemeContext from './../../../Context.jsx'


const Hero = ({title,head,content,button,img}) => {
 const t=useContext(ThemeContext); 
  return (
    
    <section className='hero'>
                <div className='Container'>
                <div className='Text'>
                <span> 
                    {title}
                </span>
                <h1  style={{color:t.theme==='light'?'black':'white'}}>
                    {head}
                </h1>
                <p  style={{color:t.theme==='light'?'black':'white'}}>
                    {content}
                </p>
                <button>
                    {button}
                </button>
            </div>
            <div className='Img' >
                <img src={img} style={{boxShadow:t.theme==='light'?'':'8px 0px 60px 0px rgba(255, 255, 255, 0.25)'}} >
                </img>
            </div>
        </div>
    </section>
  )
}

export default Hero