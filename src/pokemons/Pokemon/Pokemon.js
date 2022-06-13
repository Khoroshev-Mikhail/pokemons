import React from 'react'
import './pokemon.css'

export default function Pokemon(props){
    function throwId(){
        props.changeCount(props.id)
    }
    return (
        <div className='pokemon' style={ { background: props.isCatching ? 'red' : 'green'}}>
            <div className='pokemon__name'>#{props.id} {props.name}</div>
            <div className={'pokemon__img'}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}/>
            </div>
            <div className='pokemon__button'>
                <button onClick={throwId}>{props.isCatching ? 'Отпустить' : 'Поймать'}</button>
            </div>
        </div>
    )
}
