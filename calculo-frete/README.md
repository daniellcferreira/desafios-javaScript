# Desafio de Cálculo de Frete

Este projeto tem como objetivo calcular o valor total do frete para uma compra realizada em um e-commerce de brinquedos. O cálculo é feito com base em uma taxa fixa e uma taxa variável por produto. O valor total do frete é calculado considerando a quantidade de produtos comprados.

## Descrição do Desafio

Neste desafio, você deve criar uma classe que faça o cálculo do frete de acordo com as informações fornecidas. O cálculo do frete será realizado utilizando a seguinte fórmula:

Frete Total = Taxa Fixa + (Taxa por Produto x Quantidade Total de Produtos)

### Entrada de Dados

A entrada consistirá em:

1. Uma lista de produtos no formato "Nome: Quantidade", separados por vírgula e espaço.
2. A taxa fixa de frete e a taxa por produto, fornecidas como dois números.

Exemplo de entrada:

Produtos: "Carrinho:2, Boneca:3" Taxa Fixa: 5.00 Taxa por Produto: 2.00

### Processo

1. **Quantidade Total de Produtos**:

   - O total de produtos é a soma das quantidades informadas para cada item da lista. Exemplo:
     - Carrinho: 2
     - Boneca: 3
     - Quantidade total de produtos = 2 + 3 = 5

2. **Cálculo do Frete**:

   - O cálculo do frete total será feito somando a taxa fixa ao custo total dos produtos, conforme a fórmula:

   Frete Total = Taxa Fixa + (Taxa por Produto \* Quantidade Total de Produtos)

### Saída

O valor total do frete será exibido com duas casas decimais. Exemplo de saída:

15.00
