import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react';
import { useContext } from 'react'
import ThemeContext from './../../../Context'
import { useParams } from 'react-router-dom';
import Nav from '../../Home/Nav/Nav';
import Footer from '../../Home/Footer/Footer';
import light from './../../../assets/Logo-Light.svg'
import dark from './../../../assets/Logo-Dark.svg'
import plus from './../../../assets/plus.svg'
import minus from './../../../assets/minus.svg'
import MinusDark from './../../../assets/minus-dark.svg'
import PlusDark from './../../../assets/plus-dark.svg'
import './Item.css'
import { formControlClasses } from '@mui/material';

const Item = ({params}) => {
    console.log('hi')
    let info = useParams();
    const [data, setdata] = useState([])
    const [theme,setTheme]=useState('light');
    const toggleTheme = ()=>{setTheme((curr)=>(curr==='light' ? 'dark':'light'));};
    useEffect(()=>{axios.get(`https://example-data.draftbit.com/books/${info.id}`).then((res)=>{setdata(res.data)})},[]);
    const [count,setCount]=useState(1);
    console.log(count)
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
     
    <div id={theme}>
    <Nav logo={theme==='light' ? light:dark} links={[{'title':'Home','route':'/'},{'title':'News','route':'/#news'},{'title':'Promotion of the mount','route':'/#promotion'},{'title':'Plublishs','route':'/#publish'},{'title':'Subscribe to the newsletter','route':'/#newsletter'}]}></Nav>
        <div className='Item'> <div className='Img'>
            <img src={data.image_url}></img>
        </div>
        <div className='Details'>
            <div id='Info'>
            <h1 style={{color:theme==='light'?'black':'white'}} id='title'>{data.title}</h1>
            <span style={{color:theme==='light'?'black':'white'}} id='author'>{data.authors}</span>
            </div>
            <h2 style={{color:theme==='light'?'black':'white'}} id='about'>
                About the book:
            </h2>
            <p style={{color:theme==='light'?'black':'white'}} id='desc'>
                {data.description}
            </p>
            <div className='count'>
                <img src={theme==='light'? minus:MinusDark} onClick={()=>{count>1? setCount(count-1):setCount(1)}}></img>
                <span>{count}</span>
                <img src={theme==='light'?plus:PlusDark} onClick={()=>{setCount(count+1)}}></img>
            </div>
            <div className='ButtonContainer'>
                <button id='add'>Add to cart</button>
                <button id='fav'>Favorite</button>
            </div>
            <div className='ratings'>
                <p><span className='numslabels'>Pages Number:</span> <span className='nums' style={{color:theme==='light'?'black':'white'}}>{data.num_pages} Pages</span></p>
                <p><span className='numslabels'>Rating Count:</span> <span  className='nums' style={{color:theme==='light'?'black':'white'}}>{data.rating_count}</span></p>
                <p><span className='numslabels'>Reviews:</span> <span  className='nums' style={{color:theme==='light'?'black':'white'}}>{data.review_count}</span></p>
            </div>
        </div>
    </div>
       
    <Footer content={`© All copyrights are reserved. B-World 2022. `}></Footer>
    </div>
    </ThemeContext.Provider>
  )
}

export default Item