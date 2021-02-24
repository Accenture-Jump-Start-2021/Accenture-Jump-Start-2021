import "./random-pokemon.js"

const API_URL = 'https://pokeapi.co/api/v2/pokemon/'
const IMAGE_URL = 'https://pokeres.bastionbot.org/images/pokemon/'

const searchInput = document.getElementById('search-input')
const searchButton = document.getElementById('search-button')
const picture = document.getElementById('avatar')
const nameField = document.getElementById('name')
const card = document.getElementById('card')

searchButton.addEventListener('click', updateCard)
searchInput.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        updateCard()
    }
})

async function updateCard() {
    const idOrName = searchInput.value
    if (currentId === idOrName) {
        return
    }
    currentId = idOrName
    try {
        const { id, name } = await fetch(API_URL + idOrName.toLowerCase()).then(response => response.json())
        nameField.innerText = name.charAt(0).toUpperCase() + name.slice(1)
        picture.src = `${IMAGE_URL}${id}.png`
        card.classList.remove('hidden')
    } catch (e) {
        console.log(e)
        alert("Pokemon not found")
    }
}

let currentId
const urlParams = new URLSearchParams(window.location.search);
const param = urlParams.get('id');

if (param) {
    searchInput.value = param
    updateCard()
}

