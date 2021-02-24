const table = document.getElementById("table")

/*Function for requesting a specific Pokemon
*   from the pokedex api  
*   and inserting it in the table
*/
async function getPokemonTable() {

    //Get resource json
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
    const data = await res.json();
    
    console.log(data);
    
    //Pokemon object
    const pokemon = {};

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
            window.location.replace(`http://127.0.0.1:5500/detail.html?id=${data.results.map((name) => name.name)[i-1]}`);
        });
        cellId.addEventListener("click", function() {
            window.location.replace(`http://127.0.0.1:5500/detail.html?id=${i}`);
        });
    

    }
}

getPokemonTable();
