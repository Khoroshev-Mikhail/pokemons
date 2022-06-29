import { configureStore, createSlice } from "@reduxjs/toolkit"
import { createReducer, createAction } from "@reduxjs/toolkit"
import getPokemons, { getTotalCount } from "../Pokemon/pokemonAPI"

//InitialState
const initialState = {
    idCatchingPokemons: ['1'],
    pokemonsOnPage: [],
    totalCountOfPokemons: 10,
}

//Action creators

export const getPokemonsForPage_AC = createAction('ADD')
export const catchOrRelease_AC = createAction('CATCH')
export const totalCountOfPokemons_AC = createAction('TOTAL_COUNT_OF_POKEMONS')

//Reducers

const currentPageSlicer = createSlice({
    name: 'currentPage',
    initialState: 1,
    reducers: {
        nextPage: (state) => state + 1,
        prevPage: (state) => state - 1
    }
})
export const currentPageReducer = currentPageSlicer.reducer
export const {nextPage, prevPage} = currentPageSlicer.actions

console.log(">>>>", nextPage.toString());

const getPokemonsForPageReducer = createReducer(initialState.pokemonsOnPage, (builder) => {
    builder
        .addCase(getPokemonsForPage_AC, (state, action) => {
            return action.payload.arrFromAPI
        })
})

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

const totalCountOfPokemonsReducer = createReducer(initialState.totalCountOfPokemons, (builder) => {
    builder
        .addCase(getTotalCountThunkToolkit.fulfilled, (state, action) => {
            return action.payload.count
        })
        .addCase(getTotalCountThunkToolkit.fulfilled, (state, action) => {
            return action.payload.count
        })
        .addCase(getTotalCountThunkToolkit.fulfilled, (state, action) => {
            return action.payload.count
        })
})

//Thunks
const POKEMONS_ON_PAGE = 12;
export function loadPage(){
    return function (dispatch, getState){
        const {currentPage} = getState()
        getPokemons(currentPage, POKEMONS_ON_PAGE)
            .then(results => {
                dispatch(getPokemonsForPage_AC({arrFromAPI: results}))
            })
    }
}
/*
export function getTotalCountThunk(){
    return function(dispatch){
        getTotalCount()
            .then(result => {
                dispatch(totalCountOfPokemons_AC({count: result}))
            })
    }
}
*/
export const getTotalCountThunkToolkit = createAsyncThunk(
    'getTotalCountThunkToolkit',
    () => getTotalCount().then(r => r.data)
  )

//   getTotalCountThunkToolkit(123)

function createAsyncThunk(prefix, fn) {
    
    const thunk = (arg) => {
        return (dispatch, getState) => {
            dispatch({ type: `${prefix}/pending` });
            fn(arg, {dispatch, getState})
                .then((result) => {
                    dispatch({ type: `${prefix}/fulfilled`, payload: result });
                })
                .catch(() => {
                    dispatch({ type: `${prefix}/rejected` });
                })
        }
    }

    thunk.pending = `${prefix}/pending`



    return thunk;
}

//   "getTotalCountThunkToolkit/pending"
//   "getTotalCountThunkToolkit/rejected"
//   "getTotalCountThunkToolkit/fulfilled"

// https://redux-toolkit.js.org/api/createAsyncThunk

//Middlewares
const myMiddleware = storeApi => next => action => {
    const callback = (dispatch) => dispatch(loadPage())
    const result = next(action)   
    if(action.type === nextPage.type || action.type === prevPage.type){ 
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