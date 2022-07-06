const initialState = {
    ara: 0,
    bara: 1000
}

function r1(state = initialState.ara, action) {
  if (action.type === "INC") {
    return state + 1;
  }

  return state;
}
function r2(state = initialState.bara, action) {
    if(action.type === 'SEC'){
        return state / 2
    }

    return state
}

function combineReducers(obj){
    return function(state, action){
        let newState = {}
        for(const key in obj){
            newState[key] = obj[key](state[key], action)
        }
        return newState
    }
}
const reducers = combineReducers({
    ara: r1,
    bara: r2
})

function mineCreateStore(reducer, middleware){
    let state = reducer({}, {})
    let subscribes = []
    let store = {
        getState: () => state,
        dispatch: (action) => {
            state = reducer(state, action)
            subscribes.forEach(fn => fn(state))
        },
        subscribe: (fn) => {
            subscribes = [...subscribes, fn]
            return () => {
                subscribes = subscribes.fill(fn => fn !== fn)
            }
        }
    }
    return store
}



const store = mineCreateStore(reducers)
/*const unsubscribe1 = store.subscribe((value) => {
    console.log(value)
  })*/
//store.dispatch({type: "SEC"})
//console.log(store.getState())

//unsubscribe1()

const logger = (store) => next => action =>{
    console.log('logger(1) Action:', action)
    console.log('logger(1) State:', store.getState())
    let result = next(action)
    console.log('logger(1) Result:', store.getState())
    return result
}
const logger2 = (store) => next => action =>{
    console.log('logger(2) Action:', action)
    console.log('logger(2) State:', store.getState())
    let result = next(action)
    console.log('logger(2) Result:', store.getState())
    return result
}
function applyMiddleware(store, midlewares){
    midlewares = midlewares.reverse()
    let dispatch = store.dispatch
    midlewares.forEach(fn => {
        dispatch = fn(store)(dispatch)
    })
    return {...store, dispatch}
}
ara = applyMiddleware(store, [ logger, logger2 ])
ara.dispatch({type: "SEC"})


//Как написать в формате const store = mineCreateStore(reducers, applyMiddleware(logger1, logger2)) ??????????????????????????
//Точнее как передать в applyMiddleware - store первым параметром?

