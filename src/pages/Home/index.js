import React, { useState } from 'react'
import { useLocation, Link } from 'wouter'
import ListOfGifs from '../../components/ListOfGifs'
import { useGifs } from '../../hooks/useGifs'

const POPULAR_GIFS = ['Matrix', 'Chile', 'Colombia', 'Ecuador']

export default function Home() {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()
  // Custon hook
  const { loading, gifs } = useGifs()

  function handleSubmit(e) {
    e.preventDefault()
    // Navegar a otra parte
    pushLocation(`/search/${keyword}`)
  }

  function handleChange(e) {
    setKeyword(e.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type='text'
          placeholder='Search here...'
          value={keyword}
        />
        <button>¡Buscar!</button>
      </form>
      <h3 className='App-title'>Última búsqueda</h3>
      <ListOfGifs gifs={gifs} />
      <h3 className='App-title'>Los gifs más populares</h3>
      <ul>
        {POPULAR_GIFS.map(popularGif => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
