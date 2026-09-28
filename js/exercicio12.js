const a = Number(prompt("Digite o primeiro número:"));
const b = Number(prompt("Digite o segundo número:"));
const c = Number(prompt("Digite o terceiro número:"));
let maior = a;
if (b > maior) {
  maior = b;
}
if (c > maior) {
  maior = c;
}
alert("O maior número é " + maior);
