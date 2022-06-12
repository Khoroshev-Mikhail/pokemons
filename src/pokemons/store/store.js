const { legacy_createStore, combineReducers } = require("redux")
const ADD = "ADD"
const CATCH = 'CATCH'
const NEXT_PAGE = 'NEXT_PAGE'
const PREV_PAGE = 'PREV_PAGE'

function pokemonsReducer(state = [], action) {
    if(action.type === ADD){
        return action.value
    }
    return state
}

function catchingPokemonsReducer(state = [], action){
    if(action.type === CATCH){
        if(state.includes(action.id)){
            return state.filter(el => el !== action.id)
        } else{
            return [...state, action.id]
        }
    }
    return state
}

function currentPageReducer(state = 1, action){
    if(action.type === NEXT_PAGE){
        return state + 1
    }
    if(action.type === PREV_PAGE){
        return state - 1
    }
    return state
}

const reducer = combineReducers({
    pokemons: pokemonsReducer,
    catchingPokemons: catchingPokemonsReducer,
    currentPage: currentPageReducer,
})

const store = legacy_createStore(reducer);
store.dispatch( {type: CATCH, id: 5})
console.log(store.getState());

// combineReducers написать свою реализацию
// подключить redux (connect или хуки)
// компоненты высшего порядка
// Среда 17:30