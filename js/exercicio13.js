const a = Number(prompt("Digite o primeiro número:"));
const b = Number(prompt("Digite o segundo número:"));
const op = prompt("1 - Somar\n2 - Subtrair\n3 - Multiplicar\n4 - Dividir\n\nEscolha a opção:");
switch (op) {
  case "1":
    alert("Resultado: " + (a + b));
    break;
  case "2":
    alert("Resultado: " + (a - b));
    break;
  case "3":
    alert("Resultado: " + (a * b));
    break;
  case "4":
    alert(b === 0 ? "Não é possível dividir por zero" : "Resultado: " + (a / b));
    break;
  default:
    alert("Opção inválida");
}
