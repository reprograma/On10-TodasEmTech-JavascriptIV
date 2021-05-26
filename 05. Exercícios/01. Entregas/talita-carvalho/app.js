let pokemonList = [];
let pokemonTypes = [];

async function fetchTypesAsync() {
  const response = await fetch("https://pokeapi.co/api/v2/type");
  const data = await response.json();

  pokemonTypes = data.results.map(function (type) {
    return type.name;
  });
}

async function fetchPokemonsAsync() {
  // https://borgesdn.github.io/pokedex-source/pokedex.json
  try {
    const response = await fetch(
      "https://borgesdn.github.io/pokedex-source/pokedex.json"
    );
    const pokemons = await response.json();
    pokemonList = pokemons;
  } catch (error) {
    console.error(error);
  }
}

async function getPokemonAsync(id) {
  // https://pokeapi.co/api/v2/pokemon/{id}
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await response.json();
    return pokemon;
  } catch (error) {
    console.error(error);
  }
}

function filterPokemon(name, type) {
  const filteredList = pokemonList.filter((pokemon) => {
    const searchName = new RegExp(name, "i");
    const checkName = searchName.test(pokemon.name);
    const checkType = type.length == 0 ? true : pokemon.type.includes(type);
    return checkName && checkType;
  });
  return filteredList;
}
