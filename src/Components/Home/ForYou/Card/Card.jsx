import React from 'react';
import { useContext } from 'react';
import ThemeContext from './../../../../Context.jsx';
import './Card.css';
import star from './../../../../assets/bi_star-fill.svg';
import book from './../../../../assets/book-open-01.svg';
import { Link } from 'react-router-dom';

const Card = ({ url, author, pages, rating, id }) => {
    const link = '/item/' + id;
    const t = useContext(ThemeContext);

    return (
        <div className='card'>
            <img src={url} id='thumbnail' alt='thumbnail' />
            <div className='info'>
                <h1 style={{ color: t.theme === 'light' ? 'black' : 'white' }}>{author}</h1>
                <div className='details'>
                    <span style={{ color: t.theme === 'light' ? 'black' : 'white' }}>
                        <img src={book} alt='book icon' />
                        {pages}
                    </span>
                    <span style={{ color: t.theme === 'light' ? 'black' : 'white' }}>
                        <img src={star} alt='star icon' />
                        {rating}
                    </span>
                </div>
            </div>
            <Link to={link} style={{ color: t.theme === 'light' ? 'white' : 'black' }}>show details</Link>
        </div>
    );
}

export default Card;