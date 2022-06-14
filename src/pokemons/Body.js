import React, { useEffect, useState } from 'react'
import './body.css'
import Pokemon from './Pokemon/Pokemon'
import getPokemons from './Pokemon/pokemonAPI'

const POKEMONS_ON_PAGE = 12;

export default function Body(props){
  function changeCount(id){
    props.catchOrRelease(id)
  }
  useEffect(()=>{
    getPokemons(props.currentPage, POKEMONS_ON_PAGE).then(results => {
      props.getPokemonsForPage(results)
    })
  }, [props.currentPage])
  return (
    <div className='main'>
      <header className='header'>
          <h2 className='header__topH2'>Поймано покемонов</h2>
          <h1 className='header__botH1'>{`${props.idCatchingPokemons.length}/${props.pokemonsOnPage.length}`}</h1>
      </header>
      <div>
        <h2 className='header__topH2'>Страница: {props.currentPage}</h2>
        <button disabled={props.currentPage === 1} onClick={props.prevPage}>Назад</button>
        <button onClick={props.nextPage}>Вперед</button>
      </div>
      <div className='pokemonsgrid'>
        {props.pokemonsOnPage.map(el => {
            return <Pokemon 
              key = {el.id}
              name = {el.name} 
              id ={el.id} 
              changeCount={changeCount}
              isCatching = {props.idCatchingPokemons.includes(el.id)}
              />
        })}
      </div>
    </div>
  )
}