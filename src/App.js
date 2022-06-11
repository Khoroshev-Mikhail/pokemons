import React from 'react';
import './App.css';
import Body from './pokemons/Body'
import Form from './Form/Form';
import Menu from './Menu/Menu'

class App extends React.Component {
  constructor(){
    super()
  }
  render(){
    return <div className="App">
      <Body />
    </div>
  }
}

export default App;
