import { useEffect, useState, useContext } from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

export function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false)
  const { gifs, setGifs } = useContext(GifsContext)

  useEffect(
    function () {
      setLoading(true)
      // Recuperamos la keyword de local storage
      const keywordToUse =
        keyword || localStorage.getItem('lastKeyword') || 'random'
      getGifs({ keyword: keywordToUse }).then(gifs => {
        setGifs(gifs)
        setLoading(false)
        // Guardamos el keyword en local storage
        localStorage.setItem('lastKeyword', keyword)
      })
    },
    [keyword, setGifs]
  )
  return { loading, gifs }
}
