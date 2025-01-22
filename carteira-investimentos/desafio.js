// Importa o módulo readline para capturar entradas do usuário
const readline = require("readline");

// Configura o readline para capturar entradas e saídas
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Função para calcular o valor total da carteira
function calcularValorTotal(valoresIniciais, taxasRendimento, anos) {
  const valores = valoresIniciais.split(",").map(Number);
  const taxas = taxasRendimento.split(",").map(Number);

  if (valores.length !== taxas.length) {
    throw new Error(
      "Os arrays de valores e taxas devem ter o mesmo comprimento."
    );
  }
  if (isNaN(anos) || anos <= 0) {
    throw new Error("O número de anos deve ser um número inteiro positivo.");
  }

  let valorTotal = 0;

  valores.forEach((valor, i) => {
    if (isNaN(valor) || isNaN(taxas[i])) {
      throw new Error(`Valores inválidos encontrados na posição ${i}.`);
    }
    const valorFinal = valor * Math.pow(1 + taxas[i], anos);
    valorTotal += valorFinal;
  });

  return valorTotal.toFixed(2);
}

// Captura das entradas do usuário
rl.question(
  "Insira os valores iniciais separados por vírgula: ",
  (valoresIniciais) => {
    rl.question(
      "Insira as taxas de rendimento separadas por vírgula: ",
      (taxasRendimento) => {
        rl.question("Insira o número de anos: ", (anos) => {
          try {
            const resultado = calcularValorTotal(
              valoresIniciais,
              taxasRendimento,
              parseInt(anos)
            );
            console.log(
              `Valor total da carteira após ${anos} anos: R$ ${resultado}`
            );
          } catch (error) {
            console.error(`Erro: ${error.message}`);
          }
          rl.close(); // Encerra o readline
        });
      }
    );
  }
);
