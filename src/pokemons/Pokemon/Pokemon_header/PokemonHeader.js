import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { totalCountOfPokemons_AC } from "../../store/store";
import { getTotalCount } from "../pokemonAPI";

//https://habr.com/ru/post/483314/

export default function PokemonHeader(){
    const dispatch = useDispatch()
    const countCatchingPokemons = useSelector(state => state.idCatchingPokemons.length);
    const totalCountOfPokemons = useSelector(state => state.totalCountOfPokemons);
    const add = () => {
        getTotalCount().then(response => {
            dispatch(totalCountOfPokemons_AC(response))
        })
    }
    function countToState(){
        dispatch(add)
    }

    //Можно ли переписать чтобы не использовать store? т.е. результат гет запроса ложить в константу внутри компоненты и её уже рендерить?
    /*useEffect(()=> {
        getTotalCount().then(response => {
            dispatch(totalCountOfPokemons_AC(response))
        })
    }, [totalCountOfPokemons])*/
    return (
        <header className='header'>
            <h2 className='header__topH2'>Поймано покемонов</h2>
            <h1 className='header__botH1'>{`${countCatchingPokemons}/${totalCountOfPokemons}`}</h1>
            <button onClick={countToState}>Count to State</button>
        </header>
    )
}