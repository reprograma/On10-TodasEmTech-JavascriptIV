let pokemonList = [];
let pokemonTypes = []

// Método assíncrono para obter tipos via api. Utilize o sufixo Async no fim do nome do método é um bom padrão
async function fetchTypesAsync() {
    // #region Utilizando await

    /* 
        Cada linha é aguarda pela resposta da requisição que é feita nela. Menos código, mais legível.
        Linha 14: Aguarda resposta do servidor
        Linha 15: Aguarda conversão da resposta do servidor (Os dados mesmo)
    */

    const response = await fetch("https://pokeapi.co/api/v2/type")
    const data = await response.json()

    pokemonTypes = data.results.map(function (type) {
        return type.name
    });

    // #endregion

    // #region Utilizando then
    /*        
        Código onde cada then depende diretamente do outro. Mais código, menos legível.
        Em sala fizemos assim, com a diferença que aqui estamos adicionando os dados obtidos numa váriavel
        Linha 33: Aguarda resposta do servidor e inicia a conversão em json
        Linha 34: Aguarda dados já convertidos
        Linha 39: Mostra algum erro
    */

    // pokemonTypes = await fetch("https://pokeapi.co/api/v2/type")
    //     .then((response) => response.json())
    //     .then(data => {
    //         return data.results.map(function (type) {
    //             return type.name
    //         });
    //     })
    //     .catch(error => {
    //         console.error(error);
    //     });

    // #endregion
}

async function fetchPokemonsAsync() {
    // Obter pokemons e inserir o resultado na variavel pokemonList
    // Tome como exemplo a função fetchTypesAsync() na linha 5
    // Dessa vez não vamos consumir da pokeapi, utilizem o arquivo json que eu montei
    // https://borgesdn.github.io/pokedex-source/pokedex.json


    /*fetch("https://borgesdn.github.io/pokedex-source/pokedex.json")
        .then((resposta) => {
                console.log(resposta)
                return resposta.json()
        })
        .then((resposta) => {
            pokemonList = resposta
        })
        .catch(error => {
            console.error(error);
        });*/


    const resposta = await fetch("https://borgesdn.github.io/pokedex-source/pokedex.json")
    pokemonList = await resposta.json()

        
}

async function getPokemon(id) {
    // Obter pokemon pelo id
    // Tome como exemplo a função fetchTypesAsync() na linha 5
    // Consumir da pokeapi, utilizem o arquivo json que eu montei
    // https://pokeapi.co/api/v2/pokemon/(id recebido no parametro)

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).catch(error => {console.error(error);});
    if (response && response.ok){
        const data = await response.json()
        return data
    } else {
        alert("Erro ao buscar pokemon")
    }
    
    /*let pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((resposta) => {
            resposta.json()
        })
        .then((resposta) => {
            pokemon = resposta
        })
        .catch(error => {
            console.error(error);
        });

        return pokemon*/


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
