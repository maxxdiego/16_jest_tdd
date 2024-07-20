const app = require("../src/app");
const supertest = require("supertest");
const request = supertest(app);
const mongoose = require("mongoose")

describe("Cadastro de usuário", () => {
  afterAll(async () => {
    // Fecha a conexão com o MongoDB após todos os testes
    await mongoose.disconnect();
  });

  test("Deve cadastrar um usuário com sucesso", () => {
    const time = Date.now();
    let email = `${time}@gmail.com`;
    const user = { name: "Diego", email, password: "123456" };

    return request
      .post("/user")
      .send(user)
      .then((res) => {
        expect(res.statusCode).toEqual(200);
        expect(res.body.email).toEqual(email);
      })
      .catch((err) => {
        throw err;
      });
  });
});
