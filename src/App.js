import React from 'react';
import './App.css';
import Body from './pokemons/Body'

class App extends React.Component {
  //Как указать state в функциональной компоненте?
  constructor(){
    super()
    //Указать здесь реф и передать в Body
    this.state = {
      bg : 'none'
    }
  }
  render(){
    return <div className="App" style={{background : this.state.bg}}>
      <Body />
    </div>
  }
}

export default App;
