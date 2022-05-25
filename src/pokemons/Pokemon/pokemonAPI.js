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

// getPokemons().then(arr => console.log(arr)); // [{...}, {...}, ...]