
let pokemonList = [];
let pokemonTypes = [];

function fetchTypes() {
    const request = new XMLHttpRequest()
    request.open("GET", "https://pokeapi.co/api/v2/type", false)

    request.onload = function () {

        const data = JSON.parse(request.response)

        pokemonTypes = data.results.map(function (type) {
            return type.name
        });
    };

    request.send()
}

function fetchPokemons() {
    // https://borgesdn.github.io/pokedex-source/pokedex.json
    const request = new XMLHttpRequest()

    request.open("GET", "https://borgesdn.github.io/pokedex-source/pokedex.json", false)

    request.onload = function () {
        pokemonList = JSON.parse(request.response) 
    };

    request.send()
}

function getPokemon(id) {
    // https://pokeapi.co/api/v2/pokemon/{id}
    const request = new XMLHttpRequest();

    request.open("GET", `https://pokeapi.co/api/v2/pokemon/${id}`, false)
    let pokemon;
    request.onload = function () {
        pokemon = JSON.parse(request.response) 
    };

    request.send()
    return pokemon
};

function filterPokemon(name, type) {
    const filteredList = pokemonList.filter(pokemon => {
        const searchName = new RegExp(name, 'i');
        const checkName = searchName.test(pokemon.name);
        const checkType = type.length == 0 ? true : pokemon.type.includes(type);
        return checkName && checkType;
    })
    return filteredList;
}