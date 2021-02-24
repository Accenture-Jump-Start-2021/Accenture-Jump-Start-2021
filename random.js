export function getRandomPokemonID(max){
    return Math.floor(Math.random()*Math.floor(max));
}

console.log(getRandomPokemonID(898));