const app = require("../src/app");
const supertest = require("supertest");
const request = supertest(app);
const mongoose = require("mongoose");

afterAll(async () => {
  // Fecha a conexão com o MongoDB após todos os testes
  await mongoose.disconnect();
});

test("A aplicação deve responder na porta 3131", () => {
  return request
    .get("/")
    .then((res) => {
      let status = res.statusCode;
      expect(status).toEqual(200);
    })
    .catch((err) => {
      throw err;
    });
});
