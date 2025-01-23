# Cálculo do Beta de um Ativo

## Descrição

Este programa em Node.js calcula o beta de um ativo com base nos retornos históricos do ativo e do mercado. O beta é uma medida de risco sistemático de um ativo em relação ao mercado.

O programa solicita os retornos do ativo e do mercado como entradas, realiza os cálculos necessários e retorna o valor do beta, arredondado para duas casas decimais.

## Entrada

- Retornos do ativo: uma sequência de números separados por vírgulas (exemplo: `0.1,0.2,0.15`).
- Retornos do mercado: uma sequência de números separados por vírgulas (exemplo: `0.05,0.1,0.08`).

**Nota**: Os dois conjuntos de retornos devem ter o mesmo número de elementos.

## Saída

- O valor do beta calculado, exibido no console.
- Em caso de erro (por exemplo, tamanhos diferentes dos vetores), será exibida uma mensagem de erro no console.

## Exemplo

**Entrada:**

```
Digite os retornos do ativo separados por vírgula: 0.1,0.2,0.15
Digite os retornos do mercado separados por virgula: 0.05,0.1,0.08
```

**Saída:**

```
Beta do ativo calculado: 1.25
```
