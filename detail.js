import {capitalise} from "./capitalise.js"
const API_URL = 'https://pokeapi.co/api/v2/pokemon/'
const IMAGE_URL = 'https://pokeres.bastionbot.org/images/pokemon/'

const searchInput = document.getElementById('search-input')
const searchButton = document.getElementById('search-button')
const picture = document.getElementById('avatar')
const nameField = document.getElementById('name')
const card = document.getElementById('card')
