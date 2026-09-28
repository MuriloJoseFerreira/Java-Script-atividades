const peso = Number(prompt("Digite o peso em quilogramas:"));
const altura = Number(prompt("Digite a altura em metros:"));
const imc = peso / (altura * altura);
let classificacao;
if (imc < 18.5) {
  classificacao = "Abaixo do peso";
} else if (imc < 25) {
  classificacao = "Peso adequado";
} else if (imc < 30) {
  classificacao = "Sobrepeso";
} else {
  classificacao = "Obesidade";
}
alert("IMC: " + imc.toFixed(2) + "\nClassificação: " + classificacao);
