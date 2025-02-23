# Identificação de Descontos em Brinquedos

## Descrição

O objetivo deste projeto é auxiliar uma loja a identificar quais brinquedos estão elegíveis para descontos com base na quantidade comprada. O sistema recebe uma lista de brinquedos com suas respectivas quantidades e preços unitários, processa as informações e aplica um desconto de 10% para aqueles cuja quantidade comprada seja maior ou igual a 5 unidades.

## Entrada

O usuário deve fornecer uma lista de brinquedos no seguinte formato:

```
Nome_do_brinquedo: quantidade, preço_unitário - Nome_do_brinquedo: quantidade, preço_unitário
```

### Exemplo de Entrada:

```
Carrinho: 10, 15.00 - Boneca: 3, 25.00
```

## Processamento

1. O sistema recebe a lista de brinquedos como entrada.
2. Se a quantidade comprada for **5 ou mais unidades**, aplica-se um **desconto de 10%** no preço unitário.
3. Caso contrário, o preço unitário permanece inalterado.
4. A saída é formatada no mesmo modelo da entrada, mas com os preços finais ajustados.

## Saída

A saída será uma lista de brinquedos com seus respectivos preços finais após a aplicação de possíveis descontos.

### Formato da Saída:

```
Nome_do_brinquedo: preço_final - Nome_do_brinquedo: preço_final
```

### Exemplo de Saída:

```
Carrinho: 13.50 - Boneca: 25.00
```

## Observações

- Os brinquedos na lista são separados por " - ".
- Cada brinquedo tem suas informações separadas por ": " e ", ".
- O preço final é exibido com duas casas decimais.
