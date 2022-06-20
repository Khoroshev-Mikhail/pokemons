//ЭТА КОМПОНЕНТА НЕ ИСПОЛЬЗУЕТСЯ
//В Body.js подключается PokemonHeader и используются хуки вместо connect

import { connect } from "react-redux";
import { totalCountOfPokemons_AC } from "../../store/store";
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

const PokemonHeaderWrapper = connect(mapStateToProps, mapDispatchToProps)(PokemonHeader)
export default PokemonHeaderWrapper