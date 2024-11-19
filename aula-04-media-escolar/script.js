alert("Boletim escolar");
const student = prompt("Digite seu nome completo:");

let i = 1;
let grade;
let totalGrades = 0;

while(i <= 3) {
  grade = prompt(`Informe a nota do ${i}° bimestre:`);
  totalGrades = totalGrades + Number(grade);
  i++;
}

let average = (totalGrades/3).toFixed(2);

if(average >= 6) {
  alert(`Parabéns, ${student}! Você passou com média ${average}.`);
} else {
  alert(`Que pena, ${student}! Sua média foi ${average}, mas não desista, se dedique para a recuperação.`);
}