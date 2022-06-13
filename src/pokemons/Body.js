import React, { useEffect, useState } from 'react'
import './body.css'
import Pokemon from './Pokemon/Pokemon'
import getPokemons from './Pokemon/pokemonAPI'

const POKEMONS_ON_PAGE = 12;

export default function Body(){
  const [currentPage, setCurrentPage] = useState(1)
  const [arr, setArr] = useState([])
  const [idCatchingPokemons, setIdCatchingPokemons] = useState(['1', '2'])

  function changeCount(id){
    setIdCatchingPokemons(idCatchingPokemons.includes(id) ? idCatchingPokemons.filter(el => el !== id) : idCatchingPokemons.concat([id]))
  }
  function goBack(){
    setCurrentPage(currentPage => currentPage - 1)
  }
  function goForward(){
    setCurrentPage(currentPage => currentPage + 1)
  }
  useEffect(()=>{
    getPokemons(currentPage, POKEMONS_ON_PAGE).then(results => {
      setArr(results)
    })
  }, [currentPage])
  return (
    <div className='main'>
      <header className='header'>
          <h2 className='header__topH2'>Поймано покемонов</h2>
          <h1 className='header__botH1'>{`${idCatchingPokemons.length}/${arr.length}`}</h1>
      </header>
      <div>
        <h2 className='header__topH2'>Страница: {currentPage}</h2>
        <button disabled={currentPage === 1} onClick={goBack}>Назад</button>
        <button onClick={goForward}>Вперед</button>
      </div>
      <div className='pokemonsgrid'>
        {arr.map(el => {
            return <Pokemon 
              name = {el.name} 
              id ={el.id} 
              changeCount={changeCount}
              isCatching = {idCatchingPokemons.includes(el.id)}
              />
        })}
      </div>
    </div>
  )
}