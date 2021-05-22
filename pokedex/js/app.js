let pokemonList = [];
let pokemonTypes = [];

async function fetchTypesAsync() {
    

    let response = await fetch("https://pokeapi.co/api/v2/type")
    let data = await response.json()

    pokemonTypes = data.results.map(function (type) {
        return type.name
    });

    
}

async function fetchPokemonsAsync() {
    

    pokemonList = await fetch("https://borgesdn.github.io/pokedex-source/pokedex.json")
        .then((resposta) => resposta.json())
        .catch(error => { 
            console.error(error);
        });
    return pokemonList

}

async function getPokemon(id) {
    

    let pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((resposta) => resposta.json())
        .catch((error) => {
            console.log(error);
            alert("Erro ao buscar pokemon")
        })
    return pokemon
}

function filterPokemon(name, type) {
    const filteredList = pokemonList.filter(pokemon => {
        const searchName = new RegExp(name, 'i');
        const checkName = searchName.test(pokemon.name);
        const checkType = type.length == 0 ? true : pokemon.type.includes(type);
        return checkName && checkType;
    })
    return filteredList;
}