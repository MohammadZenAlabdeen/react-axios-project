
import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './Nav/Nav.jsx';
  import light from './../../assets/Logo-Light.svg';
  import dark from './../../assets/Logo-Dark.svg';
import Hero from './Hero/Hero.jsx';
import book from './../../assets/book.png'
import ForYou from './ForYou/ForYou.jsx';
import Map from './Map/Map.jsx';
import Footer from './Footer/Footer.jsx';
import { useContext , useState} from 'react';
import Context from '../../Context.jsx';
import './Home.css'

function Home() {
    const [theme,setTheme]=useState('light');
    const toggleTheme = ()=>{setTheme((curr)=>(curr==='light' ? 'dark':'light'));};
  return (

    <Context.Provider value={{theme,toggleTheme}}>
      <div id={theme}>
      <header>
      <Nav logo={theme==='light' ? light:dark} links={[{'title':'Home','route':'/'},{'title':'News','route':'/#news'},{'title':'Promotion of the mount','route':'/#promotion'},{'title':'Plublishs','route':'/#publish'},{'title':'Subscribe to the newsletter','route':'/#newsletter'}]}></Nav>
      <Hero title={'Author of august'} head={'Eric-Emanuel Schmitt '} content={'Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes and distinctions, and in 2001 he received the title of Chevalier des Arts et des Lettres. His books have been translated into over 40 languages.'} img={`${book}`} button={'View his boooks'}></Hero>
      </header>
      <ForYou>

      </ForYou>
      <Map title={'Did you know us? '} content={`We are about books and our purpose is to show you the book who can chage your life or distract you from the real world în a better one. BWorld works with the must popular publishs just for your delight. 
If you are about books, you must to subscribe to our newsletter. `} button={'subscribe'}></Map>
<Footer content={`© All copyrights are reserved. B-World 2022. `}></Footer>
      </div>
    </Context.Provider>




  )
}

export default Home