alert("Iremos realizar alguns cálculos com os valores digitados");

let numberOne = prompt("Informe o 1° número: ");
let numberTwo = prompt("Informe o 2° número: ");

numberOne = Number(numberOne);
numberTwo = Number(numberTwo);

const sum = numberOne + numberTwo;
const sub = numberOne - numberTwo;
const multi = numberOne * numberTwo;
const div = (numberOne / numberTwo).toFixed(2);
const restDiv = numberOne % numberTwo;
let evenOrOdd;
let valueComparison;

if((sum % 2) == 0) {
  evenOrOdd = "par";
} else {
  evenOrOdd = "ímpar";
}

if(numberOne == numberTwo) {
  valueComparison = true;
} else {
  valueComparison = false;
}

alert(`
  Soma: ${sum}
  Subtração: ${sub}
  Multiplicação: ${multi}
  Divisão: ${div}
  Resto da divisão: ${restDiv}
  A soma dos dois números é: ${evenOrOdd}
  Os valores são iguais: ${valueComparison}
`);