import {capitalise} from "./capitalise.js"
const API_URL = 'https://pokeapi.co/api/v2/pokemon/'
const IMAGE_URL = 'https://pokeres.bastionbot.org/images/pokemon/'

const searchInput = document.getElementById('search-input')
const searchButton = document.getElementById('search-button')
const picture = document.getElementById('avatar')
const nameField = document.getElementById('name')
const card = document.getElementById('card')
<<<<<<< HEAD

const getPokemon = (num) => {
  
    fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
      .then((res) => res.json())
      .then((data) => {
        picture.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;
        nameField.innerHTML = data.name;
      });
  };

searchButton.addEventListener("click", () => getPokemon(searchInput.value));
=======
>>>>>>> develop
