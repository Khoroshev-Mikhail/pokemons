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

class Pokemon2 extends React.Component{
    throwId(){
        this.props.changeCount(this.props.id)
    }
    render(){
        console.log("render", this);
        return <div className='pokemon' style={ { background: this.props.isCatching ? 'red' : 'green'}}>
                    <div className='pokemon__name'>#{this.props.id} {this.props.name}</div>
                    <div className={'pokemon__img'}>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`}/>
                    </div>
                    <div className='pokemon__button'>
                        <button onClick={this.throwId.bind(this)}>{this.props.isCatching ? 'Отпустить' : 'Поймать'}</button>
                    </div>
                </div>
    }
}