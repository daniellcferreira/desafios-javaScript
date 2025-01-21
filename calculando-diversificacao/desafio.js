const readline = require("readline");

function calcularDiversificacao() {
  // Configuração para receber entrada no Node.js
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    "Digite os valores do portfólio separados por vírgulas (ex: 100,200,300):\n",
    (portfolioStr) => {
      try {
        // Verifica se a entrada não está vazia
        if (!portfolioStr.trim()) {
          console.log("Entrada inválida: a string está vazia.");
          rl.close();
          return;
        }

        // Converte a string de entrada para um array de números
        const valores = portfolioStr.split(",").map(Number);

        // Verifica se todos os valores são números válidos
        if (valores.some(isNaN)) {
          console.log(
            "Entrada inválida: certifique-se de inserir apenas números separados por vírgulas."
          );
          rl.close();
          return;
        }

        // Calcula o valor total do portfólio
        const valorTotal = valores.reduce((acc, valor) => acc + valor, 0);

        // Verifica se o total é maior que zero para evitar divisões por zero
        if (valorTotal === 0) {
          console.log(
            "O valor total do portfólio é zero. Não é possível calcular as porcentagens."
          );
          rl.close();
          return;
        }

        // Calcula a porcentagem de cada investimento em relação ao total
        const porcentagens = valores.map(
          (valor) => ((valor / valorTotal) * 100).toFixed(2) + "%"
        );

        // Imprime o array de porcentagens
        console.log("Porcentagens de cada investimento em relação ao total:");
        console.log(porcentagens.join(", "));
      } catch (error) {
        console.log(
          "Ocorreu um erro ao calcular as porcentagens: " + error.message
        );
      } finally {
        rl.close(); // Fecha a interface de entrada
      }
    }
  );
}

// Chama a função principal
calcularDiversificacao();
