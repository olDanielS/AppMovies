import React, {useEffect, useState}from 'react';
import './favoritos.css';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify';


export default function Favoritos() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const listaMovies = localStorage.getItem('@dnflix');
        setMovies(JSON.parse(listaMovies) || []);

    }, [])

    function removeMovie(id){
        let filterMovie = movies.filter((item) => {
            return (id !== item.id)
        })
        setMovies(filterMovie)
        toast.success('Removido com sucesso!')
        localStorage.setItem('@dnflix', JSON.stringify(filterMovie))
    }

   return(
    <div className='listaFilmes'>
        <h1>Favoritos</h1>
        {movies.length === 0 && <span>Você não possui nenhum filme salvo :( </span>}
        <ul>
        {
            movies.map((item) => {
                return(
                    <li key={item.id} >
                        <strong> {item.title}</strong>
                        <div>
                            <Link to={`/filmes/${item.id}`}>Ver detalhes</Link>
                            <button onClick={() => removeMovie(item.id)}>Excluir</button>
                        </div>
                    </li>
                )
            })
        }
        </ul>
    </div>
   )
}