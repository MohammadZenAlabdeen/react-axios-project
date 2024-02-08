import React from 'react'
import { useContext } from 'react'
import ThemeContext from './../../../../Context.jsx'
import './Card.css'
import star from './../../../../assets/bi_star-fill.svg'
import book from './../../../../assets/book-open-01.svg'
const Card = ({url,author,pages,rating,id}) => {
    const link='./item/'+`${id}`;

    const t=useContext(ThemeContext); 
  return (
    
   
            <div className='card'>
                    <img src={url} id='thumbnail'></img>
                    <div className='info'>
                        <h1 style={{color:t.theme==='light'?'black':'white'}}>{author}</h1>
                        <div className='details'><span style={{color:t.theme==='light'?'black':'white'}}><img src={book}></img>{pages}</span> <span style={{color:t.theme==='light'?'black':'white'}}><img src={star}></img>{rating}</span></div>
                    </div>
                    <a href={'https://MohammadZenAlabdeen.github.io/books-website-with-axios-and-react-hooks'+link} style={{color:t.theme==='light'?'white':'black'}}>show details</a>
                </div>

  )
}

export default Card
