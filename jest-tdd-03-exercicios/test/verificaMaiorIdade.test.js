/* Crie um teste que valide uma função chamada "verificaMaiorIdade". A função deve retornar "MAIOR" caso receba um valor >= 18. Na primeira execução o teste deve falhar, pois a função ainda não existe. Após isso, implemente a função e teste novamente enviando o valor adequado.
Após o primeiro teste ser bem-sucedido, refatore o código e faça um novo teste, verificando agora se a função retorna "MENOR" caso receba um valor < 18. */

const app = require("../src/app")

test("Deve retornar 'MAIOR' ao receber um valor >= 18.", () => {
    const idade = app.verificaMaiorIdade(18)
    expect(idade).toBe("MAIOR")
})

test("Deve retornar 'MENOR' ao receber um valor < 18.", () => {
    const idade = app.verificaMaiorIdade(14)
    expect(idade).toBe("MENOR")
})