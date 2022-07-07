const initialState = {
    value1: 1,
    value2: 2
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
const myCombineReducers = (obj) => {
    return function(state, action){
        let newState = {}
        for(const prop in obj){
            newState[prop] = obj[prop](state[prop], action)
        }
        return newState
    }
}
const createStore = (reducer, enchancer) => {
    if(enchancer !== undefined){
        return enchancer(createStore)(reducer)
    }
    let state = reducer({}, {})
    let store = {
        getState: () => state,
        dispatch: (action) => reducer(state, action)
    }
    return store
}
const reducer = myCombineReducers({
    value1: reducer1,
    value2: reducer2
})
const layer1 = (store) => (next) => (action) => {
    const result = next(action)
    console.log('Layer 1 is here!')
    return result
}
const layer2 = (store) => (next) => (action) => {
    const result = next(action)
    console.log('Layer 2 is here!')
    return result
}
const applyMiddleware = (...middlewares) => (createStore) => (reducer) => {
    const store = createStore(reducer)
    const {dispatch, getState} = store

    const enchacedDispatch = (action) => {
        return middlewares.reduceRight((acc, next) => next(store)(acc), dispatch)(action)
    }

    return {
        ...store,
        dispatch: enchacedDispatch
    }
}
const store = createStore(reducer, applyMiddleware(layer1, layer2))
store.dispatch({type: "VALUE1", value: 555})
