# JSON

JSON é a abreviação de JavaScript Object Notation ou Notação de Objeto Javascript. É uma sintaxe para armazenar e tranferir dados. Trata-se de uma **string** que se parece bastante com um **objeto** Javascript.

```json
[
  {
    "nome": "Kamado Tanjiro",
    "data-nascimento": "14/07",
    "estilo-respiracao": ["Respiração da Água", "Respiração do Sol"],
    "sobre": "Bom garoto",
    "nota": 10
  },
  {
    "nome": "Agatsuma Zenitsu",
    "data-nascimento": "03/09",
    "estilo-respiracao": "Respiração do Trovão",
    "sobre": "Chola mais",
    "nota": 3
  },
  {
    "nome": "Hashibira Inosuke",
    "data-nascimento": "22/04",
    "estilo-respiracao": "Respiração da Besta",
    "sobre": "Ataque suíno",
    "nota": 3
  },
  {
    "nome": "Tsuyuri Kanao",
    "data-nascimento": "19/05",
    "estilo-respiracao": "Respiração da Flor",
    "sobre": "Psico",
    "nota": 7
  },
  {
    "nome": "Shinazugawa Genya",
    "data-nascimento": "07/01",
    "estilo-respiracao": null,
    "sobre": "Metade da laranja; comedor de lixo; bom garoto",
    "nota": 8
  }
]
```

Nota-se que as propriedades, no JSON, necessariamente tem que estar entre `""`.

### JSON.parse(data)
- [JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse);

O método `JSON.parse(data)` transforma a `data` string do JSON em um objeto Javascript para ser manipulado e o retorna.

```javascript
const parsedData = JSON.parse(data);
```