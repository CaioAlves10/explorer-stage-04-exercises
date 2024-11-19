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

let pacientsNames = [];

for(patient of patients) {
  pacientsNames.push(patient.name);
}

alert(pacientsNames);