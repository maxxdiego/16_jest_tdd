const app = require("../src/app");
const supertest = require("supertest");
const request = supertest(app);
const mongoose = require("mongoose");

// beforeEach : Roda antes de cada teste
// afterEach : Roda depois de cada teste

const mainUser = {
  name: "Teste",
  email: "teste@email.com",
  password: "123456",
};

// Roda antes de todos os testes
beforeAll(async () => {
  // Inserir usuário Teste no banco
  try {
    await request.post("/user").send(mainUser);
  } catch (err) {
    console.log(err);
  }
});

// Roda depois de todos os testes
afterAll(async () => {
  // Remover o usuário Teste no banco
  try {
    await request.delete(`/user/${mainUser.email}`);
  } catch (err) {
    console.log(err);
  }

  // Fecha a conexão com o MongoDB após todos os testes
  await mongoose.disconnect();
});

describe("Cadastro de usuários", () => {
  test("Deve cadastrar um usuário com sucesso.", () => {
    const time = Date.now();
    const email = `${time}@gmail.com`;
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

  test("Deve impedir que o usuário se cadastre com os dados vazios.", () => {
    const user = { name: "", email: "", password: "" };

    return request
      .post("/user")
      .send(user)
      .then((res) => {
        expect(res.statusCode).toEqual(400); // 400 = Bad request
      })
      .catch((err) => {
        throw err;
      });
  });

  test("Deve impedir que o usuário se cadastre com um e-mail repetido.", () => {
    const time = Date.now();
    const email = `${time}@gmail.com`;
    const user = { name: "Diego", email, password: "123456" };

    return request
      .post("/user")
      .send(user)
      .then((res) => {
        expect(res.statusCode).toEqual(200);
        expect(res.body.email).toEqual(email);

        return request
          .post("/user")
          .send(user)
          .then((res) => {
            expect(res.statusCode).toEqual(400);
            expect(res.body.error).toEqual("E-mail já cadastrado.");
          })
          .catch((err) => {
            throw err;
          });
      })
      .catch((err) => {
        throw err;
      });
  });
});

describe("Autenticação de usuários", () => {
  test("Deve retornar um token quando logar.", () => {
    return request
      .post("/auth")
      .send({ email: mainUser.email, password: mainUser.password })
      .then((res) => {
        expect(res.statusCode).toEqual(200);
        expect(res.body.token).toBeDefined();
      })
      .catch((err) => {
        throw err;
      });
  });

  test("Deve impedir que um usuário não cadastrado se logue.", () => {
    return request
      .post("/auth")
      .send({ email: "email-errado@email.com", password: "senha-errada" })
      .then((res) => {
        expect(res.statusCode).toEqual(403);
        expect(res.body.errors.email).toEqual("E-mail não cadastrado.");
      })
      .catch((err) => {
        throw err;
      });
  });

  test("Deve impedir que um usuário se logue com uma senha errada.", () => {
    return request
      .post("/auth")
      .send({ email: mainUser.email, password: "senha-errada" })
      .then((res) => {
        expect(res.statusCode).toEqual(403);
        expect(res.body.errors.password).toEqual("Senha incorreta.");
      })
      .catch((err) => {
        throw err;
      });
  });
});
