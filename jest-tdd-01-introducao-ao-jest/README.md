# 01 - Introdução ao JEST

## Iniciar um projeto node:

```bash

npm init

```

## Instalar o JEST:

```bash

npm install jest

```

## Instalar o autocomplete do JEST:

```bash

npm install @types/jest

```

## Criar os scripts "test" e "start" no package.json:

```bash

./package.json:

{
  "dependencies": {
    "@types/jest": "^29.5.11",
    "jest": "^29.7.0"
  },
  "name": "tdd-jest",
  "version": "1.0.0",
  "main": "app.js",
  "scripts": {
    "test": "jest",
    "start": "npx nodemon app.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}

```

### Escrevendo o primeiro teste:

```bash

./test/calculadora.test.js:

const app = require("../app.js")

// 1º PARÂMETRO O QUE O TESTE FAZ
// 2º PARÂMETRO COM A FUNÇÃO DO TESTE

test("Deve retornar o valor 10 ao somar 5 + 5", () => {
    let resultado = app.soma(5,5)
    expect(resultado).toEqual(10)
})

```

### Rodando o teste (o 1º teste deve sempre falhar):

```bash

npm run test

```

### Implementando o código:

```bash

./app.js:

module.exports = {
    soma: function(a,b){
        return a + b
    }
}

```

### Rodando o teste (o 2º teste deve passar):

```bash

npm run test

```

### Usando "describe()" para organizar os testes em categorias:

```bash
./app.js:

module.exports = {
    soma: function(a,b){
        return a + b
    },
    mult: function(a,b){
        return a * b
    }
}
```

```bash

./test/calculadora.test.js:

const app = require("../app.js")

// describe() serve para organizar os testes em categorias
describe("Operações básicas", () => {

    test("Deve retornar o valor 10 ao somar 5 + 5", () => {
        let resultado = app.soma(5,5)
        expect(resultado).toEqual(10)
    })

    test("Deve retornar o valor 10 ao multiplicar 2 por 5", () => {
        let resultado = app.mult(2,5)
        expect(resultado).toEqual(10)
    })
})

```

### Rodando o teste:

```bash

npm run test

```

<hr>

### Autor
Prof. Diego Max da Silva<br>
https://lattes.cnpq.br/4370663836049458