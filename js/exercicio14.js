const m = Number(prompt("Digite o valor em metros:"));
const op = prompt("1 - Converter para centímetros\n2 - Converter para milímetros\n3 - Converter para quilômetros\n\nEscolha a opção:");
switch (op) {
  case "1":
    alert(m + " m = " + (m * 100) + " cm");
    break;
  case "2":
    alert(m + " m = " + (m * 1000) + " mm");
    break;
  case "3":
    alert(m + " m = " + (m / 1000) + " km");
    break;
  default:
    alert("Opção inválida");
}
