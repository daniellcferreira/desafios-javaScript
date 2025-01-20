const readline = require("readline"); // Importa o módulo readline para capturar entradas do console

// Configura a interface para leitura de entradas e escrita de saídas no console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Pergunta ao usuário os preços de compra
rl.question(
  "Digite os preços de compra separados por vírgula: ",
  (precosEntrada) => {
    // Pergunta ao usuário os dividendos recebidos
    rl.question(
      "Digite os dividendos recebidos separados por vírgula: ",
      (dividendosEntrada) => {
        // Converte a entrada de preços em um array de números
        let precosCompra = precosEntrada.split(", ").map(Number);
        // Converte a entrada de dividendos em um array de números
        let dividendosRecebidos = dividendosEntrada.split(", ").map(Number);

        // Função para calcular os rendimentos
        function calcularRendimentos(precosCompra, dividendosRecebidos) {
          // Soma todos os dividendos recebidos
          let dividendosTotais = dividendosRecebidos.reduce(
            (soma, valor) => soma + valor,
            0
          );
          // Soma todos os preços de compra
          let precoTotalCompra = precosCompra.reduce(
            (soma, valor) => soma + valor,
            0
          );
          // Calcula o rendimento percentual
          return (dividendosTotais / precoTotalCompra) * 100;
        }

        // Calcula os rendimentos com base nas entradas
        let rendimentos = calcularRendimentos(
          precosCompra,
          dividendosRecebidos
        );
        // Exibe o rendimento formatado com duas casas decimais
        console.log(rendimentos.toFixed(2) + "%");
        rl.close(); // Encerra a interface de leitura
      }
    );
  }
);
