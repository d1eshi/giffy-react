import React from 'react'
import './App.css'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail' // Contextos
import Pepito from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext'
import { Link, Route } from 'wouter'

export default function App() {
  return (
    <Pepito.Provider
      value={{
        name: 'd1eshi',
        paranoico: true,
      }}
    >
      <div className='App'>
        <section className='App-content'>
          <Link to='/'>
            <img className='App-logo' alt='Giffy logo' src='/logo.png' />
          </Link>
          <GifsContextProvider>
            <Route component={Home} path='/' />
            <Route component={SearchResults} path='/search/:keyword' />
            <Route component={Detail} path='/gif/:id' />
          </GifsContextProvider>
        </section>
      </div>
    </Pepito.Provider>
  )
}
