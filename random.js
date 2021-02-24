export function getRandomPokemonID(max = 898){
    return Math.floor(Math.random()*Math.floor(max));   
}

 export function hrefFun() {
    var strLink = "./detail.html&iD=" + getRandomPokemonID();
    document.getElementById("DetailPokemon").setAttribute("href",strLink);
}
