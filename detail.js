import {capitalise} from "./capitalise.js"

const searchInput = document.getElementById('search-input')
const searchButton = document.getElementById('search-button')
const picture = document.getElementById('avatar')
const nameField = document.getElementById('name')
const card = document.getElementById('card')

const getPokemon = (num) => {
  
    fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
      .then((res) => res.json())
      .then((data) => {
        picture.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;
        nameField.innerHTML = capitalise(data.name);
      });
  };

searchButton.addEventListener("click", () => getPokemon(searchInput.value));

const urlParams = new URLSearchParams(window.location.search);
const param = urlParams.get('id');
getPokemon(param)