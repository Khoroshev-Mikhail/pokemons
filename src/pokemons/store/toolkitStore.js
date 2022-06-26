// import thunk from 'redux-thunk'
import { configureStore } from "@reduxjs/toolkit"
import { createReducer, createAction } from "@reduxjs/toolkit"
import getPokemons, { getTotalCount } from "../Pokemon/pokemonAPI"

//InitialState
const initialState = {
    currentPage: 1,
    idCatchingPokemons: ['1'],
    pokemonsOnPage: [],
    totalCountOfPokemons: 10,
}
//Actions
const ADD = 'ADD'

//Action creators
//export const nextPage_AC = () => ({type: NEXT_PAGE})
export const nextPage_AC = createAction('NEXT_PAGE')
export const prevPage_AC = createAction('PREV_PAGE')
export function getPokemonsForPage_AC(arrFromAPI){
    return {
        type: ADD,
        arrFromAPI: arrFromAPI
    }
}

export const catchOrRelease_AC = createAction('CATCH')
export const totalCountOfPokemons_AC = createAction('TOTAL_COUNT_OF_POKEMONS')

//Reducers
function getPokemonsForPageReducer(state = initialState.pokemonsOnPage, action) {
    if(action.type === ADD){
        return action.arrFromAPI
    }
    return state
}
const catchOrReleaseReducer = createReducer(initialState.idCatchingPokemons, (builder) => {
    builder
        .addCase(catchOrRelease_AC, (state, action) => {
            if(state.includes(action.payload.id)){
                return state.filter(el => el !== action.payload.id)
            } else{
                return [...state, action.payload.id]
            }
        })
})

const currentPageReducer = createReducer(initialState.currentPage, (builder) => {
    builder
        .addCase(nextPage_AC, (state) => {
            return state + 1
        })
        .addCase(prevPage_AC, (state) => {
            return state - 1
        })
})

const totalCountOfPokemonsReducer = createReducer(initialState.totalCountOfPokemons, (builder) => {
    builder
        .addCase(totalCountOfPokemons_AC, (state, action) => {
            return action.payload.count
        })
})


const POKEMONS_ON_PAGE = 12;
//Thunks
export function loadPage(){
    return function (dispatch, getState){
        const {currentPage} = getState()
        getPokemons(currentPage, POKEMONS_ON_PAGE)
            .then(results => {
                dispatch(getPokemonsForPage_AC(results))
            })
    }
}
export function getTotalCountThunk(){
    return function(dispatch){
        getTotalCount()
            .then(result => {
                dispatch(totalCountOfPokemons_AC({count: result}))
            })
    }
}

//Middlewares
const myMiddleware = storeApi => next => action => {
    const callback = (dispatch) => dispatch(loadPage())
    const result = next(action)   
    if(action.type === nextPage_AC.type || action.type === prevPage_AC.type){ 
        return callback(storeApi.dispatch, storeApi.getState)
    }
    return result
}

//Store
export const store = configureStore({
    reducer: {
        pokemonsOnPage: getPokemonsForPageReducer,
        idCatchingPokemons: catchOrReleaseReducer,
        currentPage: currentPageReducer,
        totalCountOfPokemons : totalCountOfPokemonsReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myMiddleware),
})
