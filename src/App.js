import React from 'react';
import './App.css';
import Body_Wrapper from './pokemons/Body_Wrapper';

class App extends React.Component {
  constructor(){
    super()
  }
  render(){
    return <div className="App">
      <Body_Wrapper />
    </div>
  }
}

export default App;
