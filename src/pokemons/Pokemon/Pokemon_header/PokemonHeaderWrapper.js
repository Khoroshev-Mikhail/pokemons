//ДАННАЯ КОМПОНЕНТА НЕ ИСПОЛЬЗУЕТСЯ!!!
//В Body.js подключается PokemonHeader (а это WRAPPER) и используются хуки вместо connect
//import { connect } from "react-redux";
import { myConnect } from "../../Redux/Connect";
import { totalCountOfPokemons_AC } from "../../store/toolkitStore";
import PokemonHeader from "./PokemonHeader";

function mapStateToProps(state){
  return {
      countCatchingPokemons: state.idCatchingPokemons.length,
      totalCountOfPokemons: state.totalCountOfPokemons
  }
}
const mapDispatchToProps = {
  setTotalCount: totalCountOfPokemons_AC
}

//ДАННАЯ КОМПОНЕНТА НЕ ИСПОЛЬЗУЕТСЯ!!!
//В Body.js подключается PokemonHeader (а это WRAPPER) и используются хуки вместо connect
const PokemonHeaderWrapper = myConnect(mapStateToProps, mapDispatchToProps)(PokemonHeader)
export default PokemonHeaderWrapper