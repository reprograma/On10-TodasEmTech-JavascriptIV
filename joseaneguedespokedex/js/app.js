let pokemonList = [];
let pokemonTypes = [];

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

//Primeiro trecho de codigo aqui 
async function fetchPokemonsAsync() {
    try {
        let response = await fetch('https://borgesdn.github.io/pokedex-source/pokedex.json')
        pokemonList = await response.json()
        console.log(response);
    } catch (err) {
        console.log("Erro:", err);
    }
}

//Consumindo promise através de async/await Syntax! 
//O Async/Await é uma forma alternativa para a execução de Promises.
/* Fontes:
Syntactic sugar in JavaScript can help us write concise code: https://sophiali.dev/syntactic-sugar-examples-javascript
https://www.youtube.com/watch?v=Z5D_Jj6JStw
https://www.youtube.com/watch?v=aBuRnuaatnU
https://dmitripavlutin.com/javascript-async-await/
https://qastack.com.br/programming/34401389/what-is-the-difference-between-javascript-promises-and-async-await
https://blog.rocketseat.com.br/quando-utililzar-promises-e-async-await-no-useeffect-do-react/
https://blog.rocketseat.com.br/javascript-assincrono-async-await/ 
*/
//Instruções:
// Obter pokemons e inserir o resultado na variavel pokemonList
// Tome como exemplo a função fetchTypesAsync() na linha 5
// Dessa vez não vamos consumir da pokeapi, utilizem o arquivo json que eu montei
// https://borgesdn.github.io/pokedex-source/pokedex.json

//Tentativas:
/*   pokemonList = await fetch("https://borgesdn.github.io/pokedex-source/pokedex.json")
        .then((response) => response.json())
        .catch(error => { 
            console.error(error);
        });
    return pokemonList
 */



//Segundo trecho de codigo aqui
async function getPokemon(id) {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + id).catch(err => {
        console.error(error);
    });
    if (response && response.ok) {
        const data = await response.json()
        return data
    } else {
        alert("ERROR! pokemon não localizado!")
    }
    return response

}

//Instruções:
// Obter pokemon pelo id
// Tome como exemplo a função fetchTypesAsync() na linha 5
/*  // Consumir da pokeapi, utilizem o arquivo json que eu montei retirar essa linha */
// https://pokeapi.co/api/v2/pokemon/ (id recebido no parametro)

//Tentativas: 
/*   document.getElementById("filter-type").innerHTML = "Carregando...";
  const response = await fetch ('https://pokeapi.co/api/v2/pokemon/');
  const data = await response.json();
      return getPokemon */

function filterPokemon(name, type) {
    const filteredList = pokemonList.filter(pokemon => {
        const searchName = new RegExp(name, 'i');
        const checkName = searchName.test(pokemon.name);
        const checkType = type.length == 0 ? true : pokemon.type.includes(type);
        return checkName && checkType;
    })
    return filteredList;
}