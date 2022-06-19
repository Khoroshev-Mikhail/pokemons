import {useSelector} from "react-redux";

export default function PokemonHeader(){
    const countCatchingPokemons = useSelector(state => state.idCatchingPokemons.length);
    const totalCountOfPokemons = useSelector(state => state.pokemonsOnPage.length);

    return (
        <header className='header'>
            <h2 className='header__topH2'>Поймано покемонов</h2>
            <h1 className='header__botH1'>{`${countCatchingPokemons}/${totalCountOfPokemons}`}</h1>
        </header>
    )
}