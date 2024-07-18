function verificaMaiorIdade(idade) {
    if (idade >= 18 ) {
        return "MAIOR"
    } else {
        return "MENOR"
    }
}

function taxaEntrega(estado) {
    const taxa = 49.90
    if (estado.toUpperCase() != "SP") {
        return taxa
    } else {
        return 0
    }
}

function verificaItensCarrinho(itens) {
    if (itens > 0){
        return true
    } else if (itens == 0) {
        return false
    } else {
        return "Valor inválido"
    }
}

module.exports = {
    verificaMaiorIdade,
    taxaEntrega,
    verificaItensCarrinho
}