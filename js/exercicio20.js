const produtos = {
  1: ["Camiseta", 50],
  2: ["Calça", 100],
  3: ["Tênis", 200]
};
const pagamentos = {
  1: 0.10,
  2: 0.05,
  3: 0
};
const r = v => "R$ " + v.toFixed(2).replace(".", ",");
const prod = prompt("1 - Camiseta - R$ 50,00\n2 - Calça - R$ 100,00\n3 - Tênis - R$ 200,00\n\nEscolha o produto:");
if (!produtos[prod]) {
  alert("Erro: produto inválido");
} else {
  const qtd = Number(prompt("Digite a quantidade:"));
  const subtotal = produtos[prod][1] * qtd;
  const pag = prompt("Subtotal: " + r(subtotal) + "\n\n1 - Pix: 10% de desconto\n2 - Dinheiro: 5% de desconto\n3 - Cartão: sem desconto\n\nEscolha a forma de pagamento:");
  if (!(pag in pagamentos)) {
    alert("Erro: forma de pagamento inválida");
  } else {
    const desconto = subtotal * pagamentos[pag];
    alert("Produto: " + produtos[prod][0] + "\nQuantidade: " + qtd + "\nSubtotal: " + r(subtotal) + "\nDesconto: " + r(desconto) + "\nValor final: " + r(subtotal - desconto));
  }
}
