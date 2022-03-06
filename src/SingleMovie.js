import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT, useGlobalContext } from './context'

const SingleMovie = () => {
  const {loading,setLoading}  = useGlobalContext();
  const {id} = useParams();
  const url = `${API_ENDPOINT}&i=${id}`;
  const [movie,setMovie] = useState([]);
  const handleSearch = async() =>{
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }
  useEffect(()=>{
    handleSearch();
  },[id])
  if(loading){
    return <div className='loading'/>
  }
  const {Title,Year,Plot,Poster} = movie;
  return (
    <section class="single-movie">
      <img src={Poster} alt="Superman vs. The Elite" />
      <div class="single-movie-info">
        <h2>{Title}</h2>
        <p>{Plot}</p>
        <h4>{Year}</h4>
        <Link class="btn" to="/">back to movies</Link>
      </div>
    </section>
    )
}

export default SingleMovie
