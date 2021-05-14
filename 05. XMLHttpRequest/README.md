# XMLHttpRequest

XMLHttpRequest (XHR) é um objeto que são usados para interagir com servidores. São usados para receber dados de uma URL sem ter que atualizar de novo a página - é criado uma requisição assíncrona.

Apesar de ter "XML" no seu nome, a requisição de `XMLHttpRequest` pode receber qualquer tipo de dado. 

É utilizado principalmente em três situações:

1. Manutenção em scripts legados;
2. Suporte a navegadores antigos;
3. Fazer algo que o fetch não faz _ainda_, ex.: upload progress.

## Sintaxe

1. Criando `XMLHttpRequest`
    ```
    let xhr = new XMLHttpRequest();
    ```

2. Inicialize o `XMLHttpRequest`:
    ```
    xhr.open(method, URL, [async, user, password])
    ```

    * `method` – Método HTPP (string)
    * `URL` – URL do recurso (string ou objeto)
    * `async` – Especifica se a requisição é síncrona (boleano) [opcional]
    * user, password – login e senha para autenticação básica [opcional]

3. Envie a requisição
    ```
    xhr.send([body])
    ```

    `body` é opcional e contém dados que serão enviados junto com a requisição
    
4. Escute os "eventos" de resposta
    Os três eventos principais de resposta são:
    * `load` – a requisição já foi concluída, independente se há erros ou não
    * `erro` – houve um erro na requisição e ela não pode ser enviada (falha de conexão ou URL inválida, por exemplo)
    * `progress` – disparado periodicamente enquanto a resposta está sendo obtida; retorna quanto da resposta já foi obtida
    
    ```
    xhr.onload = function() {
      alert(`Loaded: ${xhr.status} ${xhr.response}`);
    };
    
    xhr.onerror = function() { 
      alert(`Network Error`);
    };
    
    xhr.onprogress = function(event) {
      // event.loaded - Quanto já foi baixado
      // event.lengthComputable = true se o servidor possuir o header Content-Length
      // event.total - Total de bytes (if lengthComputablelengthComputable)
      alert(`Received ${event.loaded} of ${event.total}`);
    };
    ```
    
Uma requisição pode ser abortada a qualquer instante utilizando o método `.abort()`. Isso dispara o evento _abort_, e o status será igual a 0.

## Propriedades
`status`
Código de Status HTTP

`statusText`
Mensagem de Status HTTP

`response` (antigo responseText)
Resposta do servidor

`timeout`
Pode ser utilizada como uma propriedade "setável". E define o tempo máximo de espera pela resposta

`responseType`
Propriedade "setável" que define o formato da resposta.
* "" (default);
* "text";
* "arraybuffer";
* "blob";
* "document" (XML ou HTML);
* "json".

## ReadyState

A propriedade XMLHttpRequest.readyState retorna o estado de um XMLHttpRequest.

| Valor | Estado | Descrição |
| ----- | ------ | --------- |
| 0 | UNSENT | Um cliente foi criado. Mas o método open() não foi chamado ainda |
| 1 | OPENED | O método open() foi chamado |
| 2 | HEADERS_RECEIVED | O método send() foi chamado e os cabeçalhos e status estão disponíveis |
| 3 | LOADING | Baixando e responseText contem os dados parciais |
| 4 | DONE | Operação concluída |
