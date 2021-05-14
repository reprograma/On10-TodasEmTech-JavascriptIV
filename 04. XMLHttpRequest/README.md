# XMLHttpRequest

XMLHttpRequest (XHR) é um objeto que são usados para interagir com servidores. São usados para receber dados de uma URL sem ter que atualizar de novo a página - é criado uma requisição assíncrona.

Apesar de ter "XML" no seu nome, a requisição de `XMLHttpRequest` pode receber qualquer tipo de dado. 

```javascript
// cria um novo construtor XMLHttpRequest
const request = new XMLHttpRequest();
const metodo = "GET";
const url = "https://exemplo.com";

// inicializa a requisição
request.open(metodo, url, true);

// adiciona um evento para ser ativado quando o readyState mudar
request.addEventListener("readystatechange", function () {
  // verifica se a conexão foi bem sucedida
  if (request.readyState == 4 && request.status == 200) {
    // atribui a uma nova variável o JSON já transformado em objeto Javascript (através do parse())
    const data = JSON.parse(request.response);
  }
})

// envia a requisição para o servidor
request.send();
```

## ReadyState

A propriedade XMLHttpRequest.readyState retorna o estado de um XMLHttpRequest.

| Valor | Estado | Descrição |
| 0 | UNSENT | Um cliente foi criado. Mas o método open() não foi chamado ainda |
| 1 | OPENED | O método open() foi chamado |
| 2 | HEADERS_RECEIVED | O método send() foi chamado e os cabeçalhos e status estão disponíveis |
| 3 | LOADING | Baixando e responseText contem os dados parciais |
| 4 | DONE | Operação concluída |