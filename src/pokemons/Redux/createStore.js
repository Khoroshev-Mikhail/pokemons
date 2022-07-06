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

function mineCreateStore(reducer, enhancer){
    if (enhancer !== undefined) {
        return enhancer(mineCreateStore)(reducer);
    }
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


function compose(fns) {
    return x => fns.reduceRight((acc, fn) => fn(acc), x);
}

const applyMiddleware = (...middlewares) => createStore => (reducer) => {
    const store = createStore(reducer);
    const { dispatch, getState } = store;
    const storeApi = { dispatch, getState };

    const enchancedDispatch = (action) => {
        //return middlewares.reduceRight((acc, next) => next(store)(acc), dispatch)(action)
        return middlewares.map(el => el(store))
    }

    /*const enchancedDispatch2 = (action) => {
        return middlewares.reduceRight((currentFn, middleware) => middleware(storeApi)(currentFn), dispatch)(action);
    };

    const enchancedDispatch3 = middlewares
        .reduceRight((currentFn, middleware) => middleware(storeApi)(currentFn), dispatch);

    const enchancedDispatch4 = compose(middlewares.map(m => m(storeApi)))(dispatch);

    // https://github.com/reduxjs/redux/blob/master/src/applyMiddleware.ts

    const enchancedDispatch = (action) => {
        middlewares.reverse()
        let currentFn = dispatch
        for(const middleware of middlewares){
            currentFn = middleware(storeApi)(currentFn)
        }
        return currentFn(action)
    };
    */
    return {
        ...store,
        dispatch: enchancedDispatch,
    };
}




const logger = (store) => next => action =>{
    //console.log('logger(1) Action:', action)
    //console.log('logger(1) State:', store.getState())
    let result = next(action)
    console.log('logger(1) Result:', store.getState())
    return result
}
const logger2 = (store) => next => action =>{
    //console.log('logger(2) Action:', action)
    //console.log('logger(2) State:', store.getState())
    let result = next(action)
    console.log('logger(2) Result:', store.getState())
    return result
}
// function applyMiddleware(store, midlewares){
//     midlewares = midlewares.reverse()
//     let dispatch = store.dispatch
//     midlewares.forEach(fn => {
//         dispatch = fn(store)(dispatch)
//     })
//     return {...store, dispatch}
// }
// ara = applyMiddleware(store, [ logger, logger2 ])
// ara.dispatch({type: "SEC"})


//Как написать в формате const store = mineCreateStore(reducers, applyMiddleware(logger1, logger2)) ??????????????????????????

//Точнее как передать в applyMiddleware - store первым параметром?

const store = mineCreateStore(reducers, applyMiddleware(logger, logger2))
/*const unsubscribe1 = store.subscribe((value) => {
    console.log(value)
  })*/
store.dispatch({type: "SEC"})
//console.log(store.getState())

//unsubscribe1()
