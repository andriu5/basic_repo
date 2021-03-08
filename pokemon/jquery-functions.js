console.log("We're using JQuery!");

var pokemones = {};
//var pokemones = [];

function sortPokemonesAscending() {
    $('#pokemones').empty();
    let numPokemones = Object.length;
    if(numPokemones === 151){
        for(let cont=1; cont<=numPokemones; cont++){
            $('#pokemones').append("<img class='imagePokemon' src='" + pokemones[cont] + "' id='" + cont + "'>");
        }
        //pokemones.sort(function(a, b){return a-b});
        //return pokemones;
    }
}

function sortPokemonesDescending() {
    $('#pokemones').empty();
    let numPokemones = Object.length;
    if(numPokemones === 151){
        for(let cont=151; cont>=1; cont--){
            $('#pokemones').append("<img class='imagePokemon' src='" + pokemones[cont] + "' id='" + cont + "'>");
        }
        //pokemones.sort(function(a, b){return b-a});
        //return pokemones;
    }
}

function drawPokemons(){
	$('#pokemones').empty();
	let dictLength = Object.keys(pokemones).length;
	if(dictLength > 145 || dictLength === 151){
		// sort pokemons
		for(let cont=1; cont<=dictLength ; cont++){
		    $('#pokemones').append("<img class='imagePokemon' src='" + pokemones[cont] + "' id='" + cont + "'>");	
		}
	}
}

$(document).ready(function() {
    //Los 151 Pokemones!
    for (let i = 1; i <= 151; i++) {
        console.log(i);
        var url = "https://pokeapi.co/api/v2/pokemon/" + i + "/";
        $.get(url, function(res) {
            console.log("res", res);
            console.log("id", res.id);
            pokemones[i] = res.sprites.front_default;
            drawPokemons();
            console.log(Object.keys(pokemones));
            //sortPokemonesAscending();
            //sortPokemonesDescending();
        }, "json");
    }
});