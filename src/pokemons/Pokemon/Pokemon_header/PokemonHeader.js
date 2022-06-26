import {useDispatch, useSelector} from "react-redux";
import { getTotalCountThunk } from "../../store/toolkitStore";

//https://habr.com/ru/post/483314/


export default function PokemonHeader(){
    const dispatch = useDispatch()
    const countCatchingPokemons = useSelector(state => state.idCatchingPokemons.length);
    const totalCountOfPokemons = useSelector(state => state.totalCountOfPokemons);

    function loadCount(){
        dispatch(getTotalCountThunk())
    }
    return (
        <header className='header'>
            <h2 className='header__topH2'>Поймано покемонов</h2>
            <h1 className='header__botH1'>{`${countCatchingPokemons}/${totalCountOfPokemons}`}</h1>
            <button onClick={loadCount}>Get total count of pokemons</button>
        </header>
    )
}