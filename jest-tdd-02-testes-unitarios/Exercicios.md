## Crie um projeto Node.js com JEST e realize os seguintes testes em uma aplicação:

### Teste 1

Crie um teste que valide uma função chamada "verificaMaiorIdade". A função deve retornar "MAIOR" caso receba um valor >= 18. Na primeira execução o teste deve falhar, pois a função ainda não existe. Após isso, implemente a função e teste novamente enviando o valor adequado.

Após o primeiro teste ser bem-sucedido, refatore o código e faça um novo teste, verificando agora se a função retorna "MENOR" caso receba um valor < 18.

### Teste 2

Crie um teste que valide uma função chamada "taxaEntrega". A função deve retornar o valor "49.90" caso recebe uma sigla de estado diferente de "SP". Na primeira execução o teste deve falhar, pois a função ainda não existe. Após isso, implemente a função e teste novamente.

Após o primeiro teste ser bem-sucedido, refatore o código e faça um novo teste, verificando se a função retorna "0" caso receba a sigla de estado igual a "SP". Trate a diferenciação de letras maiúsculas e minúsculas.

### Teste 3

Crie um teste que valide uma função chamada "verificaCarrinho". A função deve retornar "true" (carrinho cheio) caso receba um número de itens acima de "0". Na primeira execução o teste deve falhar, pois a função ainda não existe. Após isso, implemente a função e teste novamente.

Após o primeiro teste ser bem-sucedido, refatore o código e faça um novo teste, verificando se a função retorna "false" (carrinho vazio) caso receba um número de itens igual a "0".
