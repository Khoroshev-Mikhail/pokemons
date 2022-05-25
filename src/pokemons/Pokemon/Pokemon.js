import React from 'react'
import './pokemon.css'

class Pokemon extends React.Component{
    // constructor(){
    //     super()
    //     this.state = {
    //         catch : false
    //     }
    // }
    // setCatch(){
    //     // https://reactjs.org/docs/react-component.html#setstate
    //     this.setState((state)=> ({catch: !state.catch})); //Всегда выполняется после
    //     this.props.changeCount(!this.state.catch)
    // }

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
export default Pokemon