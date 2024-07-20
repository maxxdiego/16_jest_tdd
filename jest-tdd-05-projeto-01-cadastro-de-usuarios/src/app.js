/* Disclaimer:
  Nessa aplicação não será usado nenhum padrão de projeto, por exemplo MVC, 
  pois o foco é o aprendizado de realização de testes. */

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

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



// GET
app.get("/", (req, res) => {
  res.json({});
});

// POST
app.post("/user", async (req, res) => {
  const { name, email, password } = req.body;

  if (name == "" || email == "" || password == "") {
    res.sendStatus(400);
    return;
  }

  try {
    const user = await User.findOne({ email });
    if (user != undefined) {
      res.statusCode = 400;
      res.json({ error: "E-mail já cadastrado." });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const newUser = new User({ name, email, password: hash });
    await newUser.save();
    res.json({ email });
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
});

// DELETE
app.delete("/user/:email", async (req, res) => {
  await User.deleteOne({ email: req.params.email });
  res.sendStatus(200);
});

module.exports = app;
