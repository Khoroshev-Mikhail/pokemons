import { connect } from "react-redux";
//import { bindActionCreators } from "redux";
import { catchOrRelease_AC } from "../../store/store";
import Pokemon from "./Pokemon";

function mapStateToProps(state, props){
    return {
        isCatching: state.idCatchingPokemons.includes(props.id),
    }
}
function mapDispatchToProps(dispatch, props){
    return {
        // catchOrRelease: bindActionCreators(catchOrRelease_AC.bind(null, props.id), dispatch),
        catchOrRelease: () => dispatch(catchOrRelease_AC(props.id)),
    }
}

const PokemonWrapper = connect(mapStateToProps, mapDispatchToProps)(Pokemon)
export default PokemonWrapper