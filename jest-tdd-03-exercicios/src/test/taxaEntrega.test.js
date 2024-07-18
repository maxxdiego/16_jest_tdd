// Crie um teste que valide uma função chamada "taxaEntrega". A função deve retornar o valor "49.90" caso recebe uma sigla de estado diferente de "SP". Na primeira execução o teste deve falhar, pois a função ainda não existe. Após isso, implemente a função e teste novamente.

// Após o primeiro teste ser bem-sucedido, refatore o código e faça um novo teste, verificando se a função retorna "0" caso receba a sigla de estado igual a "SP". Trate a diferenciação de letras maiúsculas e minúsculas.

const app = require("../app.js")

test("Deve retornar o valor '49.90' ao receber uma sigla de estado diferente de 'SP'.", () => {
    const taxaEntrega = app.taxaEntrega("PR")
    expect(taxaEntrega).toEqual(49.90)
})

test("Deve retornar o valor '0' ao receber a sigla de estado 'SP'.", () => {
    const taxaEntrega = app.taxaEntrega("sp")
    expect(taxaEntrega).toEqual(0)
})