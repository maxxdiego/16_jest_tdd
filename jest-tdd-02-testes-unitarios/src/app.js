// Verificador de frete grátis
// Compras acima de R$ 100,00 não pagam frete.

function verificaFreteGratis(valor) { 
    if (valor > 100) {
        return true
    } else {
        return false
    }
}

// Verificador de nacionalidade
// Sigla do país diferente de BR será estrangeiro

function verificaNacionalidade(sigla) {
    if (sigla.toUpperCase() != 'BR') {
        return 'Estrangeiro'
    } else {
        return 'Brasileiro'
    }

}

module.exports = {
    verificaFreteGratis,
    verificaNacionalidade
}
