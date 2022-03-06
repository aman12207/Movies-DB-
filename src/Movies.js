import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = () => {
  const {list,loading} = useGlobalContext();
  const {Response,Search} = list;
  if(loading){
    return <div className='loading'/>
  }
  return (
    <section className='movies'>
      {Response==='True' ? Search.map((item)=>{
        const {Poster,Title,Year,imdbID} = item;
        return (
          <Link key={imdbID} className="movie" to={`/movie/${imdbID}`}>
            <article>
              <img src={Poster==='N/A'? url : Poster} alt="Batman Begins"/>
              <div className="movie-info">
                <h4 className="title">{Title}</h4>
                  <p>{Year}</p>
              </div>
            </article>
          </Link>
        )
      }) : null}
    </section>
    )
}

export default Movies
