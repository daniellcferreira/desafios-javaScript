const readline = require("readline"); // Importa o módulo readline

// Cria a interface de leitura e escrita no console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Função para capturar entradas do usuário de forma assíncrona
function obterEntrada(pergunta) {
  return new Promise((resolve) => {
    rl.question(pergunta, (resposta) => {
      resolve(resposta);
    });
  });
}

// Função principal para realizar o cálculo
async function calcularInvestimento() {
  // Captura as entradas do usuário
  let valorInicial = await obterEntrada(
    "Digite o valor inicial do investimento: "
  );
  let taxaJurosAnual = await obterEntrada("Digite a taxa de juros anual (%): ");
  let numeroAnos = await obterEntrada("Digite o número de anos: ");

  // Validação de entradas
  if (isNaN(valorInicial) || isNaN(taxaJurosAnual) || isNaN(numeroAnos)) {
    console.log("Por favor, insira valores numéricos válidos.");
    rl.close();
    return;
  }

  // Converte os tipos das entradas
  valorInicial = parseFloat(valorInicial);
  taxaJurosAnual = parseFloat(taxaJurosAnual);
  numeroAnos = parseInt(numeroAnos);

  // Calcula o rendimento
  let valorFinal = calcularRendimento(valorInicial, taxaJurosAnual, numeroAnos);

  // Exibe o resultado
  console.log(`Valor final após ${numeroAnos} anos: R$ ${valorFinal}`);
  rl.close(); // Fecha a interface de leitura
}

// Função para calcular o valor final do investimento com juros compostos
function calcularRendimento(valorInicial, taxaJurosAnual, numeroAnos) {
  // Converte a taxa de juros de porcentagem para decimal
  let taxaJurosDecimal = taxaJurosAnual / 100;

  // Calcula o valor final usando a fórmula dos juros compostos
  let valorFinal = valorInicial * Math.pow(1 + taxaJurosDecimal, numeroAnos);

  // Retorna o valor final arredondado como número
  return Math.round(valorFinal * 100) / 100; // Arredonda para 2 casas decimais
}

// Chama a função principal
calcularInvestimento();
