import { connect } from "react-redux";
import {getPokemonsForPage_AC} from './store/store'
import Body from "./Body";

function mapStateToProps(state){
    return {
        pokemonsOnPage: state.pokemonsOnPage,
        currentPage: state.currentPage
    }
}

const mapDispatchToProps = {
    getPokemonsForPage: getPokemonsForPage_AC
}
const Body_Wrapper = connect(mapStateToProps, mapDispatchToProps)(Body)
export default Body_Wrapper