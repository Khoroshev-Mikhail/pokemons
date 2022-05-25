import React from 'react'
import './body.css'
import Pokemon from './Pokemon/Pokemon'
import PokemonsCart from './PokemonsCart/PokemonsCart'
import getPokemons from './Pokemon/pokemonAPI'

// https://pokeapi.co/api/v2/pokemon/

//const POKEMONS_ON_PAGE = 12;

class Body extends React.Component{
    constructor(){
        super()
        this.state = {
            // count : 0
            currentPage: 2,
            pokemonsOnPage: 12,
            arr: [],
            idCatchingPokemons: ["1", "2"],
        }
    }


    changeCount(id){
        this.setState(({idCatchingPokemons}) => {
            return { idCatchingPokemons : idCatchingPokemons.includes(id) ? idCatchingPokemons.filter(el => el != id) : idCatchingPokemons.concat([id]) }
        })
    }

    componentDidMount() {
      getPokemons(this.state.currentPage, this.state.pokemonsOnPage).then(results => {
        return this.setState(() => {
          return {arr : results}
        })
      })
    }


    componentDidUpdate(prevState, prevProps) {
      if (this.state.currentPage !== prevState.currentPage) {
        getPokemons(this.state.currentPage, this.state.pokemonsOnPage).then(results => {
          return this.setState(() => {
            return {arr : results}
          })
        })
      }
    }

    goBack(){
      this.setState(({currentPage}) => {
        return {currentPage: currentPage - 1}
      })
    }
    goForward(){
      this.setState(({currentPage}) => {
        return {currentPage: currentPage + 1}
      })
    }
    render(){
        return <div className='main'>
            <header className='header'> 
                <h2 className='header__topH2'>Поймано покемонов</h2>
                <h1 className='header__botH1'>{`${this.state.idCatchingPokemons.length}/${this.state.arr.length}`}</h1>
            </header>
            <div>
              <button onClick={this.goBack.bind(this)}>Назад</button>
              <button onClick={this.goForward.bind(this)}>Вперед</button>
            </div>
            <div className='pokemonsgrid'>
              {this.state.arr.map(el => {
                  return <Pokemon 
                    name = {el.name} 
                    id ={el.id} 
                    changeCount={this.changeCount.bind(this)}
                    isCatching = {this.state.idCatchingPokemons.includes(el.id)}
                    />
              })}

            </div>
        </div>
    }
}
export default Body