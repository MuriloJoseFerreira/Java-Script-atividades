const combustiveis = {
  1: ["Gasolina", 6.2],
  2: ["Etanol", 4.3],
  3: ["Diesel", 6]
};
const op = prompt("1 - Gasolina - R$ 6,20 por litro\n2 - Etanol - R$ 4,30 por litro\n3 - Diesel - R$ 6,00 por litro\n\nEscolha o tipo de combustível:");
if (combustiveis[op]) {
  const litros = Number(prompt("Digite a quantidade de litros:"));
  const antes = combustiveis[op][1] * litros;
  const desconto = antes > 200 ? antes * 0.05 : 0;
  const final = antes - desconto;
  const r = v => "R$ " + v.toFixed(2).replace(".", ",");
  let msg = "Combustível: " + combustiveis[op][0] + "\nLitros: " + litros + "\nValor antes do desconto: " + r(antes);
  if (desconto > 0) {
    msg += "\nDesconto: " + r(desconto);
  }
  msg += "\nValor final: " + r(final);
  alert(msg);
} else {
  alert("Opção inválida");
}
