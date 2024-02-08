import React, { useContext } from 'react'
import { useState } from 'react'
import ThemeContext from './../../../Context.jsx'
import moon from './../../../assets/moon-01.svg'
import sun from './../../../assets/sun.svg'
import './Nav.css'
import menu from './../../../assets/Menu.svg'
import menuOut from './../../../assets/fi-bs-cross.svg'
import PinkSwitch from './Switch/PinkSwitch.jsx'


const Nav = ({logo,links}) => {

  const t=useContext(ThemeContext);
  const [Open, setOpen] = useState(false)
  return (
    <nav>
        <img src={logo}></img>
        <ul>
            {links.map(element => {
               return <li><a style={{color:t.theme==='light'?'black':'white'}} href={'https://MohammadZenAlabdeen.github.io/books-website-with-axios-and-react-hooks'+element.route} smooth>{element.title}</a></li>
            })}
        </ul>
        <button onClick={()=>{t.toggleTheme()}} className='get'>
            <img src={t.theme==='light'?moon:sun }></img>
            <span style={{color:t.theme==='light'?'black':'white'}}>{t.theme==='light'?'Dark mode':'Light mode'}</span>
        </button>
        <button id='menu' onClick={event => {setOpen(!Open)}}>
          <img src={menu}>
          </img>
        </button>
        <div className={Open ? 'Open' : 'side'} style={{backgroundColor:t.theme==='light'?'white':'black'}}>
          <button id='menuOut' onClick={event => {setOpen(!Open)}}>
              <img src={menuOut}>
              </img>
          </button>
          <div>
          <ul>
            {links.map(element => {
               return <li><a style={{color:t.theme==='light'?'black':'white'}} href={element.route} smooth>{element.title}</a></li>
            })}
        </ul>
        <button className='getSide'  >
            <p><span style={{color:t.theme==='light'?'black':'white'}}>{t.theme==='light'?'Light mode':'Dark mode'}</span> <div onClick={()=>{t.toggleTheme()}}><PinkSwitch  ></PinkSwitch></div></p>
        </button>
          </div>

        </div>
    </nav>
  )
}

export default Nav
