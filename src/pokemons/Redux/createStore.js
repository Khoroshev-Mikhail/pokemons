function mineCreateStore(reducer){
    let state = reducer({}, {})
    return {
        getState: () => state,
        dispatch: (action) => {
            state = reducer(state, action)
        },
        subscribe: () => {} 
    }
}
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



const store = mineCreateStore(reducers)
store.dispatch({type: "INC"})
store.dispatch({type: "SEC"})
console.log(store.getState())
/*
const { createStore } = require("redux");
const store = createStore(r, 0);
const unsubscribe1 = store.subscribe(() => {
  console.log("subscribe1")
})
console.log("dispatch");
store.dispatch({ type: "INC" }) // subscribe1
const unsubscribe2 = store.subscribe(() => {
  console.log("subscribe2")
})
console.log("dispatch");
store.dispatch({ type: "INC" }) // subscribe1 subscribe2
unsubscribe1();
console.log("dispatch");
store.dispatch({ type: "INC" }) // subscribe2
*/

//Реализовать subscribe()
//Разобраться с миддлваре
//Редакс тулкит

//Воскресение 20:00