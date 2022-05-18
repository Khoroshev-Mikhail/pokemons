import React from 'react'
import './pokemonsCart.css'

class PokemonsCart extends React.Component{
    render(){
        return <div className='pokemonsCart'>
                    <div className='pokemonsCart__name'>name</div>
                    <div className='pokemonsCart__img'>
                        <img />
                    </div>
                    <div className='pokemonsCart__button'>
                        <button>Поймать</button>
                    </div>
                </div>
    }
}
export default PokemonsCart