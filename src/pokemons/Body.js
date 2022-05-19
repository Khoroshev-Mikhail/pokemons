import React from 'react'
import './body.css'
import Pokemon from './Pokemon/Pokemon'
import PokemonsCart from './PokemonsCart/PokemonsCart'

const arr = [
    {
      name: "bulbasaur",
      id: "1"
    },
    {
      name: "ivysaur",
      id: "2"
    },
    {
      name: "venusaur",
      id: "3"
    },
    {
      name: "charmander",
      id: "4"
    },
    {
      name: "charmeleon",
      id: "5"
    },
    {
      name: "charizard",
      id: "6"
    },
    {
      name: "squirtle",
      id: "7"
    },
    {
      name: "wartortle",
      id: "8"
    },
    {
      name: "blastoise",
      id: "9"
    },
    {
      name: "caterpie",
      id: "10"
    },
    {
      name: "metapod",
      id: "11"
    },
    {
      name: "butterfree",
      id: "12"
    },
    {
      name: "weedle",
      id: "13"
    },
    {
      name: "kakuna",
      id: "14"
    },
    {
      name: "beedrill",
      id: "15"
    },
    {
      name: "pidgey",
      id: "16"
    },
    {
      name: "pidgeotto",
      id: "17"
    },
    {
      name: "pidgeot",
      id: "18"
    },
    {
      name: "rattata",
      id: "19"
    },
    {
      name: "raticate",
      id: "20"
    }
  ]
// Среда 17:00 или сб-вс в 11:00
// https://ru.reactjs.org/docs/forms.html
// https://sinyakov.com/frontend/react/hw/profi.png
// Сделать не через style, обращаться напрямую к DOM элементы через React
class Body extends React.Component{
    constructor(){
        super()
        this.state = {
            // count : 0
            idCatchingPokemons : ["1", "2"]
        }
    }


    changeCount(id){
        console.log('body')
        // this.setState((state) => ({count: bool ? (state.count + 1) : (state.count - 1)}))
        this.setState(({idCatchingPokemons}) => {
            return { idCatchingPokemons : idCatchingPokemons.includes(id) ? idCatchingPokemons.filter(el => el != id) : idCatchingPokemons.concat([id]) }
        })
    }

    handlerForm(event){
      event.preventDefault()
      //Обратиться к ДОМ
      console.log(event)
    }

    render(){
        return <div className='main'>
            <header className='header'> 
                <h2 className='header__topH2'>Поймано покемонов</h2>
                <h1 className='header__botH1'>{`${this.state.idCatchingPokemons.length}/${arr.length}`}</h1>
            </header>

            {/* ДЗ на воскресение */}
            <div>
              <form onSubmit={this.handlerForm}>
                <label>
                  <input type='text' value='ff00ff'></input>
                </label>
                <input type="submit" value="Отправить" />
              </form>
            </div>


            <div className='pokemonsgrid'>
              {arr.map(el => {
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