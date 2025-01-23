const { parse } = require("path");
const readline = require("readline");

// configura a entrada do console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// função que calcula o beta
function calcularBeta(retornoAtivoStr, retornoMercadoStr) {
  // converte string de entrada em arrays de números
  const retornoAtivo = retornoAtivoStr.split(",").map(Number);
  const retornoMercado = retornoMercadoStr.split(",").map(Number);

  if (retornoAtivo.length !== retornoMercado.length) {
    throw new Error("Os vetores de retorno devem ter o mesmo tamanho");
  }

  // função que calcula a média
  function calcularMedia(valores) {
    return valores.reduce((soma, valor) => soma + valor, 0) / valores.length;
  }

  const mediaRetornosAtivo = calcularMedia(retornoAtivo);
  const mediaRetornosMercado = calcularMedia(retornoMercado);

  // calcula a covariância
  const covariancia =
    retornoAtivo.reduce(
      (soma, retornoAtivo, i) =>
        soma +
        (retornoAtivo - mediaRetornosAtivo) *
          (retornoMercado[i] - mediaRetornosMercado),
      0
    ) / retornoAtivo.length;

  // calcula a variância
  const varianciaMercado =
    retornoMercado.reduce(
      (soma, retornoMercado) =>
        soma + Math.pow(retornoMercado - mediaRetornosMercado, 2),
      0
    ) / retornoMercado.length;

  // calcula o beta
  const beta = covariancia / varianciaMercado;

  return parseFloat(beta.toFixed(2));
}

// função que lê a entrada do console
rl.question(
  "Digite os retornos do ativo separados por vírgula: ",
  (retornoAtivoStr) => {
    rl.question(
      "Digite os retornos do mercado separados por virgula: ",
      (retornoMercadoStr) => {
        try {
          const beta = calcularBeta(retornoAtivoStr, retornoMercadoStr);
          console.log("Beta do ativo calculado:", beta);
        } catch (error) {
          console.error("Erro:", error.message);
        }
        rl.close();
      }
    );
  }
);
