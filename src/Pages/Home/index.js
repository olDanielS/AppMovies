import React, {useEffect, useState} from 'react';
import api from '../../Services/api';
import './styles.css';
import { Link } from 'react-router-dom';


export default function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    async function loadFilmes(){
      const response = await api.get('/movie/popular', {
        params: {
          api_key: 'f546f32a70526f6904876b6a67f79227',
          language: 'pt-BR',
          page: 1
        }
      })
      setFilmes(response.data.results.slice(0,10))
      setLoading(true)
    }

    loadFilmes()
  }, [])
  
  if(!loading){
    return (
      <div className='loading'>
      <h1> Carregando filmes...</h1>
    </div>
      )
  }
 return (
   <div className='main'>
        <h1 className='title-page'>Filmes mais populares</h1>
        <div className='lista-filmes'>
        {
          filmes.map((item) => {
            return(
              <article className='movies' key={item.id}> 
                  <h1>{item.title}</h1>
                    <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={`${item.title}`}/>
                    <Link to={`/filmes/${item.id}`}>Acessar</Link>
              </article>
            )
          })
        }
        </div>
   </div>
 );
}