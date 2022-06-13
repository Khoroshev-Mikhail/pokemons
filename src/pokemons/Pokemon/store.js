import {legacy_createStore, combineReducers, bindActionCreators} from 'redux'


const initialState = {
    value_1: false,
    currentPage: 1,
    idCatchingPokemons: [],
    pokemonsOnPage: []
}

const ACTION_1 = "ACTION_1"
function action_creator_1(value){
    return {
        type: ACTION_1,
        value_1: value
    }
}

const NEXT_PAGE = "NEXT_PAGE"
function AC_nextPage(){
    return {
        type: NEXT_PAGE
    }
}
const PREV_PAGE = "PREV_PAGE"
function AC_prevPage(){
    return {
        type: PREV_PAGE
    }
}

const POKEMONS_ON_PAGE = "POKEMONS_ON_PAGE"
function AC_pokemonsOnPage(arrFromAPI){
    return {
        type: POKEMONS_ON_PAGE,
        arrFromAPI: arrFromAPI
    }
}

//Reducers:
function value_1(state = initialState.value_1, action){
    switch(action.type){
        case ACTION_1: return action.value_1
        default: return state
    }
}

function currentPage(state = initialState.currentPage, action){
    switch(action.type){
        case NEXT_PAGE: return state + 1
        case PREV_PAGE: return state - 1
        default: return state
    }
}

function pokemonsByAPIReducer(state = initialState.pokemonsOnPage, action){
    switch(action.type){
        case POKEMONS_ON_PAGE: return action.arrFromAPI
        default: return state
    }
}
const reducers = combineReducers({
    value_1,
    currentPage,
    pokemonsByAPI: pokemonsByAPIReducer
})

//MSTP & MDTP
export function mapStateToProps(Component){
    return function(state){
        return {
            value_1: state.value_1,
            currentPage: state.currentPage,
            pokemonsOnPage: state.pokemonsByAPI
        }
    }
}
export function mapDispatchToProps(Component){
    return function(dispatch){
        return {
            change_value_1: bindActionCreators(action_creator_1, dispatch),
            nextPage: bindActionCreators(AC_nextPage, dispatch),
            prevPage: bindActionCreators(AC_prevPage, dispatch),
            pokemonsByAPI: bindActionCreators(AC_pokemonsOnPage, dispatch)
        }  
    }
}

const store = legacy_createStore(reducers)
export default store