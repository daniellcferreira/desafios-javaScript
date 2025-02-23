const readline = require("readline"); // Importa o módulo readline para entrada do usuário no terminal

// Configuração da interface de leitura do console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Classe que calcula o frete com base na taxa fixa e taxa por produto
class CalculadoraFrete {
  constructor(taxaFixa, taxaPorProduto) {
    this.taxaFixa = taxaFixa; // Taxa fixa do frete
    this.taxaPorProduto = taxaPorProduto; // Taxa cobrada por unidade de produto
  }

  calcularFrete(listaProdutos) {
    if (!listaProdutos) {
      return "Entrada inválida"; // Retorna erro se a entrada estiver vazia
    }

    const produtos = listaProdutos.split(", ");

    const quantidadeTotal = produtos.reduce((total, produto) => {
      const partes = produto.split(":");
      if (partes.length !== 2 || isNaN(partes[1])) {
        return total; // Ignora entradas inválidas
      }
      return total + parseInt(partes[1], 10);
    }, 0);

    // Cálculo do frete total
    const valorTotalFrete =
      this.taxaFixa + quantidadeTotal * this.taxaPorProduto;

    // Retorna o valor formatado com duas casas decimais
    return valorTotalFrete.toFixed(2);
  }
}

// Função principal para interação com o usuário
function main() {
  rl.question(
    "Digite a lista de produtos no formato 'Produto:quantidade, Produto:quantidade':\n",
    (listaProdutos) => {
      rl.question("Digite a taxa fixa de frete:\n", (taxaFixa) => {
        rl.question("Digite a taxa por produto:\n", (taxaPorProduto) => {
          const taxaFixaNum = parseFloat(taxaFixa);
          const taxaPorProdutoNum = parseFloat(taxaPorProduto);

          if (isNaN(taxaFixaNum) || isNaN(taxaPorProdutoNum)) {
            console.log("Entrada inválida para taxas.");
          } else {
            const calculadora = new CalculadoraFrete(
              taxaFixaNum,
              taxaPorProdutoNum
            );
            console.log(
              "Valor total do frete:",
              calculadora.calcularFrete(listaProdutos)
            );
          }

          rl.close(); // Fecha a interface de leitura
        });
      });
    }
  );
}

// Chamar a função principal para iniciar o programa
main();
