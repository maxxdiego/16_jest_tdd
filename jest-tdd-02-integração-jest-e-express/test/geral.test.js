const app = require("../src/app")
const supertest = require("supertest")


// let request = supertest("www.google.com")

let request = supertest(app)

test("A aplicação deve responder na porta 3131", async () => {
    //Promise
    // return request.get("/").then(res => expect(res.statusCode).toEqual(200))
    
    // Async/Await
    let res = await request.get("/")
    expect(res.statusCode).toEqual(200)
})

test("Deve retornar Azul como cor favorita do Diego", () => {
    return request.get("/cor/Diego").then((res) => {
        expect(res.statusCode).toEqual(200)
        expect(res.body.cor).toEqual("Azul")
        expect(res.body.color).toEqual("Blue")
    })
})