const table = document.getElementById("table")
const template = document.getElementById("template");

async function getAllPokemon() {
    const URL = 'https://pokeapi.co/api/v2/pokemon?limit=151'
    const response = await fetch(URL).then(response => response.json())
    return response.results
}

async function addPokemonToTable() {
    const pokemon = await getAllPokemon()
    pokemon.forEach((pokemon, index) => {
        const clone = template.content.cloneNode(true);
        const td = clone.querySelectorAll("td");
        td[0].querySelector('a').textContent = pokemon.name;
        td[0].querySelector('a').href = './detail.html?id=' + pokemon.name;
        td[1].textContent = index + 1;
        table.appendChild(clone);
    });
}

addPokemonToTable()