document.querySelectorAll(".random-pokemon-link").forEach(link => {
    link.href="./detail.html" + '?id=' + randomPokemonId()
    link.textContent = "Random Pokemen"
})


function randomPokemonId() {
    const MAX_POKEMON_ID = 151
    return Math.round(Math.random() * MAX_POKEMON_ID + 1)
}

function addStyles() {
    const css = `
    .random-pokemon-link {
        margin-bottom: 20px;
        text-decoration: none;
        padding: 10px 20px;
        background: tomato;
        color: white;
        border-radius: 100vh;
    }
    #random-pokemon-link:hover {
        transform: scale(1.1) translateY(-1px);
    }
    
    #random-pokemon-link:active {
        transform: scale(1) translateY(0);
    }
    `;
    const style = document.createElement('style');
    
    style.appendChild(document.createTextNode(css));
    
    
    document.getElementsByTagName('head')[0].appendChild(style);    
}

addStyles()