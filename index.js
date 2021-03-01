import "./random.js";
const table = document.getElementById("table");

/*Function for requesting a specific Pokemon
*   from the pokedex api  
*   and inserting it in the table
*/
async function getPokemonTable() {

    //Get resource json
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
    const data = await res.json();

    for (let i = 1; i <= 151;i++) {
        //Insert new Row and Cells in Table
        var row = table.insertRow(-1);
        var cellName = row.insertCell(0);
        var cellId = row.insertCell(1);

        //Insert PokeContent in Cells
        cellName.innerHTML = data.results.map((name) => name.name)[i-1];
        cellId.innerHTML = i;

        //Add EventListener to the row namecell
        cellName.addEventListener("click", function() {
            window.location.replace(`./detail.html?id=${data.results.map((name) => name.name)[i-1]}`);
            var stateobj = {};
            history.pushState(stateobj, "index", "index.html"); //index.html in die Browserhistory pushen
        });
        cellId.addEventListener("click", function() {
            window.location.replace(`./detail.html?id=${i}`);
            var stateobj = {};
            history.pushState(stateobj, "index", "index.html"); //index.html in die Browserhistory pushen
        });
    }
}

getPokemonTable();