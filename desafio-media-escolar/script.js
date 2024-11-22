let students = [
  {
    name: "Ed",
    testGrade1: 10,
    testGrade2: 7,
  },
  {
    name: "Joaquina",
    testGrade1: 4.6,
    testGrade2: 8,
  },
  {
    name: "Gusta",
    testGrade1: 6,
    testGrade2: 9.1,
  },
  {
    name: "Fernanda",
    testGrade1: 7.2,
    testGrade2: 7.5,
  },
  {
    name: "Mike",
    testGrade1: 4,
    testGrade2: 6,
  }
]
let studentAverage;
let averages = [];
let result;

function schoolAverage(students) {
  for(i = 0; i < students.length; i++) {
    studentAverage = (students[i].testGrade1 + students[i].testGrade2) / 2;
    averages.push(studentAverage);
  }

  return averages;
}

schoolAverage(students)

for(i = 0; i < students.length; i++) {
  if(averages[i] >= 7) {
    alert(`
      A média do(a) aluno(a) ${students[i].name} é: ${averages[i]}
      Parabéns! Você foi aprovado(a) no concurso!
    `);
  } else {
    alert(`
      A média do(a) aluno(a) ${students[i].name} é: ${averages[i]}
      Não foi dessa vez! Você não foi aprovado(a) no concurso!
    `);
  }
}