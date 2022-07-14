import { createContext, useState, useEffect } from "react";

import { useContext } from "react";
export const ReduxContext = createContext();

export function Provider({ store, children }) {
  return (
    <ReduxContext.Provider value={store}>
      {children}
    </ReduxContext.Provider>
  );
}

export const useDispatch = () => {
  const store = useContext(ReduxContext)

  return store.dispatch;
}
//const totalCountOfPokemons = useSelector((state) => {
//  return state.totalCountOfPokemons
//});
export const useSelector = (fn) => {
    //Подписаться на изменения стора ДЗ
    const store = useContext(ReduxContext)
    const [state, setState] = useState(store.getState())
    useEffect(()=>{    
      return store.subscribe(()=>{
        setState(store.getState())
      })
    }, [fn(state)])
    return fn(state)
}

export const myConnect = (mstp, mdtp) => (Component) => {
    if(mdtp == undefined){
        mdtp = {}
    }
    if(mstp == undefined){
        mstp = () => ({})
    }
    if(typeof mdtp === 'object'){
      let newMdtp = (dispatch) => {
          let obj = {}
          for(const key in mdtp){
              obj[key] = (...args) => dispatch(mdtp[key](...args))
          }
          return obj
      }
      mdtp = newMdtp
    }

    return function(props) {
      const store = useContext(ReduxContext)
      const [state, setState] = useState(mstp(store.getState(), props));

      useEffect(() => {
        return store.subscribe(() => {
          setState(mstp(store.getState(), props));
        });
      }, [props]);
      
      let dispatches = mdtp(store.dispatch, props)
      let myProps = {...props, ...state, ...dispatches}
      return <Component {...myProps} />
    }
}
