import React from 'react'
import { useContext } from 'react'
import ThemeContext from './../../../Context.jsx'
import './Footer.css'
const Footer = ({content}) => {
    const t=useContext(ThemeContext); 
  return (
    <footer>
        <p style={{color:t.theme==='light'?'black':'white'}}>{content} </p>
    </footer>
  )
}

export default Footer