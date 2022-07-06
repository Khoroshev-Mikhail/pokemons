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
    let store = {
        getState: () => state,
        dispatch: (action) => {
            state = reducer(state, action)
        }
    }
    return store
}

const layer1 = (storeAPI) => (next) => (action) => {
    const result = next(action)
    console.log('Layer1 is here')
    return result
} 
const layer2 = (storeAPI) => (next) => (action) => {
    const result = next(action)
    console.log('Layer2 is here')
    return result
} 

const applyMiddleware = (...middlewares) => (createStore) => (reducer, initialState) =>{
    const store = createStore(reducer, initialState);
    const { dispatch, getState } = store;
    const [layer1, layer2] = middlewares
    const enchacedDispatch = (action) => {
        const m2 = layer2(store)(dispatch)
        const m1 = layer1(store)(m2)
        return m1(action)
    }
    return {
        ...store,
        dispatch: enchacedDispatch
    }
}

const store = createStore(reducers, applyMiddleware(layer1, layer2))
console.log(store.getState())
store.dispatch({type: 'VALUE1', value: 20})