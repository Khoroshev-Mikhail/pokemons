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

function mineCreateStore(reducer){
    let state = reducer({}, {})
    let subscribes = []
    return {
        getState: () => state,
        dispatch: (action) => {
            state = reducer(state, action)
            subscribes.forEach(fn => fn(state))
        },
        //subscribes: [1,2],
        subscribe: (fn) => {
            subscribes = [...subscribes, fn]
            return () => {
                subscribes = subscribes.fill(fn => fn !== fn)
            }
        }
    }
}



const store = mineCreateStore(reducers)
//store.dispatch({type: "INC"})
const unsubscribe1 = store.subscribe((value) => {
    console.log(value)
  })
store.dispatch({type: "SEC"})
store.dispatch({type: "SEC"})
store.dispatch({type: "SEC"})
unsubscribe1()
store.dispatch({type: "SEC"})


//Реализовать subscribe()
//Разобраться с миддлваре
//Редакс тулкит

//Воскресение 20:00