import React from 'react';
import './App.css';
import Body_Wrapper from './pokemons/Body_Wrapper';
import PokemonHeader from './pokemons/Pokemon/Pokemon_header/PokemonHeader';

class App extends React.Component {
  constructor(){
    super()
  }
  render(){
    return <div className="App">
      <PokemonHeader />
      <Body_Wrapper />
    </div>
  }
}

export default App;
