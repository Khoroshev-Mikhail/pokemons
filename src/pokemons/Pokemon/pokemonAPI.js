import axios from 'axios'

function getPokemons(page, pokemonsOnPage){
    return fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${(page - 1) * pokemonsOnPage}&limit=${pokemonsOnPage}`)
        .then(response => {
            return response.json()
        })
        .then(el => {
            return el.results.map(pokemon => {
                return {id: pokemon.url.slice(34, -1), name: pokemon.name}
            })
        })
}
export default getPokemons;

export function getTotalCount(){
    return fetch(`https://pokeapi.co/api/v2/pokemon/?offset=1&limit=12`)
        .then(response => {
            return response.json()
        })
        .then(response => {
            return response.count
        })
}
