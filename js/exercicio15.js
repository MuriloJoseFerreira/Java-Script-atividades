const produtos = {
  1: ["Hambúrguer", 15],
  2: ["Cachorro-quente", 12],
  3: ["Pizza", 20],
  4: ["Refrigerante", 6]
};
const op = prompt("1 - Hambúrguer - R$ 15,00\n2 - Cachorro-quente - R$ 12,00\n3 - Pizza - R$ 20,00\n4 - Refrigerante - R$ 6,00\n\nDigite o número do produto:");
if (produtos[op]) {
  const qtd = Number(prompt("Digite a quantidade:"));
  const total = produtos[op][1] * qtd;
  alert("Total da compra: R$ " + total.toFixed(2).replace(".", ","));
} else {
  alert("Produto inválido");
}
