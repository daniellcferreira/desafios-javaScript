const readline = require("readline"); // Importa o módulo readline

// Cria uma interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Função que verifica as promoções
function verificarPromocoes(entrada) {
  const taxaDesconto = 0.1; // Taxa de desconto de 10%

  // Verifica se a entrada é válida
  if (!entrada) {
    console.log("Entrada inválida");
    return;
  }

  // Separa os produtos e verifica se estão no formato correto
  const resultado = entrada.split(" - ").map((produto) => {
    const partes = produto.split(": ");
    if (partes.length !== 2) {
      return "Formato inválido";
    }

    const [nome, quantidadePreco] = partes; // Separa o nome do produto e a quantidade e preço
    const valores = quantidadePreco.split(", ").map(Number); // Separa a quantidade e o preço

    // Verifica se a quantidade e o preço são válidos
    if (valores.length !== 2 || valores.some(isNaN)) {
      return `${nome}: Entrada inválida`;
    }

    const [quantidade, precoUnitario] = valores; // Separa a quantidade e o preço
    const precoFinal =
      quantidade >= 5 ? precoUnitario * (1 - taxaDesconto) : precoUnitario;

    return `${nome}: ${precoFinal.toFixed(2)}`; // Retorna o nome do produto e o preço final
  });

  console.log(resultado.join(" - "));
}

// Pede ao usuário que digite os produtos
rl.question(
  "Digite os produtos no formato 'Produto: quantidade, preço' separados por ' - ':\n",
  (entrada) => {
    verificarPromocoes(entrada);
    rl.close();
  }
);
