import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {getPokemonsForPage_AC, catchOrRelease_AC, nextPage_AC, prevPage_AC} from './store/store'
import Body from "./Body";

function mapStateToProps(state){
    return {
        pokemonsOnPage: state.pokemonsOnPage,
        currentPage: state.currentPage
    }
}

// function mapDispatchToProps(){
//     return function(dispatch){
//         return {
//             getPokemonsForPage: bindActionCreators(getPokemonsForPage_AC, dispatch),
//             nextPage: bindActionCreators(nextPage_AC, dispatch),
//             prevPage: bindActionCreators(prevPage_AC, dispatch),
//         }
//     }
// }

const mapDispatchToProps = {
    getPokemonsForPage: getPokemonsForPage_AC
}
const Body_Wrapper = connect(mapStateToProps, mapDispatchToProps)(Body)
export default Body_Wrapper