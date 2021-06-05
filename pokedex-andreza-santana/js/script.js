// API de CEP => https://viacep.com.br/ws/01327001/json

const cep = "01327001"

// INICIO - Usando fetch com then

fetch(`https://viacep.com.br/ws/${cep}/json`)
    .then(response => response.json())
    .then(data => console.log(data))

// FIM - Usando fetch com then

// INICIO - Usando fetch com async/await

!async function () {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json`)
    console.log('response', response)
    
    const data = await response.json()
    console.log('data', data)
}();

// FIM - Usando fetch com async/await

// INICIO - Usando XMLHttpRequest

const request = new XMLHttpRequest()
request.open("GET", `https://viacep.com.br/ws/${cep}/json`)
request.responseType = "json"

request.onload = function () {
    console.log(request)    
}

request.send()

// FIM - Usando XMLHttpRequest