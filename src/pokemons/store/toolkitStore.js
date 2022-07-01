import { configureStore, createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getPokemons, getTotalCount } from "../Pokemon/pokemonAPI"

//Slicers
const currentPageSlicer = createSlice({
    name: 'currentPage',
    initialState: 1,
    reducers: {
        nextPage: (state) => state + 1,
        prevPage: (state) => state - 1
    }
})
export const {nextPage, prevPage} = currentPageSlicer.actions

const POKEMONS_ON_PAGE = 12;
export const getPokemonsForPageThunk = createAsyncThunk(
    'getPokemonsForPage/thunk',
    async function(page, {rejectWithValue}){
        try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${(page - 1) * POKEMONS_ON_PAGE}&limit=${POKEMONS_ON_PAGE}`)
            if(!response.ok){
                throw new Error('Server Error')
            }
            const data = await response.json()
            return data.results.map(pokemon => {
                return {id: pokemon.url.slice(34, -1), name: pokemon.name}
            })
        } catch(error){
            return rejectWithValue(error.message)
        }

    }
)
const getPokemonsForPageSlicer = createSlice({
    name: 'getPokemonsForPage',
    initialState: [],
    reducers: {
        getPokemonsForPageAC: (state, action) => action.payload.arrFromAPI
    },
    extraReducers: {
        [getPokemonsForPageThunk.fulfilled]: (state, action) => {
            return action.payload
        },
        [getPokemonsForPageThunk.rejected]: (state, action) => action.payload
    }
})
export const { getPokemonsForPageAC } = getPokemonsForPageSlicer.actions

const catchOrReleaseSlicer = createSlice({
    name: 'catchOrRelease',
    initialState: [],
    reducers: {
        catchOrReleaseAC: (state, action) => {
            if(state.includes(action.payload.id)){
                return state.filter(el => el !== action.payload.id)
            } else{
                return [...state, action.payload.id]
            }
        }
    }
})
export const { catchOrReleaseAC } = catchOrReleaseSlicer.actions

export const getTotalCountThunkToolkit = createAsyncThunk(
    'totalCountOfPokemons/getTotalCountThunkToolkit',
    async function(_, {rejectWithValue}){
        try{
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
            if(!response.ok){
                throw new Error('ServerError')
            }
            const data = await response.json()
            return data.count
        } catch(error) {
            return rejectWithValue(error.message)
        }
    }
)
const totalCountOfPokemonsSlicer = createSlice({
    name: 'totalCountOfPokemons',
    initialState: 0,
    reducers: {
        getTotalCountAC: (state, action) => {
            return action.payload.count
        }
    }, extraReducers: {
        [getTotalCountThunkToolkit.pending]: (state, action) => 'Loading',
        [getTotalCountThunkToolkit.fulfilled]: (state, action) => action.payload,
        [getTotalCountThunkToolkit.rejected]: (state, action) => action.payload,
    }
})
export const { getTotalCountAC } = totalCountOfPokemonsSlicer.actions


//Thunks
/*
export function loadPage(){
    return function (dispatch, getState){
        const {currentPage} = getState()
        getPokemons(currentPage, POKEMONS_ON_PAGE)
            .then(results => {
                dispatch(getPokemonsForPageAC({arrFromAPI: results}))
            })
    }
}
*/

/*
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
*/
//   "getTotalCountThunkToolkit/pending"
//   "getTotalCountThunkToolkit/rejected"
//   "getTotalCountThunkToolkit/fulfilled"

// https://redux-toolkit.js.org/api/createAsyncThunk

//Middlewares
const myMiddleware = storeApi => next => action => {
    const callback = (dispatch) => dispatch(getPokemonsForPageThunk(storeApi.getState().currentPage))
    const result = next(action)   
    if(action.type === nextPage.type || action.type === prevPage.type){ 
        return callback(storeApi.dispatch, storeApi.getState)
    }
    return result
}

//Store
export const store = configureStore({
    reducer: {
        pokemonsOnPage: getPokemonsForPageSlicer.reducer,
        idCatchingPokemons: catchOrReleaseSlicer.reducer,
        currentPage: currentPageSlicer.reducer,
        totalCountOfPokemons : totalCountOfPokemonsSlicer.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myMiddleware),
})