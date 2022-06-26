import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import './body.css'
import PaginationWrapper from './Pokemon/Pagination/PaginationWrapper';
import PokemonHeader from './Pokemon/Pokemon_header/PokemonHeader';
import PokemonWrapper from './Pokemon/PokemonsPage/PokemonWrapper';
//import { loadPage } from './store/store';
import { loadPage } from './store/toolkitStore';
//import PokemonHeaderWrapper from './Pokemon/Pokemon_header/PokemonHeaderWrapper';


export default function Body(props){

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(loadPage())
  }, [/*props.currentPage*/])

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