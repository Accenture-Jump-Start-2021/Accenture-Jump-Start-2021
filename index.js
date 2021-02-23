const searchInput = document.getElementById('search-input')
const searchButton = document.getElementById('search-button')
let avatar = document.getElementById('avatar')
const nameField = document.getElementById('name')
const card = document.getElementById('card')

const apiUrl = 'https://pokeapi.co/api/v2/pokemon/'
const imageUrl = 'https://pokeres.bastionbot.org/images/pokemon/'

let lastSearch

async function updateCard() {
    const inputValue = searchInput.value
    if(lastSearch === inputValue) {
        return
    }
    lastSearch = inputValue
    try {
        card.classList.remove('animate__pulse')
        const response = await fetch(apiUrl + inputValue.toLowerCase()).then(response => response.json())
        const id = response.id
        const name = response.name
        const img = new Image();
        img.onload = function() { 
            card.classList.remove('hidden')
            nameField.innerText = name.charAt(0).toUpperCase() + name.slice(1)
            card.classList.add('animate__pulse')
            card.insertBefore(img, avatar)
            card.removeChild(avatar)
            avatar = img
        }
        img.src = `${imageUrl}${id}.png`;
        

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