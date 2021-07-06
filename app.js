let pokemonList = [];
let pokemonTypes = [];

/*Método assíncrono>>pode iniciar um processo primeiro e finalizar esse processo depois>> para obter tipos via api. Utilize o sufixo Async no fim do nome do método é um bom padrão*/
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
  // https://pokeapi.co/api/v2/pokemon/{id} >> exemplo a função fetchTypescriptAsync()
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

//Promisses vc tem mais previsibilidade detalhamento no tratamento de erros
//metodo then(()) => responsável por receber a resposta de sucesso da Promise pode ser encadeada pode compor outro then no final de outro .then anterior
