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

    pokemonTypes = await fetch("https://pokeapi.co/api/v2/type")
        .then((response) => response.json())
        .then(data => {
            return data.results.map(function (type) {
                return type.name
            });
        })
        .catch(error => {
            console.error(error);
        });

    // #endregion
}

async function fetchPokemonsAsync() {
    //com await
    // const response = await fetch('https://borgesdn.github.io/pokedex-source/pokedex.json').catch(e=>console.log(e));
    // if(response && response.ok){
    //     pokemonList = await response.json(); 
    // }else{
    //     console.log('error');
    // }
    
    //com then
    pokemonList = await fetch('https://borgesdn.github.io/pokedex-source/pokedex.json')
        .then(response=>{
            if(response && response.ok){
                return response.json(); 
            }else{
                throw new Error();
            }
        })
        .then(data=>data)
        .catch(e=>console.log(e));
    // Obter pokemons e inserir o resultado na variavel pokemonList
    // Tome como exemplo a função fetchTypesAsync() na linha 5
    // Dessa vez não vamos consumir da pokeapi, utilizem o arquivo json que eu montei
    // https://borgesdn.github.io/pokedex-source/pokedex.json
}

async function getPokemonAsync(id) {

      //  com await
    // const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).catch(e=>console.log(e));
    // if(response && response.ok){
    //     pokemon = await response.json(); 
    // }else{
    //     console.log('error');
    // }
    // return pokemon;

     //com then
    pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response=>{
        if(response && response.ok){
            return response.json(); 
        }else{
            throw new Error();
        }
    })
    .then(data=>data)
    .catch(e=>console.log(e));

    return pokemon;
    // Obter pokemon pelo id
    // Tome como exemplo a função fetchTypesAsync() na linha 5
    // https://pokeapi.co/api/v2/pokemon/(id recebido no parametro)
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