const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/User");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/systempic")
  .then(() => {
    // console.log("Conectado ao banco de dados com sucesso!");
  })
  .catch((err) => {
    console.log(err);
  });

/* Disclaimer:
  Nessa aplicação não será usado nenhum padrão de projeto, por exemplo MVC, 
  pois o foco é o aprendizado de realização de testes. */

app.get("/", (req, res) => {
  res.json({});
});

app.post("/user", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.json({ email });
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
});

module.exports = app;
