import React, { useEffect, useState } from 'react'
import './body.css'
import PaginationWrapper from './Pokemon/Pagination/PaginationWrapper';
import getPokemons from './Pokemon/pokemonAPI'
import PokemonHeader from './Pokemon/Pokemon_header/PokemonHeader';
import PokemonWrapper from './Pokemon/PokemonsPage/PokemonWrapper';
import PokemonHeaderWrapper from './Pokemon/Pokemon_header/PokemonHeaderWrapper';


const POKEMONS_ON_PAGE = 12;

export default function Body(props){

  useEffect(()=>{
    getPokemons(props.currentPage, POKEMONS_ON_PAGE).then(results => {
      props.getPokemonsForPage(results)
    })
  }, [props.currentPage])
  return (
    <div className='main'>
      

    <PokemonHeader />
    <PaginationWrapper />

    
      <div className='pokemonsgrid'>
        {props.pokemonsOnPage.map(el => {
            return <PokemonWrapper 
              key = {el.id}
              name = {el.name} 
              id ={el.id} 
              // changeCount={changeCount}
              // isCatching = {props.idCatchingPokemons.includes(el.id)}
              />
        })}
      </div>
    </div>
  )
}