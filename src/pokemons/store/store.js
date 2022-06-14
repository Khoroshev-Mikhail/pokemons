const { legacy_createStore, combineReducers, bindActionCreators } = require("redux")

//InitialState
const initialState = {
    currentPage: 1,
    idCatchingPokemons: ['1'],
    pokemonsOnPage: []
}

//Actions
const ADD = 'ADD'
const CATCH = 'CATCH'
const NEXT_PAGE = 'NEXT_PAGE'
const PREV_PAGE = 'PREV_PAGE'

//Action creators
const nextPage_AC = () => ({type: NEXT_PAGE})
function prevPage_AC(){
    return {
        type: PREV_PAGE
    }
}
function getPokemonsForPage_AC(arrFromAPI){
    return {
        type: ADD,
        arrFromAPI: arrFromAPI
    }
}
function catchOrRelease_AC(id){
    return {
        type: CATCH,
        id: id
    }
}

//Reducers
function getPokemonsForPageReducer(state = initialState.pokemonsOnPage, action) {
    if(action.type === ADD){
        return action.arrFromAPI
    }
    return state
}
function catchOrReleaseReducer(state = initialState.idCatchingPokemons, action){
    if(action.type === CATCH){
        if(state.includes(action.id)){
            return state.filter(el => el !== action.id)
        } else{
            return [...state, action.id]
        }
    }
    return state
}
function currentPageReducer(state = initialState.currentPage, action){
    if(action.type === NEXT_PAGE){
        return state + 1
    }
    if(action.type === PREV_PAGE){
        return state - 1
    }
    return state
}

//Expected the root reducer to be a function.
function combineReducers2(obj){
    return function(state = initialState, action){
        let newState = {...state}
        for(const key in obj){
            newState = {...newState, [key]: obj[key](state[key], action)}
        }
        console.log(newState)
        return newState
    }
}

const reducer = combineReducers2({
    pokemonsOnPage: getPokemonsForPageReducer,
    idCatchingPokemons: catchOrReleaseReducer,
    currentPage: currentPageReducer,
})
export function mapStateToProps(){
    return function(state){
        return {
            pokemonsOnPage: state.pokemonsOnPage,
            idCatchingPokemons: state.idCatchingPokemons,
            currentPage: state.currentPage,
        }
    }
}

export function mapDispatchToProps(){
    return function(dispatch){
        return {
            getPokemonsForPage: bindActionCreators(getPokemonsForPage_AC, dispatch),
            catchOrRelease: bindActionCreators(catchOrRelease_AC, dispatch),
            nextPage: bindActionCreators(nextPage_AC, dispatch),
            prevPage: bindActionCreators(prevPage_AC, dispatch),
        }
    }
}

const store = legacy_createStore(reducer);
export default store
//store.dispatch( {type: CATCH, id: 5})
//console.log(store.getState());

// combineReducers написать свою реализацию
// подключить redux (connect или хуки)
// компоненты высшего порядка
// Среда 17:30