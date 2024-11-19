const patients = [
  {
    name: "Marta",
    age: 21,
    weight: 70,
    height: 1.68,
  },
  {
    name: "Nico",
    age: 30,
    weight: 80,
    height: 1.72,
  },
  {
    name: "Ian",
    age: 19,
    weight: 72,
    height: 1.70,
  }
]

function imc(weight, height) {
  return (weight / (height ** 2)).toFixed(2)
}

function printPatientIMC(patient) {
  return `
    Paciente ${patient.name} possui o IMC de ${imc(patient.weight, patient.height)}
  `
}

for(let patient of patients) {
  let imcMessage = printPatientIMC(patient);
  alert(imcMessage);
}