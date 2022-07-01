import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/'
})
export function getPokemons(page, pokemonsOnPage){
    return instance.get(`?offset=${(page - 1) * pokemonsOnPage}&limit=${pokemonsOnPage}`)
        .then(response => {
            return response.data
        })
        .then(el => {
            return el.results.map(pokemon => {
                return {id: pokemon.url.slice(34, -1), name: pokemon.name}
            })
        })
}

export function getTotalCount(){
    return instance.get()
        .then(response => {
            return response.data.count
        })
}
