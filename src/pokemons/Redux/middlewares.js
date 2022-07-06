const initialState = {
    value1: 1,
    value2: 2
}
const reducer1 = (state = initialState.value1, action) =>{
    if(action.type === 'VALUE1'){
        return action.value
    }
    return state
}
const reducer2 = (state = initialState.value2, action) =>{
    if(action.type === 'VALUE2'){
        return action.value
    }
    return state
}
const myCombineReducers = (obj) => (state, action) => {
    let newState = {}
    for(const value in obj){
        newState[value] = obj[value](state[value], action)
    }
    return newState
}
const reducers = myCombineReducers({
    value1: reducer1,
    value2: reducer2
})
const createStore = (reducer, enhancer) => {
    if(enhancer !== undefined){
        return enhancer(createStore)(reducer)
    }
    let state = reducer({}, {})
    return {
        getState: () => state,
        dispatch: (action) => {
            state = reducer(state, action)
        }
    }
}

function applyMiddleware(...middlewares){
    return function enchacer(createStore){
        return function(reducers, initialState){
            const store = createStore(reducers, initialState)
            return store
        }
    }
}


const store = createStore(reducers)
console.log(store.getState())