const searchInput = document.getElementById('search-input')
const searchButton = document.getElementById('search-button')
let avatar = document.getElementById('avatar')
const nameField = document.getElementById('name')
const card = document.getElementById('card')

const apiUrl = 'https://pokeapi.co/api/v2/pokemon/'
const imageUrl = 'https://pokeres.bastionbot.org/images/pokemon/'

async function updateCard() {
    const inputValue = searchInput.value
    try {
        card.classList.remove('animate__pulse')
        const response = await fetch(apiUrl + inputValue.toLowerCase()).then(response => response.json())
        const id = response.id
        const img = new Image();
        img.onload = function() { 
            card.classList.remove('hidden')
            nameField.innerText = response.name
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