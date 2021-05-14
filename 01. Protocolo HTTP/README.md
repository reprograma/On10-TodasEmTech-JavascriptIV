# Protocolo HTTP

O HTTP é um protocolo de comunicação. Através dele o cliente e o servidor conseguem se comunicar, seguindo um conjunto de regras bem definidas. Esse protocolo determina como devem ser solicitadas informações e como elas devem ser entregues.

## Requisição (_request_)

O pedido que um cliente realiza a nosso servidor. Esse pedido contém uma série de dados que são usados para descrever exatamente o que o cliente precisa. 

1. _Start Line_
    1. Verbo e Substantivos
        GET, POST, PUT, PATCH, DELETE (_Overview_)
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

# API

API é a abreviação de Application Programming Interface, ou em português, Interface de Programação de Aplicativos. Trata-se de uma interface de comunicação e integração entre aplicações.

Cada API possui uma documentação e modo de comunicação, quais informações (headers e body) enviar para a API para conseguir ter acesso a seus dados. Algumas delas permitem que seja feita alteração de dados e não somente consulta.

## Rest

É possível também se deparar com a nomenclatura REST API. É uma abreviação para Representational State Transfer, ou em português, Transferência de Estado Representacional.

Trata-se de uma arquitetura em que uma API é construída, seguindo determinadas práticas, usando os verbos existentes do protocolo HTTP. A arquitetura REST API faz com que o consumo das APIs sejam mais intutivos e organizados.

## CORS

Quando se faz uma requisição para um recurso externo, por padrão, o cliente (navegador) bloqueia se as origens são diferentes. O servidor deve, então, permitir o acesso de origens distintas. O CORS, ou Compartilhamento de Recursos de Origem Diferente, vem como mecanismo para permitir o acesso desses recursos.

Não são todos os recursos que necessitam de CORS. Alguns exemplos:
* Requisições com XMLHttpRequest e fetch;
* Fontes web.

É importante notar que é um problema que deve ser resolvido no lado do servidor.