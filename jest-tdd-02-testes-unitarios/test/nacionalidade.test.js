const app = require("../src/app")

test("Deve retornar nacionalidade 'Brasileiro' quando recebe a sigla 'BR'", () => {
    let nacionalidade = app.verificaNacionalidade('BR')
    expect(nacionalidade).toBe('Brasileiro')
})

test("Deve retornar nacionalidade 'Estrangeiro' quando recebe sigla diferente 'BR'", () => {
    let nacionalidade = app.verificaNacionalidade('US')
    expect(nacionalidade).toBe('Estrangeiro')
})