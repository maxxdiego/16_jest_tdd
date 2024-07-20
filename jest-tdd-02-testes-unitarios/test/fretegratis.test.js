const app = require("../src/app")

// Testando verificação de frete grátis
test("Deve retornar verdadeiro para o valor de compra acima de R$100,00", () => {
    expect(app.verificaFreteGratis(150)).toBeTruthy()
})

test("Deve retornar falso para o valor de compra igual ou abaixo de R$100,00", () => {
    expect(app.verificaFreteGratis(100)).toBeFalsy()
})