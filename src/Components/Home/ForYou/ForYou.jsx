
import React from 'react'
import Card from './Card/Card'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react';
import { useContext } from 'react'
import ThemeContext from './../../../Context.jsx'
import './ForYou.css'

const ForYou = () => {
    const [data, setdata] = useState([])
    const t=useContext(ThemeContext); 
    useEffect(()=>{axios.get('https://example-data.draftbit.com/books?_limit=8').then((res)=>{setdata(res.data)})},[]);

  return (
    <div className='ForYou'>
        <h1 style={{color:t.theme==='light'?'black':'white'}} id='title'>Selected For You</h1>
        <div className='Container'>{data.map(element=>{return         <Card url={element.image_url} author={element.authors} pages={element.num_pages} rating={element.rating} id={element.id}></Card> })}</div>
        


    </div>
  )
}

export default ForYou