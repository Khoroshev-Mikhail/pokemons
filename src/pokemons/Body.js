import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import './body.css'
import PaginationWrapper from './Pokemon/Pagination/PaginationWrapper';
import PokemonHeader from './Pokemon/Pokemon_header/PokemonHeader';
import PokemonWrapper from './Pokemon/PokemonsPage/PokemonWrapper';
import { getPokemonsForPageThunk } from './store/toolkitStore';

export default function Body(props){
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getPokemonsForPageThunk())
  }, [])

  return (
    <div className='main'>

    <PokemonHeader />
    <PaginationWrapper />

    {props.status}
      <div className='pokemonsgrid'>
        {props.pokemons.map(el => {
            return <PokemonWrapper 
              key = {el.id}
              name = {el.name} 
              id ={el.id} 
              />
        })}
      </div>
    </div>
  )
}