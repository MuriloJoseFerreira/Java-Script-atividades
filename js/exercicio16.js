const formas = {
  1: 0.9,
  2: 0.95,
  3: 1,
  4: 1.1
};
const valor = Number(prompt("Digite o valor da compra:"));
const op = prompt("1 - Pix (10% de desconto)\n2 - Dinheiro (5% de desconto)\n3 - Cartão à vista (sem desconto)\n4 - Cartão parcelado (acréscimo de 10%)\n\nEscolha a forma de pagamento:");
if (formas[op]) {
  const final = valor * formas[op];
  alert("Valor final a pagar: R$ " + final.toFixed(2).replace(".", ","));
} else {
  alert("Forma de pagamento inválida");
}
