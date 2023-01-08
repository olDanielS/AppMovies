import React, {useState, useEffect}from 'react';
import './movie.css';
import api from '../../Services/api';
import {useParams, useNavigate} from 'react-router-dom';

import {toast} from 'react-toastify';

export default function Filmes() {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  
  const navigate = useNavigate();
  const {id} = useParams()

  useEffect(() => {
    async function loadMovie(){
      await api.get(`/movie/${id}`, {
        params: {
          api_key: 'f546f32a70526f6904876b6a67f79227',
          language: 'pt-BR'
        }
      }).then((response) => {
        setMovie(response.data)
        setLoading(false)
      }).catch((err) => {
        navigate('/', {replace: true});
        return;
      })
    }
    loadMovie()
  }, [navigate, id])

  function favoriteMovies(){
    const minhaLista = localStorage.getItem('@dnflix');

    let listMovies = JSON.parse(minhaLista) || [];

    const hasFilme = listMovies.some((filmeSalvo) => filmeSalvo.id === movie.id);

    if(hasFilme){
      toast.warn('Esse filme já está na sua lista de favoritos');
      return;
    }else{
      listMovies.push(movie);
      localStorage.setItem('@dnflix', JSON.stringify(listMovies));
      toast.success("Filme Salvo com sucesso!")
      return
    }
  }

  {
    if(loading){
      return (
        <div className='loading'>
          <h1>Carregando...</h1>
        </div>
      )
    }
  }


 return (
   <div className='Container-movies'>
      <h1 className='movie-title'>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={`${movie.title}`}/>
      <h1> Sinopse</h1>
      <span>{movie.overview}</span><br/><br/>
      <strong>Avaliação: {movie.vote_average.toFixed(1)} / 10</strong>
      <div className='btn-area'>
          <button onClick={() => favoriteMovies()}>Salvar</button>
          <button >
            <a href={`https://www.youtube.com/results?search_query=${movie.title} trailer`} target='_blank' rel='external' >Trailer</a>
          </button>
      </div>
    </div>
 );
}