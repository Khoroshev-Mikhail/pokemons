import { connect } from "react-redux";
import PokemonHeader from "./PokemonHeader";
function mapStateToProps(state){
  return {
      countCatchingPokemons: state.idCatchingPokemons.length,
      totalCountOfPokemons: state.pokemonsOnPage.length,
  }
}
const PokemonHeaderWrapper = connect(mapStateToProps)(PokemonHeader)
export default PokemonHeaderWrapper