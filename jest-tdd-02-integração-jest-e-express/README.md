# 02 - Integração Jest e Express

## Iniciar um projeto node:

```bash

npm init

```

## Instalar o JEST:

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

### Rodando o teste:

```bash

npm run test

```

<hr>

### Autor
Prof. Diego Max da Silva<br>
https://lattes.cnpq.br/4370663836049458