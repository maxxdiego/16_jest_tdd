// Crie um teste que valide uma função chamada "verificaCarrinho". A função deve retornar "true" (carrinho cheio) caso receba um número de itens acima de "0". Na primeira execução o teste deve falhar, pois a função ainda não existe. Após isso, implemente a função e teste novamente.

// Após o primeiro teste ser bem-sucedido, refatore o código e faça um novo teste, verificando se a função retorna "false" (carrinho vazio) caso receba um número de itens igual a "0".

// Após o segundo teste ser bem-sucedido, refatore o código e faça um novo teste, verificando se a função retorna "Valor inválido" caso receba um número de itens menor que "0".

const app = require("../app")

test("Deve retornar 'true' caso receba um número de itens acima de '0'.", () => {
    const carrinho = app.verificaItensCarrinho(3)
    expect(carrinho).toBeTruthy()
})

test("Deve retornar 'false' caso receba um número de itens igual a '0'.", () => {
    const carrinho = app.verificaItensCarrinho(0)
    expect(carrinho).toBeFalsy()
})

test("Deve retornar 'Valor inválido' caso receba um número de itens menor que '0'.", () => {
    const carrinho = app.verificaItensCarrinho(-5)
    expect(carrinho).toBe("Valor inválido")
})