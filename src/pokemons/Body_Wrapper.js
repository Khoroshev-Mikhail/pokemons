import { connect } from "react-redux";
import {getPokemonsForPage_AC} from './store/store'
import Body from "./Body";
import { myConnect } from "./Redux/Connect";
function mapStateToProps(state){
    return {
        pokemons: state.pokemonsOnPage.data,
        status: state.pokemonsOnPage.status,
        currentPage: state.currentPage
    }
}

const mapDispatchToProps = {
    getPokemonsForPage: getPokemonsForPage_AC
}

const Body_Wrapper = myConnect(mapStateToProps, mapDispatchToProps)(Body)
export default Body_Wrapper