import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './Pages/Home';
import Filmes from './Pages/Filmes';
import NotFound from './Pages/NotFound.js';
import Favoritos from './Pages/Favoritos';

import Header from './Components/Header';

export default function RoutersApp() {
 return (
   <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={ <Home/>}/>
            <Route path='/filmes/:id' element={ <Filmes/>}/>
            <Route path='/favoritos' element={ <Favoritos/>}/>
            <Route path='*' element={ <NotFound/>}/>
        </Routes>
   </BrowserRouter>
 );
}