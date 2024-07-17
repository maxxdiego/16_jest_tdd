// Como escrever os testes?

// test("Deve fazer algo quando receber Y", () => {})
// test("Deve cadastrar um usuário quando receber um e-mail X", () => {})
// it("Should do something...", () => {})


const app = require("../app.js")

// describe() serve para organizar os testes em categorias
describe("Operações básicas", () => {

    // 1º PARÂMETRO O QUE O TESTE FAZ
    // 2º PARÂMETRO COM A FUNÇÃO DO TESTE
    // test() ou it("Should do somenthing...")

    test("Deve retornar o valor 10 ao somar 5 + 5", () => {
        let resultado = app.soma(5,2)
        expect(resultado).toEqual(10)
    })

    test("Deve retornar o valor 10 ao multiplicar 2 por 5", () => {
        let resultado = app.mult(2,5)
        expect(resultado).toEqual(10)
    })
})




