# Protocolo HTTP

O HTTP é um protocolo de comunicação. Através dele o cliente e o servidor conseguem se comunicar, seguindo um conjunto de regras bem definidas. Esse protocolo determina como devem ser solicitadas informações e como elas devem ser entregues.

## Requisição (_request_)

O pedido que um cliente realiza a nosso servidor. Esse pedido contém uma série de dados que são usados para descrever exatamente o que o cliente precisa. 

1. _Start Line_
    1. Verbo e Substantivos
        GET - Essa é a requisição mais comum de todas. Através dessa requisição nós pedimos a representação de um recurso: que pode ser um arquivo html, xml, json, etc.
        POST - O método POST é utilizado quando queremos criar um recurso. Quando usamos POST, os dados vão no corpo da requisição e não na URI.
        PUT - Requisita que um recurso seja "guardado" na URI fornecida. Se o recurso já existir, ele deve ser atualizado. Se não existir, pode ser criado.
        PATCH - Serve para atualizar partes de um recurso, e não o recurso todo.
        DELETE - Exclui o recurso especificado.
        Idempotência
    1. URL
    1. Versão HTTP
2. _Header_ (Conceito)
3. _Body_ (conceito)

## Resposta (_response_)

A resposta que o servidor envia ao cliente. Essa resposta pode conter os dados que realmente o cliente esperava receber ou uma resposta informando que alguma coisa deu errado.

1. _Status Line_
    1. Versão HTTP
    2. Código da Resposta (_Status Code_) 
        **1xx**: Informativas
        **2xx**: Requisição bem sucedida
        **3xx**: Necessidade de uma segunda requisição. O endereço está errado ou o recurso que você está tentando acessar está em outro endereço
        **4xx**: Erro na requisição
        **5xx**: Erro no servidor
    3. Texto da Resposta (_Status Text_)
2. _Header_ (Conceito)
3. _Body_ (Conceito)
