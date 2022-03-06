import React, { useRef, useEffect} from 'react'
import { useGlobalContext } from './context'
const SearchForm = () => {
  const {setSearchTerm,searchTerm,error} = useGlobalContext();
  const search = useRef();
  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  useEffect(() => {
    search.current.focus();
  }, [])
  
  return (<form onSubmit={handleSubmit} className="search-form">
      <h2>search movies</h2>
      <input type="text" ref={search} onChange={(e)=>setSearchTerm(e.target.value) } className="form-input" value={searchTerm}/>
      <div className='error'>{error}</div>
    </form>)
}

export default SearchForm
