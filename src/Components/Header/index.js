import React from 'react';
import './styles.css'
import { Link } from 'react-router-dom';

export default function Header() {
 return (
   <div>
        <header>
            <Link className='logo' to='/'>DN Movies</Link>
            <Link className='menu' to='/favoritos'>Minha lista</Link>
        </header>
   </div>
 );
}