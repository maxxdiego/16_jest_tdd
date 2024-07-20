const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/systempic")
  .then(() => {
    console.log("Conectado ao banco de dados com sucesso!");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.json({});
});

module.exports = app;
