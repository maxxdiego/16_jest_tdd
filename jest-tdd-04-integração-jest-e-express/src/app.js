const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.sendStatus(200)
})

app.get("/cor/:pessoa", (req, res) => {
    let pessoa = req.params.pessoa
    
    if(pessoa == "Diego"){
        res.json({cor: "Azul", color: "Blue"})
    }
})

module.exports = app