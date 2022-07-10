const initialState = {
    value1: 1,
    value2: 2,
}
const reducer1 = (state = initialState.value1, action) => {
    if(action.type === "VALUE1"){
        return action.value
    }
    return state
}
const reducer2 = (state = initialState.value2, action) => {
    if(action.type === "VALUE2"){
        return action.value
    }
    return state
}
const combineReducers = (obj) => {
    return (state, action) => {
        let newState = {}
        for(let prop in obj){
            newState[prop] = obj[prop](state[prop], action)
        }
        return newState
    }
}
const reducers = combineReducers({
    value1: reducer1,
    value2: reducer2
})

const createStore = (reducer, enchancer) => {
    if(enchancer !== undefined){
        return enchancer(createStore)(reducer)
    }
    let state = reducers({}, {})
    let store = {
        getState: () => state,
        dispatch: (action) => state = reducer(state, action)
    }
    return store
}
const layer1 = (store) => (next) => (action) => {
    console.log('Layer1 is here!')
    const result = next(action)
    return result
}
const layer2 = (store) => (next) => (action) => {
    console.log('Layer2 is here!')
    const result = next(action)
    const callback = (dispatch) => {
        dispatch({type: 'VALUE1', value : 99500})
    }
    if(action.type === 'VALUE1'){
        return callback(store.dispatch)
    }
    return result
}
const layer3 = (store) => (next) => (action) => {
    console.log('Layer3 is here!')
    const result = next(action)
    return result
}
const applyMiddleware = (...middlewares) => (createStore) => (reducers) => {
    const store = createStore(reducers)
    const { dispatch } = store

    const enchancedDispatch = (action) => {
        return middlewares.reduceRight((acc, next) => next(store)(acc), dispatch)(action)
    }

    return {
        ...store,
        dispatch: enchancedDispatch
    }
}

const store = createStore(reducers, applyMiddleware(layer1, layer2, layer3))
store.dispatch({type: "VALUE1", value: 100})
console.log(store.getState())
