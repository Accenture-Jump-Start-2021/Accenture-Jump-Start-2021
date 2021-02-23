// TODO Error handling

const searchInput = document.getElementById('search-input')
const searchButton = document.getElementById('search-button')
const avatar = document.getElementById('avatar')
const nameField = document.getElementById('name')

const apiUrl = 'https://pokeapi.co/api/v2/pokemon/'
const imageUrl = 'https://pokeres.bastionbot.org/images/pokemon/'

async function updateCard() {
    const inputValue = searchInput.value
    try {
        const response = await fetch(apiUrl + inputValue.toLowerCase()).then(response => response.json())
        const id = response.id
        avatar.src = `${imageUrl}${id}.png`
        nameField.innerText = response.name
    } catch (e) {
        console.log(e)
        alert("Pokemon not found")
    }
}

searchButton.addEventListener('click', updateCard)
searchInput.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        updateCard()
    }
})