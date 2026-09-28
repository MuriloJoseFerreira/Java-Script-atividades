const valor = Number(prompt("Digite o valor da compra:"));
let final = valor;
if (valor >= 200) {
  final = valor * 0.9;
}
alert("Valor final da compra: R$ " + final.toFixed(2).replace(".", ","));
