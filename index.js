const table = document.getElementById("table")

async function getAllPokemon() {
    const URL = 'https://pokeapi.co/api/v2/pokemon?limit=151'
    const pokemon = await fetch(URL).then(response => response.json())
    return pokemon
}