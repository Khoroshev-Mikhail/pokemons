//import { connect } from "react-redux";
import { catchOrReleaseAC } from "../../store/toolkitStore";
import Pokemon from "./Pokemon";
import { myConnect } from "../../Redux/Connect";
function mapStateToProps(state, props){
    return {
        isCatching: state.idCatchingPokemons.includes(props.id),
    }
}
function mapDispatchToProps(dispatch, props){
    return {
        catchOrRelease: () => {
            dispatch(catchOrReleaseAC({id: props.id}))
        },
    }
}

const PokemonWrapper = myConnect(mapStateToProps, mapDispatchToProps)(Pokemon)
export default PokemonWrapper