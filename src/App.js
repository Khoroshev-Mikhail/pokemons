import React from 'react';
import './App.css';
import Body from './pokemons/Body'

class App extends React.Component {
  //Как указать state в функциональной компоненте?
  constructor(){
    super()
    this.appRef = React.createRef()
  }
  render(){
    return <div className="App">
      <Body appRef={this.appRef}/>
    </div>
  }
}

export default App;
