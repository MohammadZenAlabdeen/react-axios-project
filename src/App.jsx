import { createContext, useState } from 'react'
import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './Components/Home/Nav/Nav.jsx';
  import light from './assets/Logo-Light.svg';
  import dark from './assets/Logo-Dark.svg';
import Hero from './Components/Home/Hero/Hero.jsx';
import book from './assets/book.png'
import ForYou from './Components/Home/ForYou/ForYou.jsx';
import Map from './Components/Home/Map/Map.jsx';
import Footer from './Components/Home/Footer/Footer.jsx';
import Home from './Components/Home/Home.jsx';
import { Routes , BrowserRouter, HashRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Item from './Components/View/Item/Item.jsx';
function App() {

  return (
    <>
    <HashRouter>


    <Routes>
  <Route path='/react-axios-project/' element={<Home></Home>}></Route>
  <Route path='/react-axios-project/item/:id' element={<Item></Item>}></Route>
</Routes>

    </HashRouter>

</>
  )
}

export default App
