const minimas = {
  1: 0,
  2: 12,
  3: 16,
  4: 18
};
const idade = Number(prompt("Digite a sua idade:"));
const op = prompt("1 - Filme livre\n2 - Filme com classificação de 12 anos\n3 - Filme com classificação de 16 anos\n4 - Filme com classificação de 18 anos\n\nEscolha o filme:");
if (op in minimas) {
  if (idade >= minimas[op]) {
    alert("Você tem idade suficiente para assistir a este filme.");
  } else {
    alert("Você não tem idade suficiente para assistir a este filme.");
  }
} else {
  alert("Opção inválida");
}
