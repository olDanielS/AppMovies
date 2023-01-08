import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function NotFound() {
 return (
   <div className='container'>
      <article>
        <h1>404</h1>
        <h3>Pagina Não encontrada</h3>
        <Link to='/'> Voltar a Home</Link>
      </article>
   </div>
 );
}