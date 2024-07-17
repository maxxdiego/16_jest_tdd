# Introdução a TDD com o JEST

![NPM](https://img.shields.io/npm/l/react)

:warning: Ainda em construção. :construction:

## Introdução:

Desenvolvimento Guiado por Testes:

O desenvolvimento guiado por testes é um dos temas mais importantes para ser aprendido por um desenvolvedor profissional. 

Ao se trabalhar com o desenvolvimento guiado por testes (TDD), a tendência é que a qualidade do sistema aumente consequentemente.

## Tipos de testes automatizados

### Testes de unidade (ou teste unitário): 

Verifica individualmente as menores partes testáveis de uma aplicação, conhecidas como unidades. Essas unidades podem ser funções, métodos, classes ou procedimentos dentro de um programa. O objetivo principal dos testes de unidade é garantir que cada unidade de código funcione corretamente isoladamente.

### Testes de integração: 

Verifica a interação entre diferentes módulos ou componentes de um sistema para garantir que eles funcionem corretamente em conjunto. Ao contrário dos testes de unidade, que testam partes isoladas do código, os testes de integração focam em como essas partes interagem entre si.

### Testes de Sistema (End-to-End): 

Verifica a funcionalidade completa do sistema, desde o início até o fim, garantindo que todos os componentes e fluxos de trabalho funcionem como esperado em um ambiente que simula as condições reais de uso. Esses testes cobrem o sistema de uma perspectiva do usuário final, validando que todos os processos e integrações estão funcionando corretamente.

### Test Driven Development - TDD:

TDD é uma prática de desenvolvimento de software onde os testes são escritos antes do código funcional. Em resumo, funciona assim:

* Escreva um teste: Antes de implementar uma nova funcionalidade, escreva um teste que falhe, pois a funcionalidade ainda não existe.

* Implemente o código: Escreva o código necessário para passar no teste.

* Refatore: Melhore o código, mantendo os testes passando. 
Esse ciclo se repete para cada pequena funcionalidade, garantindo que o código seja continuamente testado e melhorado.

### Testes no Javascript com JEST

Jest é uma ferramenta de teste de JavaScript. Em termos simples, ele é usado para escrever e executar testes automatizados em aplicações JavaScript, especialmente em projetos que utilizam bibliotecas e frameworks como React e Express. 

O Jest ajuda a garantir que o código funcione conforme esperado, facilitando a detecção de erros durante o desenvolvimento.

### Iniciando um projeto Node.js e instalando o JEST

Para iniciarmos um projeto Javascript e utilizarmos o JEST utilizaremos o Node.js que é um interpretador de código que faz o Javascript funcionar fora do navegador.

## Iniciar um projeto node:

- No terminal do VS Code para iniciarmos um novo projeto iniciamos utilizando o comando:

```bash

npm init

```

## Instalar o JEST:

- Após isso, instalamos o JEST com o comando:

```bash

npm install jest

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

## Instalar o autocomplete do JEST:

```bash

npm install @types/jest

```

## Como escrever os testes?

### Utilizando a palavra reservada "test" :

```bash

test("Deve fazer algo quando receber Y", () => {})

test("Deve cadastrar um usuário quando receber um e-mail X", () => {})

```

### Utilizando a palavra reservada "it":

```bash

it("Should do something...", () => {})

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

### Vantagens do TDD:

- Qualidade do Código: Aumenta a qualidade do código, promovendo design mais limpo e modular.

- Detecção de Erros: Facilita a detecção de erros logo no início do desenvolvimento.

- Manutenção: Código mais fácil de manter e refatorar.

- Confiança: Proporciona mais confiança ao desenvolvedor, sabendo que o código funciona conforme o esperado.

### Desvantagens do TDD:

- Tempo Inicial: Pode aumentar o tempo de desenvolvimento inicial, já que envolve a escrita de testes antes do código.

- Complexidade: Requer uma mudança na mentalidade e disciplina dos desenvolvedores, o que pode ser difícil para alguns.

- Cobertura de Testes: Pode não cobrir todos os casos, especialmente em sistemas complexos.

- Manutenção dos Testes: Os testes precisam ser mantidos junto com o código, o que pode ser oneroso em projetos grandes.

<hr>

### Autor
Prof. Diego Max da Silva<br>
https://lattes.cnpq.br/4370663836049458