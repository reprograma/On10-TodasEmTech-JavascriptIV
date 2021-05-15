# fetch

JavaScript pode enviar solicitações de rede ao servidor e carregar novas informações sempre que necessário.

Existe um termo genérico "AJAX" (abreviado Asynchronous JavaScript And XML) para solicitações de rede de JavaScript. Porém, não precisamos usar XML: o termo vem dos velhos tempos, é por isso que essa palavra existe. Você já deve ter ouvido esse termo.

Existem várias maneiras de enviar uma solicitação de rede e obter informações do servidor.

## Sintaxe

```
let promise = fetch(url, [options])
```

* `url` – url de acesso
* `options` – parâmetros opcionais: métodos, headers

A resposta de uma requisição vem em duas etapas:

**Primeiro**, _the promise_, retorna um objeto que nos permite verificar o status do HTTP, para ver se foi bem-sucedido ou não, verificar os cabeçalhos, mas ainda não temos o conteúdo da resposta.

A promessa será rejeitada se a busca não for capaz de fazer uma solicitação HTTP, por exemplo, problemas de rede, ou não existe tal site. Status de HTTP como 404 ou 500, não causam erro.

Propriedades de resposta:
* `status` - código de status HTTP
* `ok` - booleano, verdadeiro se o código de status HTTP for 200-299.

```
let response = await fetch(url);

if (response.ok) {
  // seu código aqui
} else {
  alert("HTTP-Error: " + response.status);
}
```

**Em segundo lugar**, para obter o corpo da resposta, precisamos usar uma chamada de método adicional.

A resposta fornece vários métodos para acessar o corpo em vários formatos:

* `response.text()` - retorna a resposta como texto;
* `response.json()` - retorna a resposta como JSON;
* `response.formData()` - retorna a resposta como objeto FormData (formulário);
* `response.blob()` - retorna a resposta como Blob (dados binários com tipo);
* `response.arrayBuffer()` - retorna a resposta como ArrayBuffer (representação de baixo nível de dados binários);
* `response.body()` - é um objeto ReadableStream, ele permite que você leia o corpo pedaço por pedaço

```
let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
let response = await fetch(url);

let commits = await response.json();

alert(commits[0].author.login);
```

## Promises

Frequentemente temos a seguinte situação na programação:

Um “código de produção” que faz algo e leva tempo. Por exemplo, algum código que carrega os dados em uma rede.
Um "código de consumo" que deseja o resultado do "código de produção" assim que estiver pronto. Muitas funções podem precisar desse resultado. 
Uma promessa é um objeto JavaScript especial que vincula o “código de produção” e o “código de consumo”. O "código de produção" leva o tempo que for necessário para produzir o resultado prometido, e a "promessa" torna esse resultado disponível para todos os códigos assinados quando estiver pronto.

```
let promise = new Promise(function(resolve, reject) {
  // ecódigo
});
```

### then

```
promise.then(
  function(result) { /* handle a successful result */ },
  function(error) { /* handle an error */ }
);
```

O primeiro argumento de `.then` é uma função executada quando a promessa é resolvida e recebe o resultado.

O segundo argumento de `.then` é uma função executada quando a promessa é rejeitada e recebe o erro.

```
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

promise.then(
  result => alert(result), // shows "done!" after 1 second
  error => alert(error) // doesn't run
);
```

```
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

promise.then(
  result => alert(result), // doesn't run
  error => alert(error) // shows "Error: Whoops!" after 1 second
);
```

```
let promise = new Promise(resolve => {
  setTimeout(() => resolve("done!"), 1000);
});

promise.then(alert);
```

##  Async/await

A palavra `async` antes de uma função significa uma coisa simples: uma função sempre retorna uma promessa. Outros valores são incluídos em uma promessa resolvida automaticamente.

```
async function f() {
  return 1;
}
```

A palavra-chave `await` faz com que o JavaScript espere até que a promessa seja estabelecida e retorne seu resultado.

```
f().then(alert);
//ou
const result = await f()
alert(result)
```
