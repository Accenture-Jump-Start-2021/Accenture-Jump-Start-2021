const randomButton = document.getElementById('random-button')
randomButton.addEventListener('click', hrefFun)

export function getRandomPokemonID(max = 151){
    return Math.floor(Math.random()*Math.floor(max));   
}

 export function hrefFun() {
     debugger
    var strLink = "./detail.html?id=" + getRandomPokemonID();
    document.getElementById("random-button").setAttribute("href",strLink);
}
